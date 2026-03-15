---
title: Build notes for Hexo, Netlify, and Cloudflare
date: 2026-01-12 18:43:56
categories:
  - Development
tags:
  - deployment
  - netlify
  - cloudflare
excerpt: A compact deployment checklist for keeping a Hexo blog stable across GitHub, Netlify builds, and Cloudflare caching.
cover: signal-lines
---

This post is a short operational note for the current blog stack.

## Stack

- Source hosted on GitHub
- Static site generation with Hexo
- Build and deploy with Netlify
- Domestic acceleration and caching through Cloudflare

## Common failure points

The most annoying issue is the false blank page: build output exists, but an old asset path, stale cache, or broken theme reference leaves the browser rendering almost nothing useful.

## Practical checklist

- Make sure Netlify publishes from the `public` directory.
- Run a clean build when changing theme templates.
- Avoid depending on theme files that only live in `node_modules`.
- Purge Cloudflare cache after major front-end changes.

## Closing note

The stack is simple enough to maintain, but only if the theme lives in the repo and the generated output stays deterministic.
