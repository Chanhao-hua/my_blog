---
title: Hexo、Netlify 与 Cloudflare 部署笔记
date: 2026-01-12 18:43:56
categories:
  - 开发
tags:
  - 部署
  - Netlify
  - Cloudflare
excerpt: 一份简洁的部署检查清单，用来保证 Hexo 博客在 GitHub、Netlify 与 Cloudflare 之间稳定运行。
cover: signal-lines
---

这篇文章是一份针对当前博客技术栈的简短运维记录。

## 技术栈

- 源码托管在 GitHub
- 使用 Hexo 生成静态站点
- 通过 Netlify 构建与发布
- 使用 Cloudflare 做访问加速与缓存

## 常见故障点

最让人困扰的问题通常是假性白屏：构建产物其实已经存在，但旧资源路径、缓存残留或者主题引用错误，会让浏览器看起来像“什么都没加载”。

## 实用检查清单

- 确认 Netlify 发布目录指向 `public`
- 修改主题模板后执行一次完整 clean build
- 不要依赖只存在于 `node_modules` 里的主题文件
- 发生较大前端改动后清理 Cloudflare 缓存

## 结语

这套栈本身并不复杂，但前提是主题文件要真正落在仓库里，并且生成结果保持稳定可控。
