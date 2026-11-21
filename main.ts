import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const srcPath = join(here, "entry.txt");
const destPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, destPath);

// Post-write verification: the copied file must be byte-identical to the
// source, so the judge always reads exactly the poem we shipped.
const src = readFileSync(srcPath);
const dest = readFileSync(destPath);
if (!src.equals(dest)) {
  throw new Error("entry.txt copy verification failed: output differs from source");
}
const text = dest.toString("utf8");
console.log(
  `wrote ${destPath}: ${[...text].length} code points, ${statSync(destPath).size} bytes, verified byte-identical`
);
