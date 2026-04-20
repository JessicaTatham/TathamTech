---
title: "Migrating Your Small Business Website Without Losing Google Rankings"
description: "A practical guide to website migration that preserves your SEO. Covers 301 redirects, URL mapping, meta tag preservation, and common mistakes that tank your rankings."
keywords:
  - website migration SEO
  - how to migrate website without losing rankings
  - website migration checklist
  - move from Wix to custom website
  - website platform migration
date: 2026-07-22
draft: false
topic: "Web Development"
image: "/blog/monitoring-dashboard.jpg"
---

I've migrated somewhere around forty websites over the past decade. Corporate sites at Bell Canada, financial platforms at Wells Fargo, and more recently, small business sites for my freelance clients. The technical complexity varies wildly, but the anxiety is always the same: what if we lose our Google rankings?

It's a reasonable fear. I've seen migrations destroy years of organic traffic in a single afternoon. Not because migration is inherently dangerous, but because people skip steps they don't know exist.

The good news is that a well-planned migration doesn't have to cost you anything in search visibility. The bad news is that "well-planned" means doing boring spreadsheet work before you touch a single line of code.

## Why Migrations Go Wrong

Most ranking losses after a migration come down to one thing: Google can't find the pages it used to know about. You had a page at `/services/landscaping` that ranked well. You moved to a new platform and now it lives at `/what-we-do/landscaping-services`. Google still has the old URL indexed. Someone clicks it from search results, gets a 404, and Google takes note.

Do this across fifty pages and your entire site authority takes a hit. Not because your new site is worse, but because you broke the chain of trust Google had built with your old URLs.

The other common killer is losing your metadata. Your old site had carefully written title tags and meta descriptions that Google was using in search results. Your new site launches with auto-generated ones, or worse, the defaults from whatever template you installed. Google re-evaluates your pages, decides they're less relevant to the queries they used to rank for, and adjusts accordingly.

## The Migration Checklist (In Order)

I'm going to walk through this in the order you should actually do things. Not the order that feels logical, but the order that protects your rankings.

### 1. Crawl Your Existing Site

Before you change anything, you need a complete inventory of what exists. Every URL, every title tag, every meta description, every image alt tag. Tools like Screaming Frog (free for up to 500 URLs) will do this for you.

Export everything to a spreadsheet. This is your source of truth for the rest of the migration. If you skip this step, you're guessing, and guessing during a migration is how you end up writing panicked emails to your developer three weeks later.

### 2. Build Your URL Map

Take your spreadsheet of old URLs and add a column for where each page will live on the new site. Every single page needs a destination. Some will map one-to-one. Some old pages might get consolidated into a single new page. Some might get retired entirely.

For pages you're removing, you still need a redirect destination. Pick the most relevant surviving page. A user who lands on a redirect to something vaguely related is better than a user who hits a 404.

### 3. Set Up 301 Redirects

A 301 redirect tells Google (and browsers) that a page has permanently moved to a new location. It passes most of the SEO value from the old URL to the new one. This is non-negotiable. Every old URL that has changed needs a 301 redirect to its new location.

The implementation depends on your new platform. In Next.js, you configure these in `next.config.js`. On a standard server, it's usually an `.htaccess` file or nginx config. Most hosting platforms have a redirects interface somewhere in their settings.

```
// next.config.js example
async redirects() {
  return [
    {
      source: '/old-page-url',
      destination: '/new-page-url',
      permanent: true,
    },
  ]
}
```

Test every single one. I mean it. Click through your spreadsheet and verify each redirect lands where it should.

### 4. Preserve Your Meta Tags

Copy your title tags and meta descriptions from the old site to the new one. If you're upgrading them, fine, but don't let them disappear. A page that goes from having a custom meta description to having none will likely see a rankings shift while Google figures out what the page is about again.

Pay attention to:
- Title tags (the most important on-page SEO element)
- Meta descriptions (not a ranking factor directly, but affects click-through rate)
- Canonical URLs (make sure they point to the new URLs, not the old ones)
- Open Graph tags (these affect how your pages appear when shared on social media)

### 5. Check Your robots.txt

This one has bitten me more than once. Many development setups include a `robots.txt` that blocks all crawlers. It makes sense during development because you don't want Google indexing your staging site. But if that file makes it to production, your brand new site is invisible to search engines.

After launch, visit `yoursite.com/robots.txt` and make sure it says something like:

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

If it says `Disallow: /` anywhere, fix it immediately. I once spent two hours troubleshooting a client's post-migration traffic drop before checking this. The staging robots.txt had been deployed to production. Two hours I'll never get back.

### 6. Submit Your New Sitemap

Generate a fresh sitemap for your new site and submit it to Google Search Console. Also submit the old sitemap if you can, because Google will crawl those URLs, hit your 301 redirects, and update its index faster.

If you don't have Search Console set up yet, go do that first. I wrote about this in more detail in my post on [why your website isn't showing up on Google](/blog/small-business-website-not-showing-on-google).

### 7. Monitor in Google Search Console

