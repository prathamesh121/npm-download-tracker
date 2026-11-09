# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-08

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 42,021,131 | -43.4% |
| 2 | [esbuild](https://www.npmjs.com/package/esbuild) | 37,067,970 | -44.4% |
| 3 | [typescript](https://www.npmjs.com/package/typescript) | 35,813,135 | -47.3% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 24,394,007 | -41.3% |
| 5 | [react](https://www.npmjs.com/package/react) | 23,083,624 | -43.3% |
| 6 | [express](https://www.npmjs.com/package/express) | 15,714,164 | -53.2% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 9,595,541 | -63.0% |
| 8 | [next](https://www.npmjs.com/package/next) | 8,556,541 | -41.4% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 5,192,788 | -61.7% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 2,429,184 | -40.6% |
| 11 | [fastify](https://www.npmjs.com/package/fastify) | 1,933,948 | -47.4% |
| 12 | [vue](https://www.npmjs.com/package/vue) | 1,885,793 | -56.3% |
| 13 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 1,774,865 | -55.3% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,220,248 | -28.8% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 805,926 | -47.3% |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 675,725 | -56.8% |
| 17 | [koa](https://www.npmjs.com/package/koa) | 590,946 | -67.0% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 521,884 | -65.7% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 247,002 | -57.0% |
