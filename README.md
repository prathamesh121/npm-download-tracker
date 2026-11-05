# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-04

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 75,764,647 | - |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 71,162,218 | - |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 70,848,640 | - |
| 4 | [vite](https://www.npmjs.com/package/vite) | 43,820,915 | - |
| 5 | [react](https://www.npmjs.com/package/react) | 42,303,674 | - |
| 6 | [express](https://www.npmjs.com/package/express) | 34,362,992 | - |
| 7 | [axios](https://www.npmjs.com/package/axios) | 26,019,449 | - |
| 8 | [next](https://www.npmjs.com/package/next) | 15,657,648 | - |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,169,905 | - |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 4,411,069 | - |
| 11 | [vue](https://www.npmjs.com/package/vue) | 4,351,758 | - |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,301,064 | - |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,839,121 | - |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,877,972 | - |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,851,449 | - |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,658,469 | - |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,616,403 | - |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,506,572 | - |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 557,797 | - |
