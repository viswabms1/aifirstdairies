# AI First Diaries — team blog

A static blog built with [Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages.

## Writing a post

Each post is a Markdown file in `src/posts/`. Copy an existing one and change it:

```
---
title: Your post title
date: 2026-10-20
author: Your Name
tags: [topic]
summary: One line shown on the home page.
---
Write your post here.
```

- Use your own name in `author`, so your name shows on the post.


## Running it on your computer

```
npm install
npm start
```

Then open the address it prints (usually http://localhost:8080).

## Publishing

1. Put this folder in a **public** GitHub repository (GitHub Pages is free for public repos).
2. In the repo, go to Settings → Pages, and set the source to **GitHub Actions**.
3. Every push to `main` rebuilds and publishes the site.

## Using the domain aifirstdairies.com

1. In Settings → Pages, enter the custom domain.
2. Add the DNS records GitHub shows in your domain registrar (Namecheap).
3. Turn on "Enforce HTTPS" once GitHub finishes checking the domain.

If you publish at `username.github.io/repo-name` instead of a custom domain, links
that start with `/` will break, so set up the custom domain first.

## Limits to know about (GitHub Pages)

- Site size up to 1 GB, soft bandwidth limit of 100 GB per month.
- Soft limit of 10 builds per hour.
- Not for online shops or commercial-transaction sites.
- A public repository means posts and their history are visible to everyone.
