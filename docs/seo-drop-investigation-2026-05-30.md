# SEO Drop Investigation

Date: 2026-05-30
Site: `randompokegen.cc`
Sources:
- GitHub API: `https://api.github.com/repos/happydrew/randompokemongenerator/commits`
- Local git history in this workspace
- Authenticated Google Search Console session for `sc-domain:randompokegen.cc`

## Executive Summary

There is no evidence of a manual action in Google Search Console as of 2026-05-30.

The site does, however, show multiple quality and indexing risks that can explain ranking or impression drops without a manual penalty:

1. `sitemap.xml` has been unread in GSC since 2024-12-28 and currently shows `Couldn't fetch`, with `0` discovered pages.
2. Page indexing is weak: `34 indexed`, `106 not indexed`, with `80` in `Crawled - currently not indexed`.
3. Mobile Core Web Vitals are poor across all tracked URLs: `0 good`, `14 need improvement`.
4. Homepage quality signals are risky:
   - fabricated `LocalBusiness` structured data
   - synthetic `AggregateRating`
   - unrelated outbound promotional links and banners
   - third-party ad script from `groleegni.net`
5. Performance is heavily homepage-dependent. Over the last 16 months, the homepage contributed `12,505 / 19,432` clicks and `646,955 / 690,512` impressions.

This looks more like an algorithmic quality/indexing problem than a manual penalty.

## GSC State

### Manual actions

- Status on 2026-05-30: `No issues detected`

### Search performance

Last 16 months, web search:

- Clicks: `19.4K`
- Impressions: `691K`
- CTR: `2.8%`
- Average position: `7.6`

Monthly trend:

| Month | Clicks | Impressions | Avg position |
| --- | ---: | ---: | ---: |
| 2025-10 | 1885 | 60979 | 7.35 |
| 2025-11 | 1664 | 63460 | 6.95 |
| 2025-12 | 2607 | 67665 | 6.18 |
| 2026-01 | 2683 | 105477 | 5.75 |
| 2026-02 | 1184 | 51645 | 5.56 |
| 2026-03 | 1931 | 82942 | 5.61 |
| 2026-04 | 1115 | 26520 | 7.29 |
| 2026-05 | 1222 | 11716 | 8.93 |

Observed drops:

- 2026-02 vs 2026-01: impressions roughly halved, but average position stayed similar.
- 2026-04 vs 2026-03: major collapse in impressions and position.
- Sharp daily drop on 2026-04-08: clicks `54 -> 22`, impressions `843 -> 179`, average position `7.54 -> 16.62`.

Interpretation:

- The April drop is the clearest ranking-quality event in the current 16-month window.
- The February drop may include seasonality or query-mix changes because average position did not worsen at the same rate.

### Performance concentration

Top page over the last 16 months:

- `https://randompokegen.cc/` -> `12,505` clicks, `646,955` impressions

The homepage dominates sitewide performance, so homepage-level quality changes can move the entire property.

### Sitemaps

GSC sitemap status:

- Submitted sitemap: `https://randompokegen.cc/sitemap.xml`
- Submitted: `2024-12-28`
- Last read: `2024-12-28`
- Status: `Couldn't fetch`
- Discovered pages: `0`

Current live check on 2026-05-30:

- `https://randompokegen.cc/sitemap.xml` returns `200`
- `Content-Type: application/xml`
- Local sitemap file contains `87` `<url>` entries

Interpretation:

- Google Search Console has not successfully read the sitemap for a very long time.
- Even if this is not the direct cause of the drop, it materially weakens discovery and reprocessing.

### Indexing

Page indexing snapshot:

- Indexed: `34`
- Not indexed: `106`

Top not-indexed reasons:

- `Crawled - currently not indexed`: `80`
- `Page with redirect`: `11`
- `Not found (404)`: `9`
- `Duplicate without user-selected canonical`: `5`
- `Alternate page with proper canonical tag`: `1`

Interpretation:

- `Crawled - currently not indexed` at this level is a strong sign that Google is seeing URLs but does not like the value/quality/duplication enough to keep indexing them.

### Core Web Vitals

Mobile:

- `0` good
- `14` need improvement
- `0` poor

Desktop:

- `14` good
- `0` need improvement

Interpretation:

- Mobile experience is not catastrophic, but it is not helping. It can amplify other quality problems.

### Structured data

Enhancement reports:

- `Review snippets`: `12 valid`
- `Breadcrumbs`: `12 valid`
- `Unparsable structured data`: `2 invalid`

Current unparsable issue:

- `Parsing error: Missing '}' or object member name`

Interpretation:

- Structured data has both correctness issues and likely policy-risk issues.

## GitHub Timeline

### 2025-01-26

