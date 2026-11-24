# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-23

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 73,766,637 | -2.6% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 71,428,515 | -2.2% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 69,226,834 | -2.2% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 45,100,807 | -3.0% |
| 5 | [react](https://www.npmjs.com/package/react) | 43,165,076 | -2.4% |
| 6 | [express](https://www.npmjs.com/package/express) | 33,490,240 | -0.5% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 24,571,652 | -3.8% |
| 8 | [next](https://www.npmjs.com/package/next) | 14,951,111 | -5.8% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 12,644,252 | -2.9% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,355,005 | -2.8% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,224,417 | -1.4% |
| 12 | [prisma](https://www.npmjs.com/package/prisma) | 4,184,319 | -4.4% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,861,029 | -0.6% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,979,810 | -1.6% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,697,803 | +3.9% |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,693,742 | +0.1% |
| 17 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,482,772 | +0.8% |
| 18 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,481,363 | -10.9% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 582,286 | -6.4% |
