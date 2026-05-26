import fs from "node:fs";
import path from "node:path";

const attemptsPath = path.resolve("docs/nav-sites-attempts.json");
const overridesPath = path.resolve("docs/nav-sites-manual-overrides.json");
const outputPath = path.resolve("docs/nav-sites-final-results.json");
const summaryPath = path.resolve("docs/nav-sites-final-summary.md");

const attempts = JSON.parse(fs.readFileSync(attemptsPath, "utf8"));
const overrides = JSON.parse(fs.readFileSync(overridesPath, "utf8"));

const overrideMap = new Map(overrides.map((row) => [row.index, row]));
const merged = attempts.map((row) => ({ ...row, ...(overrideMap.get(row.index) || {}) }));

fs.writeFileSync(outputPath, JSON.stringify(merged, null, 2));

const summary = merged.reduce((acc, row) => {
  acc[row.attemptStatus] = (acc[row.attemptStatus] || 0) + 1;
  return acc;
}, {});

const lines = [
  "# Navigation Directory Submission Results",
  "",
  `Total sites processed: ${merged.length}`,
  "",
  "## Status Summary",
  ...Object.entries(summary)
    .sort((a, b) => b[1] - a[1])
    .map(([status, count]) => `- ${status}: ${count}`),
  "",
  "## Manually Verified Outcomes",
  ...merged
    .filter((row) => /Manual|Duplicate entry/.test(row.notes || ""))
    .map(
      (row) =>
        `- ${row.index}. ${row.siteName}: ${row.attemptStatus} | submit: ${row.submissionUrl || ""} | review: ${row.reviewUrl || ""}`
    )
];

fs.writeFileSync(summaryPath, lines.join("\n"));

console.log(JSON.stringify({ outputPath, summaryPath, summary }, null, 2));
