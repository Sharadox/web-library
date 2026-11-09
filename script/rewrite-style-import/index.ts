/**
 * After the build, points compiled JavaScript at the compiled stylesheets: `./index.module.scss` becomes
 * `./index.module.css` (Sass writes the CSS next to it in distribution/), so consumers need no Sass.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function rewrite(directory: string): number {
  let count = 0;
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) count += rewrite(path);
    else if (path.endsWith(".js")) {
      const text = readFileSync(path, "utf8");
      const rewritten = text.replace(/(["'])([^"']+)\.module\.scss\1/g, "$1$2.module.css$1");
      if (rewritten !== text) {
        writeFileSync(path, rewritten);
        count++;
      }
    }
  }
  return count;
}

console.log(`style imports rewritten in ${rewrite("distribution")} files`);
