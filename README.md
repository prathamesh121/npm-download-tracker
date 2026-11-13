# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-12

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 78,083,791 | +3.1% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 73,096,997 | +2.7% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 71,963,125 | +1.6% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 46,601,615 | +6.3% |
| 5 | [react](https://www.npmjs.com/package/react) | 44,021,632 | +4.1% |
| 6 | [express](https://www.npmjs.com/package/express) | 35,012,984 | +1.9% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 26,202,874 | +0.7% |
| 8 | [next](https://www.npmjs.com/package/next) | 15,818,578 | +1.0% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,258,423 | +0.7% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 4,478,496 | +1.5% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,431,435 | +3.0% |
| 12 | [vue](https://www.npmjs.com/package/vue) | 4,385,807 | +0.8% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 4,031,189 | +5.0% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,895,582 | +0.9% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,768,463 | -4.5% |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,715,483 | +6.1% |
| 17 | [svelte](https://www.npmjs.com/package/svelte) | 1,674,194 | +0.9% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,535,696 | +1.9% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 606,669 | +8.8% |