Commit: `348396c`
Message: `add monetag ads`

Change:

- Added third-party ad script loading from `groleegni.net` in [`src/pages/_app.tsx`](../src/pages/_app.tsx).

Risk:

- Medium to high.
- This introduces an unrelated third-party script in the global head and can affect quality, trust, UX, or ad-spam signals.

### 2025-04-27

Commit: `3ef7897`
Message: `update google structure data`

Changes added to [`theme.config.tsx`](../theme.config.tsx):

- `SoftwareApplication` JSON-LD
- `AggregateRating` with hardcoded values
- `LocalBusiness` JSON-LD with phone/address in Fairbanks, Alaska
- `BreadcrumbList`
- `WebSite` + `SearchAction`

Risk:

- Very high.
- The `LocalBusiness` data does not match the actual site purpose.
- The `AggregateRating` appears synthetic and may back unsupported review rich result claims.
- This is the single most obvious policy-risk change in the whole timeline.

### 2025-08-24

Commit: `2aa8731`
Message: `fix structure data`

Change:

- Fixed a JSON syntax error in structured data.

Risk:

- Low by itself, but it confirms that the structured data block had already been malformed in production.

### 2025-09 onward

Representative commits:

- `4b8e935` add dang.ai link
- `1ef7b35` add partner link
- `4477072` add nanoedit ads

Risk:

- Medium.
- This marks the start of a pattern where homepage/footer/navigation gained more unrelated commercial outbound links.

### 2026-01-18

Representative commits:

- `736fb69` and related `migrate to cloudflare` commits

Risk:

- Medium.
- Infrastructure migrations can affect crawlability, caching, sitemap accessibility, headers, and bot treatment.
- The timeline does not prove this caused the ranking drop, but it is a plausible technical breakpoint that should be audited.

### 2026-02-28 to 2026-03-29

Representative commits:

- `92677c5` update ads and links from NanoEdit to TryBanana2
- `26f2d22` Replace top-level Devil Hunter link with TryBanana2 in navbar
- `17c924b` add veogen.art promotion
- `d15f127` add veogen.art promotion

Changes:

- global promotional banner
- popup ad units
- navbar/menu promotional links
- more unrelated outbound promotions on the homepage

Risk:

- High.
- This cluster lands immediately before the clearest performance collapse in early April 2026.
- Correlation does not prove causation, but this is the strongest timeline match.

### 2026-04-12

Commit: `db8dba1`
Message: `add happyhorsegen.video link`

Risk:

- Medium.
- Continues the same homepage-linking pattern after the April drop.

### 2026-05-28 to 2026-05-30

Representative commits:

- `4efe429` add parterner link toolpilot.ai
- `34b6c74` add parterner link fazier.com
- `e412dd1` add parterner link curateclick.com
- `46f8226` add parterner link lovableapp.org

Risk:

- Medium to high.
- These are too recent to explain the original drop, but they continue to push the homepage toward an affiliate/directory feel.

## Most Likely Causes

Ordered by likelihood:

1. Homepage quality degradation from unrelated promotions, ads, and affiliate-style outbound links.
2. Misleading or unsupported structured data, especially fake `LocalBusiness` and synthetic rating markup.
3. Weak indexing/discovery signals:
   - unread sitemap
   - many crawled-but-not-indexed URLs
   - sparse indexed page count
4. Mobile quality drag from Core Web Vitals.
5. Possible crawlability or bot-handling side effects from the Cloudflare migration.

## Evidence vs Inference

Evidence:

- No manual action in GSC.
- Sitemap unread since 2024-12-28.
- 80 URLs in `Crawled - currently not indexed`.
- Mobile CWV has 0 good URLs.
- Homepage owns the vast majority of traffic.
- Risky structured data and promotional links are present in code and on the live page.
- The clearest drop begins on 2026-04-08, shortly after the late-February to late-March promo/ad changes.

Inference:

- Google likely reassessed the homepage as lower quality or less trustworthy.
- The site is more likely being dampened algorithmically than manually penalized.

## Immediate Next Actions

1. Remove the fake `LocalBusiness` block and any unsupported `AggregateRating` / review markup.
2. Remove the `groleegni.net` Monetag script and the popup/banner units for unrelated AI products.
3. Reduce homepage outbound promotional links to only clearly relevant, editorially justified links.
4. Resubmit `https://randompokegen.cc/sitemap.xml` in GSC and verify that Google can read it now.
5. Audit Cloudflare bot settings, WAF, caching, redirects, and any bot fight features for Googlebot compatibility.
6. Improve mobile CWV for the 14 affected URLs.
7. After cleanup, request reindexing for the homepage and the main generator pages, then watch GSC daily for 2 to 4 weeks.
