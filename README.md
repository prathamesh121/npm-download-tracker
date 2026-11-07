# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-06

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 69,108,856 | - |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 64,433,309 | - |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 63,587,917 | - |
| 4 | [vite](https://www.npmjs.com/package/vite) | 40,391,072 | - |
| 5 | [react](https://www.npmjs.com/package/react) | 38,601,810 | - |
| 6 | [express](https://www.npmjs.com/package/express) | 30,448,481 | - |
| 7 | [axios](https://www.npmjs.com/package/axios) | 22,795,245 | - |
| 8 | [next](https://www.npmjs.com/package/next) | 13,844,656 | - |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 11,741,499 | - |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 3,900,442 | - |
| 11 | [vue](https://www.npmjs.com/package/vue) | 3,889,034 | - |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 3,656,202 | - |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,436,649 | - |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,778,730 | - |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,509,015 | - |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,442,722 | - |
| 17 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,371,405 | - |
| 18 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,342,020 | - |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 510,506 | - |
