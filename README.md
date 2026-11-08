# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-07

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 42,383,727 | - |
| 2 | [esbuild](https://www.npmjs.com/package/esbuild) | 37,891,539 | - |
| 3 | [typescript](https://www.npmjs.com/package/typescript) | 36,388,113 | - |
| 4 | [vite](https://www.npmjs.com/package/vite) | 24,592,418 | - |
| 5 | [react](https://www.npmjs.com/package/react) | 23,373,627 | - |
| 6 | [express](https://www.npmjs.com/package/express) | 15,898,760 | - |
| 7 | [axios](https://www.npmjs.com/package/axios) | 9,710,266 | - |
| 8 | [next](https://www.npmjs.com/package/next) | 8,785,741 | - |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 5,175,106 | - |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 2,429,313 | - |
| 11 | [fastify](https://www.npmjs.com/package/fastify) | 1,954,186 | - |
| 12 | [vue](https://www.npmjs.com/package/vue) | 1,868,555 | - |
| 13 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 1,687,091 | - |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,209,281 | - |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 854,923 | - |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 631,375 | - |
| 17 | [koa](https://www.npmjs.com/package/koa) | 586,749 | - |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 495,290 | - |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 252,554 | - |