After launch, check Search Console daily for the first two weeks. You're looking for:
- Coverage errors (pages Google tried to crawl but couldn't reach)
- A spike in 404s (missed redirects)
- Drops in indexed pages
- Any manual actions or security issues

The "URL Inspection" tool lets you ask Google to re-crawl specific pages. Use it on your most important pages right after launch.

## Common Migration Scenarios

### Wix to Custom (Next.js, WordPress, etc.)

Wix URLs are notoriously ugly. They tend to look like `/post/your-blog-title` or `/service-page/your-service`. The internal structure doesn't always match what you'd choose for a custom build.

The main challenge here is that Wix doesn't give you server-level redirect control. You'll need to set up all your 301 redirects on the new platform pointing from the old Wix URL paths. If you were using a custom domain on Wix, make sure your DNS is pointed to the new host before the old Wix subscription expires.

One Wix-specific gotcha: Wix adds trailing slashes inconsistently and sometimes appends query parameters for their internal routing. Test your redirects with and without trailing slashes.

### WordPress to Headless (Next.js, Gatsby, etc.)

WordPress migrations are usually smoother because WordPress URL structures tend to be cleaner. If you're keeping the same slug pattern (`/blog/post-title`), you might not even need many redirects.

The risk with headless setups is that your new frontend might not generate pages for everything WordPress was serving. Category pages, tag pages, author archives, date-based archives. WordPress generates a lot of URLs automatically. Decide which ones matter (check your analytics for traffic to these pages) and redirect the rest.

### Squarespace to Next.js

Squarespace URLs follow predictable patterns but include collection prefixes you might want to remove. A blog post at `/blog/my-post-title` might become `/articles/my-post-title` on your new site. Standard redirect territory.

Squarespace does offer built-in URL redirects, but they only work while you're still hosting on Squarespace. Once you cancel or move your domain, those redirects stop functioning. Handle everything on the new platform.

## Timeline Expectations

For a small business site with 10-50 pages, expect the full migration process to take two to four weeks. Not because the technical work takes that long, but because testing, redirect verification, and the initial monitoring period all need time.

A realistic breakdown:

- **Week 1:** Crawl old site, build URL map, catalog all metadata
- **Week 2:** Build new site with proper metadata, configure redirects, set up Search Console on new domain/host
- **Week 3:** Launch, verify redirects, submit sitemap, begin monitoring
- **Week 4:** Address any crawl errors, watch for ranking changes, fix anything that slipped through

You will likely see a temporary traffic dip in the first one to two weeks after migration. This is normal. Google needs time to re-crawl your site, process the redirects, and update its index. If you've done everything right, traffic should recover to previous levels (or better, if your new site is faster and better structured) within three to six weeks.

If traffic hasn't recovered after six weeks, something is wrong. Go back to Search Console and look for crawl errors or indexing issues.

## Mistakes That Will Tank Your Rankings

I've seen all of these in the wild. Some from clients who came to me after a bad migration, some from my own early career mistakes that I'd rather not discuss in detail.

**No redirect plan at all.** This is the big one. Someone builds a beautiful new site, points the domain at it, and every old URL returns a 404. Google drops the pages from its index within weeks.

**Changing URL structure without mapping.** Your old site had `/services/web-design` and your new site has `/what-i-do/websites`. Without a redirect, these are completely unrelated pages as far as Google is concerned.

**Leaving staging robots.txt in production.** Already mentioned this one, but it's common enough to repeat. Your entire site becomes invisible to search engines.

**Forgetting about images.** If your old site had images that other sites linked to, those image URLs need to redirect too. Broken image links are broken links, and they count against you.

**Not preserving internal links.** Your old blog posts linked to your service pages using the old URLs. If those internal links aren't updated and instead rely on redirect chains, you're adding unnecessary latency and diluting link equity.

**Launching on Friday.** Never launch a migration on a Friday. If something goes wrong, you want a full work week ahead of you to fix it, not a weekend of watching traffic disappear while you can't reach your hosting provider's support team.

## After the Migration

Keep your redirects in place permanently. There's a persistent myth that you can remove 301 redirects after a few months. You can't. External sites still link to your old URLs. People have your old pages bookmarked. Google's index is long, but not infinite, and it re-crawls at its own pace.

Continue monitoring Search Console weekly for at least three months post-migration. Issues can surface late, especially for pages that Google doesn't crawl frequently.

If your old site had backlinks from other websites (check in Search Console under "Links"), verify that those external links still resolve correctly through your redirects. These backlinks are often your most valuable SEO asset, and losing them because of a missed redirect is genuinely painful.

## When to Consider a Migration

If you're reading this and thinking about whether it's time to move platforms, I wrote a separate post on [signs you need a website redesign](/blog/signs-you-need-a-website-redesign) that covers the decision-making side. The short version: if your current platform is limiting your business growth, costing you time, or making it impossible to implement basic SEO improvements, it's probably time.

Just plan the migration properly. The work isn't glamorous. It's spreadsheets and redirect rules and obsessive testing. But it's the difference between a smooth transition and months of recovery.
