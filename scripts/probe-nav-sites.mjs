import fs from "node:fs";
import path from "node:path";
import pLimit from "p-limit";

const inputPath = path.resolve("docs/nav-sites.json");
const outputPath = path.resolve("docs/nav-sites-attempts.json");

const items = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const limit = pLimit(10);

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36";

const SUBMIT_RE = /(submit|add tool|submit tool|submit project|list your tool|launch|create listing|add listing|submit ai tool|submit startup)/i;
const LOGIN_RE = /(sign in|sign up|login with google|continue with google|auth|create account)/i;
const PAID_RE = /(pricing|premium|paid plan|upgrade|subscribe|buy now|payment|pro plan|only \$|starting at \$)/i;
const BACKLINK_RE = /(backlink|link back|exchange link|add our badge|mutual link)/i;
const CAPTCHA_RE = /(captcha|cloudflare|turnstile|hcaptcha|recaptcha)/i;

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeUrl(raw) {
  if (!raw) return "";
  const manualMap = {
    saashub: "https://www.saashub.com",
    f6s: "https://www.f6s.com",
    financesonline: "https://financesonline.com",
    saasworthy: "https://www.saasworthy.com",
    stackshare: "https://stackshare.io",
    "ai tools neil patel": "https://aitools.neilpatel.com",
    oecd: "https://oecd.ai",
    indiehackers: "https://www.indiehackers.com"
  };

  const siteName = raw.split("（")[0].trim();
  const normalizedName = siteName.toLowerCase();
  if (manualMap[normalizedName]) return manualMap[normalizedName];

  const httpMatch = raw.match(/https?:\/\/[^\s（）)]+/i);
  if (httpMatch) return httpMatch[0];
  if (/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(siteName)) return `https://${siteName}`;
  return "";
}

function absolutize(base, href) {
  try {
    return new URL(href, base).toString();
  } catch {
    return "";
  }
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? stripTags(match[1]) : "";
}

function extractLinks(baseUrl, html) {
  const results = [];
  const anchorRe = /<a\b[^>]*href=(?:"([^"]+)"|'([^']+)'|([^\s>]+))[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorRe.exec(html))) {
    const href = match[1] || match[2] || match[3] || "";
    const text = stripTags(match[4] || "");
    const absoluteHref = absolutize(baseUrl, href);
    results.push({ href: absoluteHref, text });
  }
  return results;
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": USER_AGENT },
      signal: controller.signal
    });
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      html: text,
      text: stripTags(text)
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      finalUrl: url,
      html: "",
      text: "",
      error: error instanceof Error ? error.message : String(error)
    };
  } finally {
    clearTimeout(timeout);
  }
}

function summarizePage(page) {
  const links = extractLinks(page.finalUrl, page.html);
  return {
    title: extractTitle(page.html),
    finalUrl: page.finalUrl,
    submitLinks: links.filter((link) => SUBMIT_RE.test(`${link.text} ${link.href}`)).slice(0, 8),
    hasLoginSignal: LOGIN_RE.test(page.text),
    hasPaidSignal: PAID_RE.test(page.text),
    hasBacklinkSignal: BACKLINK_RE.test(page.text),
    hasCaptchaSignal: CAPTCHA_RE.test(page.text),
    preview: page.text.slice(0, 500)
  };
}

async function attemptSite(item) {
  const siteUrl = normalizeUrl(item.title);
  if (!siteUrl) {
    return {
      index: item.index,
      siteName: item.title.split("（")[0].trim(),
      siteUrl: "",
      attemptStatus: "失败：站点异常",
      notes: "No canonical URL derived from source title."
    };
  }

  const home = await fetchPage(siteUrl);
  if (!home.ok) {
    return {
      index: item.index,
      siteName: item.title.split("（")[0].trim(),
      siteUrl,
      attemptStatus: "失败：站点异常",
      notes: home.error || `Homepage HTTP ${home.status}`,
      reviewUrl: home.finalUrl
    };
  }

  const homeSummary = summarizePage(home);
  const submitUrl = homeSummary.submitLinks[0]?.href || "";

  if (!submitUrl) {
    return {
      index: item.index,
      siteName: item.title.split("（")[0].trim(),
      siteUrl,
      attemptStatus: "失败：无法提交",
      reviewUrl: homeSummary.finalUrl,
      notes: "No obvious submit/listing entry found on homepage."
    };
  }

  const submitPage = await fetchPage(submitUrl);
  if (!submitPage.ok) {
    return {
      index: item.index,
      siteName: item.title.split("（")[0].trim(),
      siteUrl,
      attemptStatus: "失败：无法提交",
      reviewUrl: submitUrl,
      submissionUrl: submitUrl,
      notes: submitPage.error || `Submit page HTTP ${submitPage.status}`
    };
  }

  const submitSummary = summarizePage(submitPage);
  let attemptStatus = "失败：无法提交";
  let notes = "Reached submit page, but generic submission automation could not safely complete.";

  if (submitSummary.hasPaidSignal && !/free/i.test(submitSummary.preview)) {
    attemptStatus = "跳过：必须付费";
    notes = "Submit flow exposes pricing or paid plan gating.";
  } else if (submitSummary.hasBacklinkSignal) {
    attemptStatus = "跳过：强制互链";
    notes = "Submit flow mentions backlink, badge, or reciprocal link requirement.";
  } else if (submitSummary.hasLoginSignal) {
    attemptStatus = "失败：无法登录";
    notes = "Submit flow requires account login or sign-up before submission.";
  } else if (submitSummary.hasCaptchaSignal) {
    attemptStatus = "失败：验证/验证码阻塞";
    notes = "Submit flow appears blocked by captcha or anti-bot verification.";
  } else if (/thank you|submission received|pending review|successfully submitted|under review/i.test(submitSummary.preview)) {
    attemptStatus = "已提交，待审核";
    notes = "Submit page text indicates a submitted or pending-review state.";
  }

  return {
    index: item.index,
    siteName: item.title.split("（")[0].trim(),
    siteUrl,
    attemptStatus,
    reviewUrl: submitSummary.finalUrl,
    submissionUrl: submitUrl,
    notes,
    homeTitle: homeSummary.title,
    submitTitle: submitSummary.title
  };
}

const results = await Promise.all(items.map((item) => limit(() => attemptSite(item))));
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

const summary = results.reduce((acc, row) => {
  acc[row.attemptStatus] = (acc[row.attemptStatus] || 0) + 1;
  return acc;
}, {});

console.log(JSON.stringify({ count: results.length, summary, outputPath }, null, 2));
