# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-10

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 76,782,632 | +5.7% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 71,866,978 | +6.9% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 71,722,883 | +9.8% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 45,826,030 | +10.7% |
| 5 | [react](https://www.npmjs.com/package/react) | 43,035,677 | +6.2% |
| 6 | [express](https://www.npmjs.com/package/express) | 33,871,844 | +5.9% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 25,813,018 | +6.5% |
| 8 | [next](https://www.npmjs.com/package/next) | 15,512,013 | +5.6% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,158,002 | +5.9% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 4,424,655 | +6.7% |
| 11 | [vue](https://www.npmjs.com/package/vue) | 4,401,833 | +8.6% |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,330,054 | +9.3% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,804,192 | +4.7% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,887,704 | +6.2% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,769,827 | +7.5% |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,642,076 | +10.6% |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,553,926 | +8.0% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,494,650 | +4.2% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 587,224 | +7.8% |
