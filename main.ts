import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original funny line on everyday life, written fresh for this entry.
const LINE =
  "I finally organised all my cables into neat labelled boxes, and now I can't find the one labelled 'cables'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
