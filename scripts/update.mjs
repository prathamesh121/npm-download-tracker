// Records yesterday's npm download counts for popular JavaScript packages, building a daily CSV history.
import { readFile, writeFile } from "node:fs/promises";

const PACKAGES = [
  "react", "vue", "svelte", "@angular/core",
  "next", "nuxt", "astro",
  "express", "fastify", "koa", "@nestjs/core",
  "vite", "webpack", "esbuild",
  "typescript", "prisma", "mongoose", "axios", "zod",
];
const CSV = "data/downloads.csv";

// The bulk endpoint doesn't accept scoped packages, so query one at a time.
const counts = {};
let day;
for (const pkg of PACKAGES) {
  const res = await fetch(`https://api.npmjs.org/downloads/point/last-day/${pkg}`);
  if (!res.ok) throw new Error(`npm API failed for ${pkg}: ${res.status}`);
  const body = await res.json();
  counts[pkg] = body.downloads;
  day = body.start;
}

let csv = await readFile(CSV, "utf8").catch(() => `date,${PACKAGES.join(",")}\n`);
const lines = csv.trim().split("\n");
if (lines.some((l) => l.startsWith(`${day},`))) {
  console.log(`Already have downloads for ${day}`);
  process.exit(0);
}
csv = `${lines.join("\n")}\n${day},${PACKAGES.map((p) => counts[p]).join(",")}\n`;
await writeFile(CSV, csv);

// Compare with the same weekday last week when we have it.
const history = csv.trim().split("\n").slice(1);
const lastWeek = history.length > 7 ? history.at(-8).split(",").slice(1).map(Number) : null;

const fmt = (n) => n.toLocaleString("en-US");
const ranked = [...PACKAGES].sort((a, b) => counts[b] - counts[a]);
const table = ["| # | Package | Downloads | vs last week |", "|---|---|---|---|"].concat(
  ranked.map((p, i) => {
    let delta = "-";
    if (lastWeek) {
      const prev = lastWeek[PACKAGES.indexOf(p)];
      const d = ((counts[p] - prev) / prev) * 100;
      delta = `${d >= 0 ? "+" : ""}${d.toFixed(1)}%`;
    }
    return `| ${i + 1} | [${p}](https://www.npmjs.com/package/${p}) | ${fmt(counts[p])} | ${delta} |`;
  }),
);

const marker = "<!-- latest -->";
const readme = await readFile("README.md", "utf8");
await writeFile("README.md", `${readme.split(marker)[0]}${marker}\n## Downloads on ${day}\n\n${table.join("\n")}\n`);
console.log(`Saved downloads for ${day}`);
