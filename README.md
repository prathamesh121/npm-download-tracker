# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-22

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 42,408,645 | -2.9% |
| 2 | [esbuild](https://www.npmjs.com/package/esbuild) | 39,327,407 | -2.8% |
| 3 | [typescript](https://www.npmjs.com/package/typescript) | 38,695,115 | -1.2% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 26,001,942 | -4.5% |
| 5 | [react](https://www.npmjs.com/package/react) | 24,996,360 | -1.8% |
| 6 | [express](https://www.npmjs.com/package/express) | 17,237,985 | +2.7% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 10,005,046 | -2.9% |
| 8 | [next](https://www.npmjs.com/package/next) | 8,880,854 | -4.7% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 5,401,785 | -0.5% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 2,353,785 | -6.0% |
| 11 | [fastify](https://www.npmjs.com/package/fastify) | 2,106,345 | -1.9% |
| 12 | [vue](https://www.npmjs.com/package/vue) | 2,089,733 | +1.8% |
| 13 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 1,903,773 | +0.6% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,298,539 | -0.8% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 909,127 | +2.5% |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 671,228 | -14.3% |
| 17 | [koa](https://www.npmjs.com/package/koa) | 661,489 | +11.0% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 516,948 | +6.7% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 280,144 | -0.1% |
