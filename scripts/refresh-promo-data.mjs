import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const DOC_URL =
  "https://b8vf2u0bp3.feishu.cn/docx/G0StdEbZ8oqHKNxFTcfchZ9rn9g?from=from_copylink";
const NAV_SECTION_ID = "Fei4dDzJAoZ261x2LzMcsNQvnNR";
const PRODUCT_START_ID = "VcdXdY7OcojQExxPDtQc65Xwnad";
const PRODUCT_END_ID = "XNYxd6cBvo0jOAx3jVkcNjDbnCd";

function fetchDoc(args) {
  const stdout = execFileSync(
    "C:\\Users\\zhuge\\AppData\\Roaming\\npm\\lark-cli.cmd",
    ["docs", "+fetch", "--api-version", "v2", "--doc", DOC_URL, ...args],
    { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 }
  );
  return JSON.parse(stdout);
}

function stripTags(text) {
  return text.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function extractItems(xml, tagName) {
  const regex = new RegExp(`<${tagName} id="([^"]+)">([\\s\\S]*?)<\\/${tagName}>`, "g");
  return [...xml.matchAll(regex)].map((match) => ({
    id: match[1],
    text: stripTags(match[2])
  }));
}

function extractParagraphAfter(headingText, xml) {
  const headingMatch = xml.match(
    new RegExp(`<h1 id="([^"]+)">${headingText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/h1><p id="[^"]*">([\\s\\S]*?)<\\/p>`)
  );
  if (!headingMatch) return "";
  return stripTags(headingMatch[2]);
}

const navDoc = fetchDoc(["--scope", "section", "--start-block-id", NAV_SECTION_ID, "--detail", "simple"]);
const productDoc = fetchDoc([
  "--scope",
  "range",
  "--start-block-id",
  PRODUCT_START_ID,
  "--end-block-id",
  PRODUCT_END_ID,
  "--detail",
  "simple"
]);

const navXml = navDoc.data.document.content;
const productXml = productDoc.data.document.content;

const sites = extractItems(navXml, "h2").map((item, index) => {
  const urlMatch = item.text.match(/https?:\/\/[^\s）)]+/i);
  const siteName = item.text.split("（")[0].trim();
  const siteUrl = urlMatch ? urlMatch[0] : /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(siteName) ? `https://${siteName}` : "";

  return {
    index: index + 1,
    docBlockId: item.id,
    siteName,
    siteUrl,
    sourceTitle: item.text,
    currentStatus: "",
    reviewUrl: "",
    publicPageUrl: "",
    submissionUrl: "",
    emailVerification: "",
    notes: ""
  };
});

const productData = {
  productName: extractParagraphAfter("产品名称（Product Name）", productXml),
  website: extractParagraphAfter("官方网站", productXml),
  email: extractParagraphAfter("官方邮箱", productXml),
  founder: extractParagraphAfter("作者（创建人）", productXml),
  companyName: extractParagraphAfter("Company Name", productXml),
  addressLine1: extractParagraphAfter("Address", productXml),
  slogan: extractParagraphAfter("产品口号（slogan）", productXml),
  shortTagline: extractParagraphAfter("一句话介绍（短）(A brief product tagline.)", productXml),
  longDescription: extractParagraphAfter("一句话介绍（长）(Product description)", productXml),
  overview: extractParagraphAfter("一段话介绍(Product overview)", productXml),
  socialBio: extractParagraphAfter("社交平台bio:", productXml)
};

const keyFeatureMatches = [...productXml.matchAll(/<li id="[^"]+">([\s\S]*?)<\/li>/g)].map((match) => stripTags(match[1]));
productData.keyFeatures = keyFeatureMatches;

fs.writeFileSync(path.resolve("docs/nav-sites-clean.json"), JSON.stringify(sites, null, 2));
fs.writeFileSync(path.resolve("docs/promo-product-data.json"), JSON.stringify(productData, null, 2));

console.log(
  JSON.stringify(
    {
      siteCount: sites.length,
      firstSites: sites.slice(0, 5),
      productData
    },
    null,
    2
  )
);
