import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import selenium from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox.js";
import JSZip from "jszip";
import { PDFDocument, StandardFonts } from "pdf-lib";

const { Builder, By, Key, until } = selenium;

const BASE_URL = (process.env.BASE_URL || "http://127.0.0.1:4173").replace(/\/+$/, "");
const FIREFOX_BINARY = process.env.FIREFOX_BINARY || "C:\\Program Files\\Mozilla Firefox\\firefox.exe";
const HEADLESS = process.env.FIREFOX_HEADLESS !== "0";
const WAIT_MS = Number(process.env.FIREFOX_WAIT_MS || 12_000);
const EXPECTED_CATALOG_SIZE = 100;
const ADVANCED_TOOL_KEYS = [
  "scientific-calculator",
  "compound-interest",
  "work-hours",
  "profit-margin",
  "bill-splitter",
  "pdf-organizer",
  "image-watermark",
  "timezone-converter",
  "whatsapp-link",
  "seo-meta",
  "markdown-preview",
  "regex-tester",
  "contrast-checker",
  "utm-builder",
  "random-picker",
  "palette-extractor",
  "file-inspector",
  "number-base",
  "html-entities"
];
const TEST_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGP4z8DwHwwZGP7//w9kAABHygj4/BTyWgAAAABJRU5ErkJggg==",
  "base64"
);

let driver;
let tempDir;
let pngPath;
let pdfPath;
let mp3Path;
let paddedPdfPath;
let passed = 0;
const exercised = new Set();

function toolUrl(pathname = "") {
  return BASE_URL + (pathname.startsWith("/") ? pathname : `/${pathname}`);
}

async function waitFor(condition, message, timeout = WAIT_MS) {
  return driver.wait(condition, timeout, message, 100);
}

async function elements(selector) {
  return driver.findElements(By.css(selector));
}

async function count(selector) {
  return (await elements(selector)).length;
}

async function one(selector) {
  return driver.findElement(By.css(selector));
}

async function visible(selector) {
  const element = await driver.wait(until.elementLocated(By.css(selector)), WAIT_MS, `Missing ${selector}`);
  await driver.wait(until.elementIsVisible(element), WAIT_MS, `Hidden ${selector}`);
  return element;
}

async function isDisplayed(selector) {
  const found = await elements(selector);
  return found.length > 0 && found[0].isDisplayed();
}

async function text(selector) {
  return (await visible(selector)).getText();
}

async function attribute(selector, name) {
  return (await one(selector)).getAttribute(name);
}

async function setInput(selector, value) {
  const element = await visible(selector);
  await element.clear();
  if (value) await element.sendKeys(value);
  await driver.executeScript(
    "arguments[0].dispatchEvent(new Event('input',{bubbles:true}));arguments[0].dispatchEvent(new Event('change',{bubbles:true}));",
    element
  );
  return element;
}

async function setDomValue(selector, value) {
  const element = await visible(selector);
  await driver.executeScript(
    "arguments[0].value=arguments[1];arguments[0].dispatchEvent(new Event('input',{bubbles:true}));arguments[0].dispatchEvent(new Event('change',{bubbles:true}));",
    element,
    value
  );
  return element;
}

async function selectValue(selector, value) {
  return setDomValue(selector, value);
}

async function setChecked(selector, wanted) {
  const element = await visible(selector);
  if ((await element.isSelected()) !== wanted) await element.click();
}

async function click(selector) {
  const element = await visible(selector);
  await driver.executeScript("arguments[0].scrollIntoView({block:'center',inline:'nearest'});", element);
  await driver.wait(until.elementIsEnabled(element), WAIT_MS, `Disabled ${selector}`);
  try {
    await element.click();
  } catch (error) {
    if (!/intercept|click|scroll|point/i.test(String(error && error.message))) throw error;
    await driver.executeScript("arguments[0].click();", element);
  }
  return element;
}

async function waitForCount(selector, expected) {
  await waitFor(async () => (await count(selector)) === expected, `Expected ${expected} matches for ${selector}`);
}

