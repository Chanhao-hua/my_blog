---
title: Cover 风格说明
date: 2026-03-16 12:00:00
layout: page
---

这页整理了当前博客可用的 `cover` 风格名称，方便写文章时直接选用。

## 使用方式

在文章头部这样写：

```yaml
---
title: 文章标题
date: 2026-03-16 12:00:00
categories:
  - 设计
tags:
  - 建站
excerpt: 这是摘要。
cover: editorial-grid
---
```

## 可用风格

### editorial-grid

适合设计、排版、方法论、博客改版这类内容。视觉是规则网格和编辑画框，最稳妥。

### signal-lines

适合开发、部署、技术记录。视觉更像信号线和图表走势，偏理性。

### soft-glow

适合随笔、观察、灵感、氛围向文章。整体更柔和，有发光感。

### paper-cut

适合项目拆解、案例分析、创意过程。视觉像纸张叠层和切面。

### mono-wave

适合思考类、趋势类、长文。视觉更克制，有波纹与海报感。

### frame-stack

适合作品展示、系列文章、专题。视觉更像多层展框，存在感比较强。

## 建议搭配

- 设计类文章：`editorial-grid`、`paper-cut`
- 开发类文章：`signal-lines`、`frame-stack`
- 随笔类文章：`soft-glow`、`mono-wave`

## 默认行为

如果你不写 `cover`，主题会自动回退到：

```yaml
cover: editorial-grid
```
