# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-18

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 79,745,652 | +9.5% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 77,561,364 | +13.4% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 76,441,256 | +11.8% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 48,673,423 | +9.8% |
| 5 | [react](https://www.npmjs.com/package/react) | 46,712,767 | +12.9% |
| 6 | [express](https://www.npmjs.com/package/express) | 36,981,046 | +14.3% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 27,492,068 | +14.6% |
| 8 | [next](https://www.npmjs.com/package/next) | 16,609,008 | +11.2% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,834,208 | +13.5% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,619,826 | +12.4% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,443,338 | +11.6% |
| 12 | [prisma](https://www.npmjs.com/package/prisma) | 4,439,057 | +6.6% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 4,089,401 | +10.9% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 2,052,503 | +11.9% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,794,442 | +12.6% |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,738,352 | +15.3% |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,721,562 | +3.5% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,570,690 | +14.6% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 607,872 | +10.6% |
