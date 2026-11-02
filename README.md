# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-10-29

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 74,264,507 | - |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 67,901,734 | - |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 66,695,458 | - |
| 4 | [vite](https://www.npmjs.com/package/vite) | 41,530,759 | - |
| 5 | [react](https://www.npmjs.com/package/react) | 40,679,853 | - |
| 6 | [express](https://www.npmjs.com/package/express) | 33,592,302 | - |
| 7 | [axios](https://www.npmjs.com/package/axios) | 25,939,322 | - |
| 8 | [next](https://www.npmjs.com/package/next) | 14,600,947 | - |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,569,193 | - |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,311,557 | - |
| 11 | [prisma](https://www.npmjs.com/package/prisma) | 4,087,782 | - |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 3,967,919 | - |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,677,427 | - |
| 14 | [koa](https://www.npmjs.com/package/koa) | 1,790,948 | - |
| 15 | [astro](https://www.npmjs.com/package/astro) | 1,714,383 | - |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,565,963 | - |
| 17 | [svelte](https://www.npmjs.com/package/svelte) | 1,530,098 | - |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,519,922 | - |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 574,831 | - |
