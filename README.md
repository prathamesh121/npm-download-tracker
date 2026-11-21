# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-20

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 70,679,253 | -2.6% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 68,161,000 | +0.1% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 66,213,805 | -0.9% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 42,896,751 | -1.5% |
| 5 | [react](https://www.npmjs.com/package/react) | 41,449,404 | +0.5% |
| 6 | [express](https://www.npmjs.com/package/express) | 31,829,422 | -0.1% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 22,854,601 | -2.8% |
| 8 | [next](https://www.npmjs.com/package/next) | 14,294,953 | -3.3% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 11,724,588 | -2.0% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,091,983 | +1.9% |
| 11 | [prisma](https://www.npmjs.com/package/prisma) | 3,858,046 | -4.9% |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 3,829,161 | -3.0% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,554,012 | -2.2% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,803,227 | -1.7% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 1,580,043 | -1.9% |
| 16 | [koa](https://www.npmjs.com/package/koa) | 1,521,785 | -1.7% |
| 17 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,339,273 | -0.8% |
| 18 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,309,446 | -9.3% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 534,240 | -1.2% |
