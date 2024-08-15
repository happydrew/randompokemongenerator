/* eslint-env node */

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || "https://randompokegen.cc",
  generateIndexSitemap: true,
  generateRobotsTxt: true,
  // output: "export", // Set static output here
  exclude: ["/icon.svg"]
}
