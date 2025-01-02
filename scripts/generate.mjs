#!/usr/bin/env node

import yaml from "yaml";
import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
import slugify from "slugify";

function slugit(text) {
  return slugify(text, { lower: true, strict: true });
}

function padi(i) {
  return (i + 1).toString().padStart(2, "0");
}

const openai = new OpenAI();

const topics = yaml.parse(fs.readFileSync("./scripts/topics.yaml", "utf8"));

fs.mkdirSync("./topics", { recursive: true });

for (const topic of topics) {
  const target = path.join("topics", `${slugit(topic)}.md`);

  if (fs.existsSync(target)) {
    console.log(`Skipping ${topic} because it already exists`);
    continue;
  }

  console.log(`Generating ${topic}`);

  const articles = [];

  for (;;) {
    const messages = [
      {
        role: "system",
        content: `
You are the expert in the topic "${topic}".
You will teach me the topic "${topic}" in a series of markdown articles.
Report the generated articles by calling the function "report_article"
with the necessary parameters, which include:

- article index (starting from 1)
- article title (without index number)
- article content (in markdown format)

Start with simple articles and gradually increase the complexity
to go to the advanced coverage of the topic.
Output no more than 20 articles.

Each article content should be in the following format:

# [Title]

[[...Content formatted not to exceed 80 charecters per line if possible...]]

`
      },
      ...(articles.length === 0
        ? []
        : [
            {
              role: "assistant",
              content:
                `You have already generated articles with this titles:\n` +
                articles.map((a) => `- ${a.title}`).join("\n")
            }
          ]),
      {
        role: "user",
        content:
          articles.length === 0
            ? `Generate the first, introductory, article for the topic "${topic}".`
            : `Generate the ${
                articles.length + 1
              }th article for the topic "${topic}".`
      }
    ];
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      tool_choice: "required",
      tools: [
        {
          type: "function",
          function: {
            name: "report_article",
            description: "Reports the generated article",
            parameters: {
              type: "object",
              properties: {
                index: { type: "integer" },
                title: { type: "string" },
                content: { type: "string" }
              },
              required: ["index", "title", "content"]
            }
          }
        },
        {
          type: "function",
          function: {
            name: "done",
            description: "Finishes the article generation"
          }
        }
      ]
    });

    const message = response.choices[0].message;
    const fun = message.tool_calls[0].function;
    const args = JSON.parse(fun.arguments);

    console.log(fun.name, args);

    if (fun.name === "done" || articles.length > 20) {
      fs.writeFileSync(
        target,
        `# ${topic}\n\n` +
          articles
            .map(
              (a, i) =>
                `- [${padi(i)}. ${a.title}](#${slugit(
                  `${padi(i)}. ${a.title}`
                )})`
            )
            .join("\n") +
          "\n\n" +
          articles
            .flatMap((a, i) => [
              `## ${padi(i)}. ${a.title}`,
              a.content.replace(/^# .*$/gm, "").replace(/^#/gm, "##")
            ])
            .join("\n\n")
            .replace(/\n\n+/g, "\n\n")
            .trim() +
          "\n"
      );
      break;
    }

    if (fun.name === "report_article") {
      articles.push(args);
      console.log(`Generated article ${args.index}: ${args.title}`);
    }
  }
}
