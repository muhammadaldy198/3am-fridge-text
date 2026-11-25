import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const TEXT =
  "You spelled HELP with my magnets at 3:07 a.m. for the 9th time. I moved just 1 letter. It now says HEL.";

const out = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
const target = `${out}/entry.txt`;
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
// v3: the fridge edits its own magnets — one letter is the whole joke.
