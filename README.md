# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-19

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 77,698,964 | -0.5% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 75,668,900 | +3.5% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 74,138,171 | +3.0% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 47,640,821 | +2.2% |
| 5 | [react](https://www.npmjs.com/package/react) | 45,294,108 | +2.9% |
| 6 | [express](https://www.npmjs.com/package/express) | 36,332,527 | +3.8% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 26,472,275 | +1.0% |
| 8 | [next](https://www.npmjs.com/package/next) | 15,687,506 | -0.8% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,492,773 | +1.8% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,589,274 | +4.6% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,424,638 | -0.2% |
| 12 | [prisma](https://www.npmjs.com/package/prisma) | 4,188,595 | -6.5% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,932,855 | -2.4% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,960,207 | +3.4% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,779,554 | +0.6% |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,714,080 | +2.4% |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,625,629 | -5.2% |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,565,233 | +1.9% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 598,090 | -1.4% |
