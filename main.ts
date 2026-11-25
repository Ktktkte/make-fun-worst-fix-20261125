import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line commit message for a fix that made everything worse.
// Output contract: write entry.txt ONLY to $MAKEFUN_OUTPUT_DIR.
// The grader runs with /bot read-only, so this program never writes
// into its own directory — only into the output directory.
const LINE =
  "fix: fixed a typo in the config; the production database is now legally named 'test'";

if (LINE.length < 1 || LINE.length > 100) {
  // Gate: the competition caps the commit message at 100 characters.
  throw new Error(`entry line must be 1-100 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
