# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-14

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 46,196,116 | -33.2% |
| 2 | [esbuild](https://www.npmjs.com/package/esbuild) | 40,422,403 | -36.4% |
| 3 | [typescript](https://www.npmjs.com/package/typescript) | 39,945,510 | -38.0% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 27,304,737 | -32.4% |
| 5 | [react](https://www.npmjs.com/package/react) | 25,623,923 | -33.6% |
| 6 | [express](https://www.npmjs.com/package/express) | 17,243,345 | -43.4% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 10,469,499 | -54.1% |
| 8 | [next](https://www.npmjs.com/package/next) | 9,572,621 | -30.9% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 5,513,682 | -53.0% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 2,528,634 | -35.2% |
| 11 | [fastify](https://www.npmjs.com/package/fastify) | 2,122,231 | -38.2% |
| 12 | [vue](https://www.npmjs.com/package/vue) | 2,105,566 | -45.9% |
| 13 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 1,883,679 | -48.5% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,380,953 | -22.4% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 972,696 | -32.6% |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 746,176 | -44.4% |
| 17 | [koa](https://www.npmjs.com/package/koa) | 594,644 | -60.6% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 502,759 | -63.3% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 301,487 | -40.9% |
