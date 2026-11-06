# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-05

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 75,760,866 | - |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 71,852,433 | - |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 70,483,576 | - |
| 4 | [vite](https://www.npmjs.com/package/vite) | 44,731,574 | - |
| 5 | [react](https://www.npmjs.com/package/react) | 42,621,351 | - |
| 6 | [express](https://www.npmjs.com/package/express) | 34,111,927 | - |
| 7 | [axios](https://www.npmjs.com/package/axios) | 25,976,401 | - |
| 8 | [next](https://www.npmjs.com/package/next) | 15,223,067 | - |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 13,346,662 | - |
| 10 | [vue](https://www.npmjs.com/package/vue) | 4,469,381 | - |
| 11 | [prisma](https://www.npmjs.com/package/prisma) | 4,357,031 | - |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 4,248,324 | - |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,814,680 | - |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,913,865 | - |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,727,045 | - |
| 16 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,614,430 | - |
| 17 | [svelte](https://www.npmjs.com/package/svelte) | 1,604,903 | - |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,542,710 | - |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 565,073 | - |
