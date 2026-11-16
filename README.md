# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-15

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 43,686,970 | +3.1% |
| 2 | [esbuild](https://www.npmjs.com/package/esbuild) | 40,469,147 | +6.8% |
| 3 | [typescript](https://www.npmjs.com/package/typescript) | 39,177,191 | +7.7% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 27,238,580 | +10.8% |
| 5 | [react](https://www.npmjs.com/package/react) | 25,464,393 | +8.9% |
| 6 | [express](https://www.npmjs.com/package/express) | 16,782,627 | +5.6% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 10,301,408 | +6.1% |
| 8 | [next](https://www.npmjs.com/package/next) | 9,321,746 | +6.1% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 5,428,030 | +4.9% |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 2,504,111 | +3.1% |
| 11 | [fastify](https://www.npmjs.com/package/fastify) | 2,146,676 | +9.9% |
| 12 | [vue](https://www.npmjs.com/package/vue) | 2,053,217 | +9.9% |
| 13 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 1,892,426 | +12.2% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,309,252 | +8.3% |
| 15 | [svelte](https://www.npmjs.com/package/svelte) | 887,327 | +3.8% |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 783,210 | +24.0% |
| 17 | [koa](https://www.npmjs.com/package/koa) | 596,183 | +1.6% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 484,591 | -2.2% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 280,360 | +11.0% |
