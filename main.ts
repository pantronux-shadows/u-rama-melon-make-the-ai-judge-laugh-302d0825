import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life, under 200 characters, written to /output/entry.txt.
const joke =
  "Our office AI watched a week of meetings and booked a standing one to decide which meetings to cancel. It's the only invite everyone accepts.";

// The grader sandbox provides /output; OUT_DIR lets a local run redirect it.
const dir = process.env.OUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke, "utf8");
