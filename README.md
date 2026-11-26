# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-25

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 74,982,075 | -6.0% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 72,102,740 | -7.0% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 69,920,346 | -8.5% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 45,980,458 | -5.5% |
| 5 | [react](https://www.npmjs.com/package/react) | 43,083,977 | -7.8% |
| 6 | [express](https://www.npmjs.com/package/express) | 34,387,102 | -7.0% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 25,213,615 | -8.3% |
| 8 | [next](https://www.npmjs.com/package/next) | 13,725,530 | -17.4% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 12,820,560 | -7.3% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,567,837 | -1.1% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,270,676 | -3.9% |
| 12 | [prisma](https://www.npmjs.com/package/prisma) | 4,014,969 | -9.6% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,883,721 | -5.0% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,964,583 | -4.3% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,706,315 | -4.9% |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,667,632 | -4.1% |
| 17 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,490,683 | -5.1% |
| 18 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,489,016 | -13.5% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 606,564 | -0.2% |
