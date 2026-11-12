# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-11

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 72,816,916 | -4.8% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 68,380,317 | -3.3% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 68,353,433 | -1.8% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 44,311,049 | +1.9% |
| 5 | [react](https://www.npmjs.com/package/react) | 41,360,749 | -1.7% |
| 6 | [express](https://www.npmjs.com/package/express) | 32,368,237 | -4.7% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 23,985,464 | -7.9% |
| 8 | [next](https://www.npmjs.com/package/next) | 14,935,548 | -2.7% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 12,189,906 | -8.8% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 4,164,904 | -4.3% |
| 11 | [vue](https://www.npmjs.com/package/vue) | 4,110,746 | -5.0% |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 3,981,810 | -6.9% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,688,242 | -4.5% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,833,609 | -0.4% |
| 15 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,663,655 | +6.8% |
| 16 | [koa](https://www.npmjs.com/package/koa) | 1,593,976 | -13.3% |
| 17 | [svelte](https://www.npmjs.com/package/svelte) | 1,508,297 | -6.1% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,370,788 | -12.6% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 549,853 | -1.1% |