async function waitForText(selector, expected, timeout = WAIT_MS) {
  await waitFor(async () => {
    const found = await elements(selector);
    if (!found.length || !(await found[0].isDisplayed())) return false;
    const actual = await found[0].getText();
    return expected instanceof RegExp ? expected.test(actual) : actual.toLocaleLowerCase().includes(String(expected).toLocaleLowerCase());
  }, `Expected ${selector} to contain ${String(expected)}`, timeout);
}

async function loadHome(pathname = "/") {
  await driver.get(toolUrl(pathname));
  await waitFor(async () => (await count("#toolGrid .tool-card")) > 0, "Catalog did not render");
}

async function useEnglish() {
  if ((await attribute("#languageSelect", "value")) !== "en") await selectValue("#languageSelect", "en");
  await waitFor(async () => (await attribute("html", "lang")) === "en", "English locale was not applied");
}

async function resetCatalog() {
  const search = await visible("#searchInput");
  if ((await search.getAttribute("value")) !== "") await setInput("#searchInput", "");
  const all = await visible('[data-category="all"]');
  if ((await all.getAttribute("aria-pressed")) !== "true") await all.click();
  await waitForCount("#toolGrid .tool-card", EXPECTED_CATALOG_SIZE);
}

async function openTool(key) {
  await resetCatalog();
  await click(`[data-tool="${key}"]`);
  await waitFor(async () => (await attribute("#toolModal", "open")) !== null, `Modal did not open for ${key}`);
  assert.notEqual((await text("#modalTitle")).trim(), "", `Missing title for ${key}`);
  assert.ok((await count("#toolWorkspace > *")) > 0, `Empty workspace for ${key}`);
}

async function closeTool() {
  if ((await attribute("#toolModal", "open")) !== null) {
    await click("#modalClose");
    await waitFor(async () => (await attribute("#toolModal", "open")) === null, "Modal did not close");
  }
}

async function runForResult(buttonSelector, timeout = WAIT_MS) {
  await click(buttonSelector);
  await waitFor(async () => {
    const results = await elements("#workspaceOutput .result-content");
    if (!results.length || !(await results[0].isDisplayed())) return false;
    return ((await results[0].getAttribute("innerHTML")) || "").trim().length > 0;
  }, `No result after ${buttonSelector}`, timeout);
}

async function upload(selector, filePath) {
  const input = await one(selector);
  await input.sendKeys(filePath);
}

async function mark(key) {
  exercised.add(key);
  await closeTool();
}

async function step(name, operation) {
  const started = Date.now();
  await operation();
  passed += 1;
  console.log(`✓ ${name} (${Date.now() - started} ms)`);
}

async function createFixtures() {
  tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "toolbari-firefox-"));
  pngPath = path.join(tempDir, "pixel.png");
  pdfPath = path.join(tempDir, "two-pages.pdf");
  mp3Path = path.join(tempDir, "track.mp3");
  paddedPdfPath = path.join(tempDir, "padded.pdf");
  await fs.writeFile(pngPath, TEST_PNG);
  const fakeFrame = Buffer.alloc(256);
  fakeFrame.set([0xff, 0xfb, 0x90, 0x64], 0);
  await fs.writeFile(mp3Path, fakeFrame);

  const document = await PDFDocument.create();
  const font = await document.embedFont(StandardFonts.Helvetica);
  document.addPage([200, 200]).drawText("ToolBari Firefox page 1", { x: 16, y: 150, size: 12, font });
  document.addPage([240, 180]).drawText("ToolBari Firefox page 2", { x: 16, y: 130, size: 12, font });
  const pdfBytes = await document.save();
  await fs.writeFile(pdfPath, pdfBytes);
  await fs.writeFile(paddedPdfPath, Buffer.concat([Buffer.from(pdfBytes), Buffer.from("\n" + "% padding\n".repeat(2000))]));
}

async function removeFixtures() {
  if (!tempDir) return;
  const resolvedTemp = path.resolve(os.tmpdir());
  const resolvedTarget = path.resolve(tempDir);
  assert.equal(path.dirname(resolvedTarget), resolvedTemp, "Refusing to clean an unexpected directory");
  assert.ok(path.basename(resolvedTarget).startsWith("toolbari-firefox-"), "Unexpected temporary directory name");
  await fs.rm(resolvedTarget, { recursive: true, force: true });
}

