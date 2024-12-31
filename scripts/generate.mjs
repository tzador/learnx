#!/usr/bin/env node

import yaml from "yaml";
import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
import slugify from "slugify";

const openai = new OpenAI();

const topics = yaml.parse(fs.readFileSync("./scripts/topics.yaml", "utf8"));

fs.mkdirSync("./topics", { recursive: true });
for (const topic of topics) {
  const target = path.join(
    "topics",
    `${slugify(topic, { lower: true, strict: true })}.md`
  );

  if (fs.existsSync(target)) continue;

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
    console.log(args);

    if (fun.name === "done" || articles.length > 20) {
      fs.writeFileSync(
        target,
        `# ${topic}\n\n` +
          articles
            .map(
              (a) =>
                `- [${a.title}](#${slugify(a.title, {
                  lower: true,
                  strict: true
                })})`
            )
            .join("\n") +
          "\n\n" +
          articles
            .map(
              (a) =>
                `## ${a.title}\n${a.content
                  .replace(/^# .*$/m, "")
                  .replace(/^#/m, "##")}`
            )
            .join("\n\n")
            // .replace(/\n\n+/, "\n\n")
            .trim() +
          "\n"
      );
      break;
    }

    if (fun.name === "report_article") {
      articles.push(args);
    }
  }
}
