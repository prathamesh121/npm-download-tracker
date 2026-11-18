# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-17

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 79,892,153 | +4.0% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 77,114,883 | +7.3% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 75,496,430 | +5.3% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 48,759,040 | +6.4% |
| 5 | [react](https://www.npmjs.com/package/react) | 46,672,963 | +8.5% |
| 6 | [express](https://www.npmjs.com/package/express) | 35,810,643 | +5.7% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 27,346,777 | +5.9% |
| 8 | [next](https://www.npmjs.com/package/next) | 17,372,976 | +12.0% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,907,750 | +5.7% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,764,192 | +8.2% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,598,816 | +6.2% |
| 12 | [prisma](https://www.npmjs.com/package/prisma) | 4,452,106 | +0.6% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 4,092,096 | +7.6% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 2,047,503 | +8.5% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 1,807,840 | +10.1% |
| 16 | [koa](https://www.npmjs.com/package/koa) | 1,782,335 | +0.7% |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,755,241 | +13.0% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,547,365 | +3.5% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 620,448 | +5.7% |
