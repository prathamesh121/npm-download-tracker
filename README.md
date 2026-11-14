# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-13

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 72,535,132 | -4.3% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 68,089,752 | -5.2% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 66,840,064 | -5.2% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 43,552,004 | -2.6% |
| 5 | [react](https://www.npmjs.com/package/react) | 41,231,563 | -3.3% |
| 6 | [express](https://www.npmjs.com/package/express) | 31,867,467 | -6.6% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 23,505,398 | -9.5% |
| 8 | [next](https://www.npmjs.com/package/next) | 14,784,098 | -2.9% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 11,960,730 | -10.4% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 4,055,889 | -6.9% |
| 11 | [vue](https://www.npmjs.com/package/vue) | 4,015,982 | -10.1% |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 3,945,556 | -7.1% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,632,792 | -4.8% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,834,662 | -4.1% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 1,610,820 | +0.4% |
| 16 | [koa](https://www.npmjs.com/package/koa) | 1,548,510 | -10.3% |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,443,068 | -10.6% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,350,470 | -12.5% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 540,613 | -4.3% |
