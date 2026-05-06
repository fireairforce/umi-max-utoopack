# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

# Perf Utoopack

## 生成 tracing log

```bash
TURBOPACK_TRACING=1 pnpm run build
```

## 打开 tracing pages

```bash
pnpx next internal trace .turbopack/.trace-turbopack
```

打开 https://trace.nextjs.org 即可。

## Overrrides

```json
"pnpm": {
  "overrides": {
    "@utoo/pack": "link:../utoo/packages/pack"
  }
},
```

## AntV G2Plot Canvas 运行时报错复现

复现入口：`/antv-g2plot-canvas-repro`

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:8000/antv-g2plot-canvas-repro`。

当前 demo 里 `@antv/g2plot@2.x` 会通过 `@antv/g2@4.x` 创建底层渲染器；同时 `package.json` 里的 `pnpm.overrides` 将 `@antv/g-canvas` 固定到 `2.2.0`。`@antv/g-canvas@2.x` 不再导出旧版 `Canvas` 构造器，因此页面运行时会报：

```text
TypeError: tt(...).Canvas is not a constructor
```
