# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-21

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 44,440,312 | -3.8% |
| 2 | [esbuild](https://www.npmjs.com/package/esbuild) | 40,849,727 | +1.1% |
| 3 | [typescript](https://www.npmjs.com/package/typescript) | 40,751,158 | +2.0% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 27,438,096 | +0.5% |
| 5 | [react](https://www.npmjs.com/package/react) | 26,363,482 | +2.9% |
| 6 | [express](https://www.npmjs.com/package/express) | 17,924,315 | +3.9% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 10,415,533 | -0.5% |
| 8 | [next](https://www.npmjs.com/package/next) | 9,293,405 | -2.9% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 5,529,242 | +0.3% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 2,363,733 | -6.5% |
| 11 | [vue](https://www.npmjs.com/package/vue) | 2,188,962 | +4.0% |
| 12 | [fastify](https://www.npmjs.com/package/fastify) | 2,106,823 | -0.7% |
| 13 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 1,905,093 | +1.1% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,340,603 | -2.9% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 962,602 | -1.0% |
| 16 | [koa](https://www.npmjs.com/package/koa) | 644,917 | +8.5% |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 633,988 | -15.0% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 530,713 | +5.6% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 282,060 | -6.4% |
