#!/usr/bin/env node
/**
 * Full-page accessibility scan with axe-core in Chromium.
 *
 *   npm run build
 *   node scripts/check-axe.mjs
 *
 * Uses a local Chromium if one is installed; otherwise Playwright's bundled
 * browser is used (install it with `npx playwright install chromium`).
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

// Pick a free port so an unrelated server can never satisfy the checks.
const freePort = await new Promise((resolve, reject) => {
  const probe = createServer();
  probe.once("error", reject);
  probe.listen(0, "127.0.0.1", () => {
    const { port } = probe.address();
    probe.close(() => resolve(port));
  });
});

const BASE = `http://127.0.0.1:${freePort}`;
const server = spawn("python3", ["-m", "http.server", String(freePort), "--directory", "_site"], {
  stdio: "ignore",
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const waitForServer = async () => {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(BASE);
      if (response.ok) return;
    } catch {
      // not ready yet
    }
    await sleep(250);
  }
  throw new Error("Local server did not start.");
};

const pages = [
  ["Home", "/"],
  ["Grimoire", "/grimoire/"],
  ["Install the Grimoire", "/grimoire/install/"],
  ["Connect an AI", "/grimoire/mcp/"],
  ["Personas", "/personas/"],
  ["Install the Characters", "/personas/install/"],
  ["Use Another App", "/personas/platforms/"],
  ["The Drifter", "/personas/drifter/"],
  ["Zavala", "/personas/zavala/"],
  ["Troubleshooting", "/troubleshooting/"],
  ["The audit scripts", "/troubleshooting/audits/"],
  ["About", "/about/"],
  ["404", "/404.html"],
];

const executablePath =
  process.env.CHROME_PATH ||
  ["/usr/bin/chromium", "/usr/bin/google-chrome", "/usr/bin/chromium-browser"].find((path) =>
    existsSync(path),
  );

const browser = await chromium.launch({
  executablePath,
  args: ["--no-sandbox", "--disable-gpu"],
});

const failures = [];
try {
  await waitForServer();

  for (const theme of ["dark", "light"]) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 1000 } });
    await context.addInitScript((value) => {
      localStorage.setItem("grimoire-theme", value);
    }, theme);

    for (const [label, path] of pages) {
      const page = await context.newPage();
      await page.goto(BASE + path, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      for (const violation of results.violations) {
        failures.push({
          theme,
          label,
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          nodes: violation.nodes.slice(0, 4).map((node) => node.target.join(" ")),
        });
      }
      await page.close();
    }
    await context.close();
  }
} finally {
  await browser.close();
  server.kill("SIGTERM");
}

if (failures.length) {
  console.log(`FAIL: ${failures.length} accessibility violation(s)`);
  for (const failure of failures) {
    console.log(
      `  - [${failure.theme}] ${failure.label}: ${failure.id} (${failure.impact}) — ${failure.help}`,
    );
    for (const node of failure.nodes) console.log(`      ${node}`);
  }
  process.exit(1);
}

console.log(`OK: ${pages.length * 2} page renders passed axe-core checks`);
