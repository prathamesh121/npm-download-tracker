# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-24

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 78,823,295 | -1.3% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 75,492,212 | -2.1% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 73,466,923 | -2.7% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 47,359,647 | -2.9% |
| 5 | [react](https://www.npmjs.com/package/react) | 44,841,188 | -3.9% |
| 6 | [express](https://www.npmjs.com/package/express) | 36,082,445 | +0.8% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 26,775,187 | -2.1% |
| 8 | [next](https://www.npmjs.com/package/next) | 14,998,044 | -13.7% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,511,482 | -2.8% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,637,767 | -2.7% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,517,459 | -1.8% |
| 12 | [prisma](https://www.npmjs.com/package/prisma) | 4,327,083 | -2.8% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 4,103,356 | +0.3% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 2,032,074 | -0.8% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,778,236 | -0.2% |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,711,510 | -5.3% |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,578,004 | -10.1% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,558,438 | +0.7% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 607,241 | -2.1% |