async function buildDriver() {
  await fs.access(FIREFOX_BINARY);
  const options = new firefox.Options()
    .setBinary(FIREFOX_BINARY)
    .windowSize({ width: 1440, height: 1000 })
    .setPreference("browser.download.folderList", 2)
    .setPreference("browser.download.dir", tempDir)
    .setPreference("browser.download.useDownloadDir", true)
    .setPreference("browser.helperApps.neverAsk.saveToDisk", "application/pdf,image/png,audio/mpeg,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain")
    .setPreference("pdfjs.disabled", true);
  if (HEADLESS) options.addArguments("-headless");
  driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
  await driver.manage().setTimeouts({ implicit: 0, pageLoad: 30_000, script: 30_000 });
}

async function verifyShell() {
  await loadHome();
  await waitForCount("#toolGrid .tool-card", EXPECTED_CATALOG_SIZE);
  assert.match(await attribute('link[rel="canonical"]', "href"), /^https:\/\//);
  assert.ok((await attribute('meta[name="description"]', "content")).trim().length > 20);
  assert.ok((await count('script[type="application/ld+json"]')) === 1);

  await selectValue("#languageSelect", "bn");
  await waitFor(async () => (await attribute("html", "lang")) === "bn-BD", "Bangla locale was not applied");
  assert.match(await text("#hero-title"), /দরকারি টুল/);
  await useEnglish();
  assert.match(await text("#hero-title"), /Useful tools/i);
  assert.match(await text("#resultCount"), /tools found/i);
}

async function verifySearchAndModal() {
  await setInput("#searchInput", "scientific calculator");
  await waitFor(async () => isDisplayed('[data-tool="scientific-calculator"]'), "Search did not find scientific calculator");
  assert.ok((await count("#toolGrid .tool-card")) < EXPECTED_CATALOG_SIZE);

  await setInput("#searchInput", "");
  await click('[data-category="developer"]');
  await waitFor(async () => isDisplayed('[data-tool="regex-tester"]'), "Developer filter did not show regex tester");
  assert.equal(await count('[data-tool="age"]'), 0);
  await resetCatalog();

  await openTool("age");
  assert.equal(await text("#modalTitle"), "Age Calculator");
  await closeTool();
  await openTool("age");
  await driver.actions().sendKeys(Key.ESCAPE).perform();
  await waitFor(async () => (await attribute("#toolModal", "open")) === null, "Escape did not close the modal");
  assert.ok(!((await attribute("body", "class")) || "").includes("modal-open"));
}

async function verifyAccessibility() {
  await loadHome("/?lang=en");
  assert.equal(await count("main#main"), 1);
  assert.equal(await attribute("nav.header-nav", "aria-label"), "Primary navigation");
  assert.equal(await attribute("#languageSelect", "aria-label"), "Choose language");
  assert.equal(await attribute("#resultCount", "aria-live"), "polite");
  assert.equal(await attribute("#toast", "aria-live"), "polite");
  assert.equal(await attribute("#toolModal", "aria-labelledby"), "modalTitle");

  await driver.executeScript("if(document.activeElement){document.activeElement.blur();}");
  await driver.actions().sendKeys(Key.TAB).perform();
  await waitFor(async () => driver.executeScript("return document.activeElement && document.activeElement.classList.contains('skip-link');"), "Skip link was not first in keyboard order");
  assert.equal(await attribute(".skip-link", "href"), `${toolUrl("/?lang=en")}#main`);

  const unnamedCards = await driver.executeScript(
    "return Array.from(document.querySelectorAll('#toolGrid .tool-card')).filter(function(card){return !(card.getAttribute('aria-label')||'').trim();}).length;"
  );
  assert.equal(unnamedCards, 0, "Every tool card needs an accessible name");

  await openTool("scientific-calculator");
  assert.equal(await driver.executeScript("return document.querySelector('#scienceExpression').labels.length;"), 1);
  assert.equal(await driver.executeScript("return document.querySelector('#scienceAngle').labels.length;"), 1);
  assert.equal(await attribute("#modalTitle", "id"), "modalTitle");
  await closeTool();
}

async function verifyOverflow() {
  for (const width of [360, 768, 1440]) {
    await driver.manage().window().setRect({ width, height: width === 360 ? 780 : 1000, x: 0, y: 0 });
    await loadHome("/?lang=en");
    const pageOverflow = await driver.executeScript("return document.documentElement.scrollWidth-document.documentElement.clientWidth;");
    assert.ok(pageOverflow <= 1, `Page overflowed by ${pageOverflow}px at ${width}px`);
    await openTool("scientific-calculator");
    const modalOverflow = await driver.executeScript("var e=document.querySelector('#toolModal');return e.scrollWidth-e.offsetWidth;");
    assert.ok(modalOverflow <= 1, `Modal overflowed by ${modalOverflow}px at ${width}px`);
    await closeTool();
  }
  await driver.manage().window().setRect({ width: 1440, height: 1000, x: 0, y: 0 });
}

async function verifyEveryCardOpens() {
  await loadHome("/?lang=en");
  const keys = await driver.executeScript("return Array.from(document.querySelectorAll('#toolGrid .tool-card'),function(card){return card.dataset.tool;});");
  assert.equal(keys.length, EXPECTED_CATALOG_SIZE);
  assert.equal(new Set(keys).size, EXPECTED_CATALOG_SIZE);
  for (let index = 0; index < keys.length; index += 1) {
    await openTool(keys[index]);
    await closeTool();
    if ((index + 1) % 20 === 0) console.log(`  opened ${index + 1}/${keys.length} catalog tools`);
  }
}

async function verifyCalculators() {
  await loadHome("/?lang=en");

  await openTool("scientific-calculator");
  await setInput("#scienceExpression", "sin(30) + sqrt(81) * 2");
  await runForResult("#runScience");
  assert.equal(await text("#workspaceOutput .big-result"), "18.5");
  await mark("scientific-calculator");

  await openTool("compound-interest");
  await setInput("#compoundInitial", "1000");
  await setInput("#compoundMonthly", "100");
  await setInput("#compoundRate", "12");
  await setInput("#compoundYears", "1");
  await runForResult("#runCompound");
  await waitForText("#workspaceOutput", "Estimated future value");
  await waitForText("#workspaceOutput", "2,200");
  await mark("compound-interest");

  await openTool("work-hours");
  await setDomValue("#workStart", "22:00");
  await setDomValue("#workEnd", "07:00");
  await setInput("#workBreak", "60");
  await setInput("#workRate", "500");
  await runForResult("#runWorkHours");
  assert.equal(await text("#workspaceOutput .big-result"), "8 hours");
  await waitForText("#workspaceOutput", "৳4,000");
  await mark("work-hours");

  await openTool("profit-margin");
  await selectValue("#profitMode", "target");
  await setInput("#profitCost", "800");
  await setInput("#profitTarget", "20");
  await runForResult("#runProfit");
  assert.equal(await text("#workspaceOutput .big-result"), "৳1,000");
  await waitForText("#workspaceOutput", "20%");
  await mark("profit-margin");

  await openTool("bill-splitter");
  await setInput("#billSubtotal", "100");
  await setInput("#billTax", "0");
  await setInput("#billService", "0");
  await setInput("#billTip", "10");
  await setInput("#billPeople", "3");
  await runForResult("#runBill");
  assert.equal(await text("#workspaceOutput .big-result"), "৳36.67");
  await waitForText("#workspaceOutput", "2 people pay ৳36.67");
  await mark("bill-splitter");
}

async function verifyFileTools() {
  await openTool("pdf-organizer");
  await upload("#organizerPdf", pdfPath);
  await setInput("#organizerOrder", "2, 1");
  await selectValue("#organizerRotation", "90");
  await runForResult("#runPdfOrganizer", 25_000);
  assert.equal(await text("#workspaceOutput .big-result"), "2");
  await waitFor(async () => {
    const names = await fs.readdir(tempDir);
    return names.some((name) => /^toolbari-organized(?: \(\d+\))?\.pdf$/i.test(name));
  }, "Organized PDF was not downloaded", 12_000);
  await mark("pdf-organizer");

  await openTool("image-watermark");
  await upload("#watermarkFile", pngPath);
  await setInput("#watermarkText", "ToolBari test");
  await selectValue("#watermarkPosition", "center");
  await runForResult("#runWatermark");
  await waitForText("#workspaceOutput", "Watermark added");
  assert.equal(await count("#canvasMount canvas"), 1);
  await mark("image-watermark");

  await openTool("palette-extractor");
  await upload("#paletteFile", pngPath);
  await setInput("#paletteCount", "3");
  await runForResult("#runPalette");
  assert.ok(await isDisplayed("[data-palette-color]"));
  assert.match(await text("[data-palette-color]"), /^#[0-9A-F]{6}$/);
  await mark("palette-extractor");

  await openTool("file-inspector");
  await upload("#inspectorFile", pngPath);
  await runForResult("#runFileInspector");
  await waitForText("#workspaceOutput", "PNG image");
  assert.match(await text("#fileHashOutput"), /^[0-9a-f]{64}$/);
  await mark("file-inspector");
}

async function verifyWebAndTextTools() {
  await openTool("timezone-converter");
  await setDomValue("#timezoneInput", "2024-01-15T12:00");
  await selectValue("#timezoneFrom", "Asia/Dhaka");
  await selectValue("#timezoneTo", "UTC");
  await runForResult("#runTimezone");
  await waitForText("#workspaceOutput", "2024-01-15T06:00:00.000Z");
  await waitForText("#workspaceOutput", "Asia/Dhaka → UTC");
  await mark("timezone-converter");

  await openTool("whatsapp-link");
  await setInput("#whatsappPhone", "+880 1712-345678");
  await setInput("#whatsappMessage", "Hello বাংলা");
  await runForResult("#runWhatsapp");
  await waitForText("#whatsappOutput", "https://wa.me/8801712345678?text=Hello%20%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE");
  assert.match(await attribute('#workspaceOutput a[target="_blank"]', "rel"), /noopener/);
  await mark("whatsapp-link");

  await openTool("seo-meta");
  await setInput("#seoTitle", "Test <Title> & Co");
  await setInput("#seoDescription", "A safe description for search and sharing.");
  await setInput("#seoUrl", "https://example.com/page?ref=1");
  await setInput("#seoImage", "https://example.com/cover.png");
  await runForResult("#runSeoMeta");
  await waitForText("#seoMetaOutput", "<title>Test &lt;Title&gt; &amp; Co</title>");
  await waitForText("#seoMetaOutput", 'content="summary_large_image"');
  await mark("seo-meta");

  await openTool("markdown-preview");
  await setInput(
    "#markdownInput",
    "# Safe heading\n\n**Bold text**\n\n<script>window.__unsafe = true</script>\n\n[Safe](https://example.com) [Unsafe](javascript:alert(1))"
  );
  await runForResult("#runMarkdown");
  assert.equal(await text("#markdownPreview h1"), "Safe heading");
  assert.equal(await text("#markdownPreview strong"), "Bold text");
  assert.equal(await count('#markdownPreview a[href="https://example.com/"]'), 1);
  assert.equal(await count("#markdownPreview script"), 0);
  await waitForText("#markdownPreview", "<script>window.__unsafe = true</script>");
  assert.equal(await driver.executeScript("return window.__unsafe;"), null);
  await mark("markdown-preview");

  await openTool("regex-tester");
  await setInput("#regexPattern", "(\\w+)");
  await setInput("#regexFlags", "g");
  await setInput("#regexText", "one two");
  await setChecked("#regexDoReplace", true);
  await setInput("#regexReplacement", "[$1]");
  await runForResult("#runRegex", 5_000);
  assert.equal(await text("#workspaceOutput .big-result"), "2");
  assert.equal(await text("#regexReplaceOutput"), "[one] [two]");
  await mark("regex-tester");

  await openTool("contrast-checker");
  await setDomValue("#contrastForeground", "#000000");
  await setDomValue("#contrastBackground", "#ffffff");
  await runForResult("#runContrast");
  assert.equal(await text("#workspaceOutput .big-result"), "21.00:1");
  assert.equal(await count("#workspaceOutput .metric strong"), 4);
  const verdicts = await driver.executeScript("return Array.from(document.querySelectorAll('#workspaceOutput .metric strong'),function(node){return node.textContent.trim();});");
  assert.deepEqual(verdicts, ["Pass", "Pass", "Pass", "Pass"]);
  await mark("contrast-checker");

  await openTool("utm-builder");
  await setInput("#utmUrl", "https://example.com/path?keep=1#section");
  await setInput("#utmSource", "google");
  await setInput("#utmMedium", "cpc");
  await setInput("#utmCampaign", "launch sale");
  await runForResult("#runUtm");
  const built = new URL((await text("#expansionTextOutput")).trim());
  assert.equal(built.searchParams.get("keep"), "1");
  assert.equal(built.searchParams.get("utm_source"), "google");
  assert.equal(built.searchParams.get("utm_medium"), "cpc");
  assert.equal(built.searchParams.get("utm_campaign"), "launch sale");
  assert.equal(built.hash, "#section");
  await mark("utm-builder");

  await openTool("random-picker");
  await setInput("#randomItems", "Alpha\nBeta\nGamma");
  await setInput("#randomCount", "2");
  await setChecked("#randomUnique", true);
  await runForResult("#runRandomPick");
  const picks = (await text("#expansionTextOutput")).trim().split(/\r?\n/);
  assert.equal(picks.length, 2);
  assert.equal(new Set(picks).size, 2);
  assert.ok(picks.every((item) => ["Alpha", "Beta", "Gamma"].includes(item)));
  await mark("random-picker");

  await openTool("number-base");
  await setInput("#baseInput", "FF");
  await selectValue("#baseFrom", "16");
  await runForResult("#runNumberBase");
  await waitForText("#expansionTextOutput", "BIN  11111111");
  await waitForText("#expansionTextOutput", "DEC  255");
  await mark("number-base");

  await openTool("html-entities");
  await selectValue("#entityMode", "decode");
  await setInput("#entityInput", "&lt;strong&gt;Hi &amp; বাংলা&lt;/strong&gt;");
  await runForResult("#runEntities");
  assert.equal(await text("#expansionTextOutput"), "<strong>Hi & বাংলা</strong>");
  assert.equal(await count("#expansionTextOutput strong"), 0);
  await mark("html-entities");
}

async function verifyManualBlur() {
  await openTool("blur-faces");
  await selectValue("#blurMode", "manual");
  assert.ok(await isDisplayed("#manualBlurFields"));
  await upload("#imageFile", pngPath);
  await setInput("#blurX", "0");
  await setInput("#blurY", "0");
  await setInput("#blurWidth", "100");
  await setInput("#blurHeight", "100");
  await runForResult("#runImage");
  await waitForText("#workspaceOutput", "The selected region was blurred");
  assert.equal(await count("#canvasMount canvas"), 1);
  await closeTool();
}

async function waitForDownload(filename) {
  const target = path.join(tempDir, filename);
  await waitFor(async () => {
    try { return (await fs.stat(target)).size > 0; } catch (_error) { return false; }
  }, `Download did not appear: ${filename}`, 20_000);
  return fs.readFile(target);
}

async function verifyNewFileTools() {
  await openTool("mp3-tags");
  await upload("#mp3File", mp3Path);
  await setInput("#mp3Title", "Firefox track");
  await runForResult("#runMp3Tags");
  await waitForText("#workspaceOutput", "New ID3 tags were written");
  const tagged = await waitForDownload("track-tagged.mp3");
  assert.equal(tagged.subarray(0, 3).toString(), "ID3");
  assert.ok(tagged.includes(Buffer.from("Firefox track", "utf16le")));
  await closeTool();

  await openTool("pdf-to-word");
  await upload("#pdfFile", pdfPath);
  await runForResult("#runPdf");
  await waitForText("#workspaceOutput", "DOCX ready");
  const docx = await JSZip.loadAsync(await waitForDownload("toolbari-extracted.docx"));
  const xml = await docx.file("word/document.xml").async("string");
  assert.ok(xml.includes("ToolBari Firefox page 1"));
  assert.ok(xml.includes("ToolBari Firefox page 2"));
  await closeTool();

  await openTool("pdf-to-image");
  await upload("#pdfFile", pdfPath);
  await setInput("#pdfPageNumber", "2");
  await runForResult("#runPdf");
  await waitForText("#workspaceOutput", "Page ready");
  await click("#downloadCanvas");
  const png = await waitForDownload("toolbari-pdf-page-2.png");
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  await closeTool();

  await openTool("pdf-compressor");
  await upload("#pdfFile", paddedPdfPath);
  await runForResult("#runPdf");
  await waitForText("#workspaceOutput", "Smaller file downloaded");
  const compressed = await waitForDownload("toolbari-compressed.pdf");
  assert.ok(compressed.length < (await fs.stat(paddedPdfPath)).size);
  assert.equal((await PDFDocument.load(compressed)).getPageCount(), 2);
  await closeTool();
}

async function verifyAdvancedCoverage() {
  assert.deepEqual([...exercised].sort(), [...ADVANCED_TOOL_KEYS].sort(), "Every advanced tool must have a meaningful interaction");
  await resetCatalog();
  for (const key of ADVANCED_TOOL_KEYS) {
    assert.equal(await count(`[data-tool="${key}"]`), 1, `Missing advanced tool card: ${key}`);
  }
}

async function saveFailureScreenshot() {
  if (!driver) return null;
  const outputDir = path.resolve("outputs");
  await fs.mkdir(outputDir, { recursive: true });
  const screenshotPath = path.join(outputDir, "firefox-smoke-failure.png");
  await fs.writeFile(screenshotPath, await driver.takeScreenshot(), "base64");
  return screenshotPath;
}

async function main() {
  await createFixtures();
  await buildDriver();
  console.log(`Firefox smoke target: ${BASE_URL}`);
  console.log(`Firefox binary: ${FIREFOX_BINARY}${HEADLESS ? " (headless)" : ""}`);

  await step("100-card catalog, SEO shell, and bilingual switching", verifyShell);
  await step("search, category filters, modal close button, and Escape", verifySearchAndModal);
  await step("keyboard and semantic accessibility contract", verifyAccessibility);
  await step("phone, tablet, and desktop overflow checks", verifyOverflow);
  await step("all 100 catalog cards open populated workspaces", verifyEveryCardOpens);
  await step("five advanced calculators return meaningful results", verifyCalculators);
  await step("PDF organizer and image/file tools process local fixtures", verifyFileTools);
  await step("remaining advanced web, text, developer, and link tools work", verifyWebAndTextTools);
  await step("manual face blur works in Firefox", verifyManualBlur);
  await step("MP3, DOCX, PDF image and compressor downloads work in Firefox", verifyNewFileTools);
  await step("all 19 advanced tools received meaningful coverage", verifyAdvancedCoverage);
}

try {
  await main();
  console.log(`\nFirefox smoke PASS — ${passed} groups, 100 cards, 19 advanced tools, and manual blur verified.`);
} catch (error) {
  console.error(`\nFirefox smoke FAIL after ${passed} passing groups.`);
  console.error(error && error.stack ? error.stack : error);
  try {
    const screenshot = await saveFailureScreenshot();
    if (screenshot) console.error(`Failure screenshot: ${screenshot}`);
  } catch (screenshotError) {
    console.error(`Could not save failure screenshot: ${screenshotError.message}`);
  }
  process.exitCode = 1;
} finally {
  if (driver) {
    try { await driver.quit(); } catch (error) { console.error(`Could not close Firefox: ${error.message}`); }
  }
  try { await removeFixtures(); } catch (error) { console.error(`Could not clean temporary fixtures: ${error.message}`); process.exitCode = 1; }
}
