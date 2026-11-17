# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-16

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 75,733,472 | +80.2% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 73,032,060 | +103.9% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 70,764,144 | +90.9% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 46,484,352 | +90.6% |
| 5 | [react](https://www.npmjs.com/package/react) | 44,243,682 | +91.7% |
| 6 | [express](https://www.npmjs.com/package/express) | 33,657,050 | +114.2% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 25,538,351 | +166.1% |
| 8 | [next](https://www.npmjs.com/package/next) | 15,864,657 | +85.4% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,018,891 | +150.7% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,478,839 | +137.5% |
| 11 | [prisma](https://www.npmjs.com/package/prisma) | 4,375,341 | +80.1% |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,286,461 | +141.5% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,883,832 | +100.8% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 2,011,880 | +64.9% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 1,692,413 | +110.0% |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,662,086 | +146.0% |
| 17 | [koa](https://www.npmjs.com/package/koa) | 1,634,056 | +176.5% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,470,963 | +181.9% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 622,075 | +151.9% |
