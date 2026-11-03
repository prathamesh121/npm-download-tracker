# npm Download Tracker

Daily download counts for popular JavaScript frameworks, servers, build tools and libraries, from the [npm downloads API](https://github.com/npm/registry/blob/main/docs/download-counts.md). Every day adds a row to [`data/downloads.csv`](data/downloads.csv), so you can see how the ecosystem shifts over time.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Downloads on 2026-11-02

| # | Package | Downloads | vs last week |
|---|---|---|---|
| 1 | [zod](https://www.npmjs.com/package/zod) | 72,650,438 | - |
| 2 | [typescript](https://www.npmjs.com/package/typescript) | 67,203,153 | - |
| 3 | [esbuild](https://www.npmjs.com/package/esbuild) | 65,324,763 | - |
| 4 | [vite](https://www.npmjs.com/package/vite) | 41,385,669 | - |
| 5 | [react](https://www.npmjs.com/package/react) | 40,507,652 | - |
| 6 | [express](https://www.npmjs.com/package/express) | 31,976,529 | - |
| 7 | [axios](https://www.npmjs.com/package/axios) | 24,233,320 | - |
| 8 | [next](https://www.npmjs.com/package/next) | 14,694,082 | - |
| 9 | [webpack](https://www.npmjs.com/package/webpack) | 12,429,023 | - |
| 10 | [prisma](https://www.npmjs.com/package/prisma) | 4,146,383 | - |
| 11 | [vue](https://www.npmjs.com/package/vue) | 4,052,289 | - |
| 12 | [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) | 3,960,046 | - |
| 13 | [fastify](https://www.npmjs.com/package/fastify) | 3,634,585 | - |
| 14 | [astro](https://www.npmjs.com/package/astro) | 1,776,850 | - |
| 15 | [koa](https://www.npmjs.com/package/koa) | 1,647,049 | - |
| 16 | [svelte](https://www.npmjs.com/package/svelte) | 1,485,063 | - |
| 17 | [mongoose](https://www.npmjs.com/package/mongoose) | 1,438,609 | - |
| 18 | [@angular/core](https://www.npmjs.com/package/@angular/core) | 1,434,773 | - |
| 19 | [nuxt](https://www.npmjs.com/package/nuxt) | 544,599 | - |
