# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-03

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 76,488,591 | - |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 70,702,136 | - |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 69,572,502 | - |
| 4 | [vite](https://www.npmjs.com/package/vite) | 43,475,375 | - |
| 5 | [react](https://www.npmjs.com/package/react) | 42,087,704 | - |
| 6 | [express](https://www.npmjs.com/package/express) | 33,981,483 | - |
| 7 | [axios](https://www.npmjs.com/package/axios) | 26,044,775 | - |
| 8 | [next](https://www.npmjs.com/package/next) | 15,345,542 | - |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,359,071 | - |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 4,351,501 | - |
| 11 | [vue](https://www.npmjs.com/package/vue) | 4,326,974 | - |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,277,899 | - |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,862,988 | - |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,840,599 | - |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,838,516 | - |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,605,564 | - |
| 17 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,568,390 | - |
| 18 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,557,029 | - |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 555,750 | - |
