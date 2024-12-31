#!/usr/bin/env node

import yaml from "yaml";
import fs from "fs";
import slugify from "slugify";

const topics = yaml.parse(fs.readFileSync("./scripts/topics.yaml", "utf8"));

let readme = fs.readFileSync("./README.md", "utf8");

readme = readme.replace(
  /<!-- TOPICS START -->[^<]+<!-- TOPICS END -->/,
  `\
<!-- TOPICS START -->

${topics
  .map(
    (topic) =>
      `- [${topic}](./topics/${slugify(topic, {
        lower: true,
        strict: true
      })}.md)`
  )
  .join("\n")}

<!-- TOPICS END -->
`
);

fs.writeFileSync("./README.md", readme);
