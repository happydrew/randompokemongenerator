import fs from "node:fs";
import path from "node:path";

const inputPath = path.resolve("docs/nav-sites.json");
const outputJsonPath = path.resolve("docs/nav-sites-tracker.json");
const outputCsvPath = path.resolve("docs/nav-sites-tracker.csv");

const items = JSON.parse(fs.readFileSync(inputPath, "utf8"));

function extractUrl(title) {
  const httpMatch = title.match(/https?:\/\/[^\s）)]+/i);
  if (httpMatch) return httpMatch[0];

  const siteName = title.split("（")[0].trim();
  if (/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(siteName)) {
    return `https://${siteName}`;
  }

  return "";
}

function classifyHistoricalState(title) {
  if (/跳过：必须付费|无免费槽位|付费，已确认/i.test(title)) {
    return "skip_paid";
  }
  if (/互链|交换链接/i.test(title)) {
    return "skip_backlink";
  }
  if (/不收录简单套壳站|被拒绝|不适配/i.test(title)) {
    return "skip_not_fit";
  }
  if (/已生成公开产品页|已生成产品页|成功，已生成公开产品页|成功（|成功，已/i.test(title)) {
    return "completed_public_page";
  }
  if (/待审核|审核时间|排期中|待收录|已发邮件，待回复/i.test(title)) {
    return "submitted_pending";
  }
  if (/核/.test(title)) {
    return "needs_recheck";
  }
  return "unprocessed";
}

function classifyPriority(state) {
  switch (state) {
    case "unprocessed":
      return 1;
    case "needs_recheck":
      return 2;
    case "submitted_pending":
      return 3;
    case "completed_public_page":
      return 4;
    case "skip_paid":
    case "skip_backlink":
    case "skip_not_fit":
      return 5;
    default:
      return 9;
  }
}

function csvEscape(value) {
  const stringValue = String(value ?? "");
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

const tracker = items.map((item) => {
  const siteUrl = extractUrl(item.title);
  const historicalState = classifyHistoricalState(item.title);
  const siteName = item.title.split("（")[0].trim();

  return {
    index: item.index,
    docBlockId: item.id,
    siteName,
    siteUrl,
    sourceTitle: item.title,
    historicalState,
    priority: classifyPriority(historicalState),
    currentStatus: "",
    reviewUrl: "",
    publicPageUrl: "",
    loginMethod: "",
    emailVerification: "",
    notes: ""
  };
});

fs.writeFileSync(outputJsonPath, JSON.stringify(tracker, null, 2));

const headers = [
  "index",
  "docBlockId",
  "siteName",
  "siteUrl",
  "sourceTitle",
  "historicalState",
  "priority",
  "currentStatus",
  "reviewUrl",
  "publicPageUrl",
  "loginMethod",
  "emailVerification",
  "notes"
];

const csvLines = [
  headers.join(","),
  ...tracker.map((row) => headers.map((header) => csvEscape(row[header])).join(","))
];

fs.writeFileSync(outputCsvPath, csvLines.join("\n"));

const summary = tracker.reduce((acc, row) => {
  acc[row.historicalState] = (acc[row.historicalState] || 0) + 1;
  return acc;
}, {});

console.log(JSON.stringify({ count: tracker.length, summary, outputJsonPath, outputCsvPath }, null, 2));
