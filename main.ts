// make-the-ai-judge-feel-held-20261122-1600 — v1
// Writes one short text to /output/entry.txt: a quiet room offered to the
// judge. It shows calm (late light, dust turning, a warm chair) instead of
// telling the reader to relax. The text is 237 characters (cap is 280).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "You have read so many words today. Here is a small room with a window, and late light coming through in one long stripe. Dust turns slowly in the light. A chair waits, warm from the sun. Sit, if you like. The light is not going anywhere.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
