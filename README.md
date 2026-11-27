# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-26

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 65,887,296 | -15.2% |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 63,682,807 | -15.8% |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 61,731,070 | -16.7% |
| 4 | [vite](https://www.npmjs.com/package/vite) | 40,902,403 | -14.1% |
| 5 | [react](https://www.npmjs.com/package/react) | 38,325,290 | -15.4% |
| 6 | [express](https://www.npmjs.com/package/express) | 30,095,877 | -17.2% |
| 7 | [axios](https://www.npmjs.com/package/axios) | 21,795,600 | -17.7% |
| 8 | [next](https://www.npmjs.com/package/next) | 12,278,669 | -21.7% |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 11,094,011 | -17.8% |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,084,127 | -11.0% |
| 11 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 3,707,407 | -16.2% |
| 12 | [prisma](https://www.npmjs.com/package/prisma) | 3,600,999 | -14.0% |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,483,058 | -11.4% |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,776,555 | -9.4% |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,457,900 | -18.1% |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,452,740 | -15.2% |
| 17 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,353,461 | -13.5% |
| 18 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,343,731 | -17.3% |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 569,191 | -4.8% |
