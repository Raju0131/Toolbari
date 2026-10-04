import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import JSZip from "jszip";
import { PDFDocument, StandardFonts } from "pdf-lib";

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

const EXPECTED_CATALOG_SIZE = 100;
const TEST_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR4nGP4z8DwHwwZGP7//w9kAABHygj4/BTyWgAAAABJRU5ErkJggg==",
  "base64"
);

function makeSinglePagePdf() {
  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] /Contents 4 0 R >>\nendobj\n",
    "4 0 obj\n<< /Length 0 >>\nstream\n\nendstream\nendobj\n"
  ];
  let body = "%PDF-1.4\n%âãÏÓ\n";
  const offsets = [0];
  for (const object of objects) {
    offsets.push(Buffer.byteLength(body, "binary"));
    body += object;
  }
  const xrefOffset = Buffer.byteLength(body, "binary");
  body += `xref\n0 ${objects.length + 1}\n`;
  body += "0000000000 65535 f \n";
  for (const offset of offsets.slice(1)) body += `${String(offset).padStart(10, "0")} 00000 n \n`;
  body += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  return Buffer.from(body, "binary");
}

async function loadHome(page) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#toolGrid .tool-card").first()).toBeVisible();
}

async function useEnglish(page) {
  const select = page.locator("#languageSelect");
  if ((await select.inputValue()) !== "en") await select.selectOption("en");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
}

async function openTool(page, key) {
  const search = page.locator("#searchInput");
  if ((await search.inputValue()) !== "") await search.fill("");
  const allCategory = page.locator('[data-category="all"]');
  if ((await allCategory.getAttribute("aria-pressed")) !== "true") await allCategory.click();
  const card = page.locator(`[data-tool="${key}"]`);
  await expect(card, `catalog card for ${key}`).toBeVisible();
  await card.click();
  const modal = page.locator("#toolModal");
  await expect(modal).toHaveAttribute("open", "");
  await expect(modal.locator("#toolWorkspace")).not.toBeEmpty();
  return modal;
}

async function closeTool(page) {
  const modal = page.locator("#toolModal");
  if (await modal.getAttribute("open") !== null) {
    await modal.locator("#modalClose").click();
    await expect(modal).not.toHaveAttribute("open", "");
  }
}

async function expectResultAfter(page, action) {
  const output = page.locator("#workspaceOutput");
  await expect(output).toBeVisible();
  await action();
  await expect(output.locator(".result-content")).toBeVisible();
  await expect(output.locator(".result-content")).not.toBeEmpty();
}

async function makeTextPdf(pageCount = 1) {
  const document = await PDFDocument.create();
  const font = await document.embedFont(StandardFonts.Helvetica);
  for (let i = 0; i < pageCount; i++) {
    const page = document.addPage([320, 420]);
    page.drawText(`ToolBari page ${i + 1}`, { x: 30, y: 350, size: 16, font });
  }
  return Buffer.from(await document.save({ useObjectStreams: false }));
}

async function makeXlsx() {
  const xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  const cell = (ref, value) => `<c r="${ref}" t="inlineStr"><is><t>${value}</t></is></c>`;
  const zip = new JSZip();
  zip.file("[Content_Types].xml", `${xml}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>`);
  zip.file("_rels/.rels", `${xml}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`);
  zip.file("xl/workbook.xml", `${xml}<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="People" sheetId="1" r:id="rId1"/></sheets></workbook>`);
  zip.file("xl/_rels/workbook.xml.rels", `${xml}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>`);
  zip.file("xl/worksheets/sheet1.xml", `${xml}<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData><row r="1">${cell("A1", "name")}${cell("B1", "city")}</row><row r="2">${cell("A2", "Rahim")}${cell("B2", "Rajshahi")}</row></sheetData></worksheet>`);
  return zip.generateAsync({ type: "nodebuffer" });
}

test.beforeEach(async ({ page }) => {
  page.__toolbariErrors = [];
  page.on("pageerror", (error) => page.__toolbariErrors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") page.__toolbariErrors.push(`console: ${message.text()}`);
  });
});

test.afterEach(async ({ page }) => {
  expect(page.__toolbariErrors, page.__toolbariErrors.join("\n")).toEqual([]);
});

test.describe("catalog shell", () => {
  test("loads the complete catalog with SEO essentials", async ({ page, request }) => {
    await loadHome(page);
    await expect(page.locator("#toolGrid .tool-card")).toHaveCount(EXPECTED_CATALOG_SIZE);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^https:\/\//);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('script[type="application\/ld\+json"]')).toHaveCount(1);

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain("Sitemap:");
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain("<urlset");
  });

  test("switches completely between Bangla and English", async ({ page }) => {
    await loadHome(page);
    await page.locator("#languageSelect").selectOption("bn");
    await expect(page.locator("html")).toHaveAttribute("lang", "bn-BD");
    await expect(page.locator("#hero-title")).toContainText("দরকারি টুল");
    await expect(page.locator("#toolGrid .tool-card").first().locator("h3")).not.toBeEmpty();

    await page.locator("#languageSelect").selectOption("en");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("#hero-title")).toContainText("Useful tools");
    await expect(page.locator("#resultCount")).toContainText("tools found");
  });

  test("search and category filters narrow and reset the catalog", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    const search = page.locator("#searchInput");
    await search.fill("scientific calculator");
    await expect(page.locator('[data-tool="scientific-calculator"]')).toBeVisible();
    expect(await page.locator("#toolGrid .tool-card").count()).toBeLessThan(EXPECTED_CATALOG_SIZE);

    await search.fill("");
    await page.locator('[data-category="developer"]').click();
    await expect(page.locator('[data-tool="regex-tester"]')).toBeVisible();
    await expect(page.locator('[data-tool="age"]')).toHaveCount(0);

    await page.locator('[data-category="all"]').click();
    await expect(page.locator("#toolGrid .tool-card")).toHaveCount(EXPECTED_CATALOG_SIZE);
  });

  test("opens and closes a modal by button and Escape", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    const modal = await openTool(page, "age");
    await expect(modal.locator("#modalTitle")).toHaveText("Age Calculator");
    await closeTool(page);

    await openTool(page, "age");
    await page.keyboard.press("Escape");
    await expect(modal).not.toHaveAttribute("open", "");
    await expect(page.locator("body")).not.toHaveClass(/modal-open/);
  });

  test("shows messages inside an open tool dialog and on the page", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    await openTool(page, "age");
    await page.locator("#runAge").click();
    const modalToast = page.locator('#toolModal #modalToast[role="status"]');
    await expect(modalToast).toHaveText("Choose a valid date of birth");
    await expect(modalToast).toHaveClass(/visible/);
    await closeTool(page);

    await page.locator("#calculateAge").click();
    await expect(page.locator("body > #toast")).toHaveText("Choose a valid date of birth");
    await expect(page.locator("body > #toast")).toHaveClass(/visible/);
  });

  test("opens a shared tool link while keeping one clean canonical", async ({ page }) => {
    await page.goto("/?lang=en&tool=contrast-checker", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#toolModal")).toHaveAttribute("open", "");
    await expect(page.locator("#modalTitle")).toContainText("Contrast Checker");
    await expect(page).toHaveTitle("Color Contrast Checker — ToolBari");
    await expect(page.locator('#metaDescription')).toHaveAttribute("content", /WCAG contrast ratio/i);
    await expect(page.locator('#ogTitle')).toHaveAttribute("content", "Color Contrast Checker — ToolBari");
    await expect(page.locator('#ogUrl')).toHaveAttribute(
      "content",
      "https://toolbari.jben06503.chatgpt.site/"
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://toolbari.jben06503.chatgpt.site/"
    );
    const structuredData = await page.locator('#siteStructuredData').textContent();
    const graph = JSON.parse(structuredData)["@graph"];
    expect(graph.some((entry) => entry["@type"] === "WebSite")).toBeTruthy();
    expect(graph.some((entry) => entry["@type"] === "WebApplication")).toBeTruthy();
    expect(graph.some((entry) => entry["@type"] === "ItemList")).toBeFalsy();
  });

  test("provides keyboard-friendly landmarks, labels, live regions and dialog naming", async ({ page }) => {
    await page.goto("/?lang=en", { waitUntil: "domcontentloaded" });
    await expect(page.locator("main#main")).toHaveCount(1);
    const primaryNav = page.getByRole("navigation", { name: "Primary navigation" });
    if (!(await primaryNav.isVisible())) await page.locator("#navToggle").click();
    await expect(primaryNav).toBeVisible();
    await expect(page.getByRole("combobox", { name: "Choose language" })).toBeVisible();
    await expect(page.locator('#resultCount[role="status"][aria-live="polite"]')).toHaveCount(1);
    await expect(page.locator('#toast[role="status"][aria-live="polite"]')).toHaveCount(1);

    const skipLink = page.locator(".skip-link");
    await skipLink.focus();
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveAttribute("href", "#main");

    await page.locator('[data-tool="scientific-calculator"]').focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog", { name: "Scientific Calculator" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByLabel("Expression")).toBeVisible();
    await expect(dialog.getByLabel("Angle unit")).toBeVisible();
    await expect(dialog.getByRole("button", { name: "Calculate" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();

    const unnamedCards = await page.locator("#toolGrid .tool-card").evaluateAll((cards) =>
      cards.filter((card) => !(card.getAttribute("aria-label") || "").trim()).length
    );
    expect(unnamedCards).toBe(0);
  });

  test("has no horizontal overflow at phone, tablet, or desktop widths", async ({ page }) => {
    for (const viewport of [
      { width: 360, height: 780 },
      { width: 768, height: 900 },
      { width: 1440, height: 1000 }
    ]) {
      await page.setViewportSize(viewport);
      await loadHome(page);
      const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(pageOverflow, `page overflow at ${viewport.width}px`).toBeLessThanOrEqual(1);
      await useEnglish(page);
      await openTool(page, "scientific-calculator");
      const modalOverflow = await page.locator("#toolModal").evaluate((element) => element.scrollWidth - element.offsetWidth);
      expect(modalOverflow, `modal overflow at ${viewport.width}px`).toBeLessThanOrEqual(1);
      await closeTool(page);
    }
  });

  test("every catalog card opens a populated workspace", async ({ page }) => {
    test.setTimeout(180_000);
    await loadHome(page);
    await useEnglish(page);
    const keys = await page.locator("#toolGrid .tool-card").evaluateAll((cards) => cards.map((card) => card.dataset.tool));
    expect(keys).toHaveLength(EXPECTED_CATALOG_SIZE);
    expect(new Set(keys).size).toBe(EXPECTED_CATALOG_SIZE);
    for (const key of keys) {
      const modal = await openTool(page, key);
      await expect(modal.locator("#modalTitle"), `title for ${key}`).not.toBeEmpty();
      await expect(modal.locator("#toolWorkspace > *"), `workspace for ${key}`).toHaveCount(1);
      await closeTool(page);
    }
  });
});

test.describe("new local-first tools", () => {
  test("makes and scans a QR image with bundled libraries", async ({ page }) => {
    await page.addInitScript(() => { try { delete window.BarcodeDetector; } catch (_error) { /* use bundled fallback */ } });
    await loadHome(page);
    await useEnglish(page);
    await openTool(page, "qr-maker");
    await page.locator("#qrText").fill("https://example.com/toolbari");
    await page.locator("#runQr").click();
    await expect(page.locator("#qrMount canvas")).toBeAttached();
    const dataUrl = await page.locator("#qrMount canvas").evaluate((canvas) => canvas.toDataURL("image/png"));
    await closeTool(page);
    await openTool(page, "qr-scanner");
    await page.locator("#qrFile").setInputFiles({
      name: "toolbari-qr.png", mimeType: "image/png", buffer: Buffer.from(dataUrl.split(",")[1], "base64")
    });
    await page.locator("#runQr").click();
    await expect(page.locator("#workspaceOutput")).toContainText("https://example.com/toolbari");
  });

  test("previews an XLSX sheet with the bundled spreadsheet library", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    await openTool(page, "sheet-viewer");
    await page.locator("#sheetFile").setInputFiles({
      name: "people.xlsx",
      mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      buffer: await makeXlsx()
    });
    const libraryRequest = page.waitForRequest(/\/vendor\/xlsx\.full\.min\.js$/);
    await page.locator("#runSheet").click();
    await libraryRequest;
    await expect(page.locator("#workspaceOutput .data-table")).toContainText("Rajshahi");
    await expect(page.locator("#workspaceOutput")).toContainText("2 rows");
  });

  test("writes an ID3-tagged MP3 download", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    await openTool(page, "mp3-tags");
    const fakeFrame = Buffer.alloc(256, 0);
    fakeFrame[0] = 0xff;
    fakeFrame[1] = 0xfb;
    fakeFrame[2] = 0x90;
    fakeFrame[3] = 0x64;
    await page.locator("#mp3File").setInputFiles({ name: "sample.mp3", mimeType: "audio/mpeg", buffer: fakeFrame });
    await page.locator("#mp3Title").fill("Launch track");
    await page.locator("#mp3Artist").fill("ToolBari");
    const downloadPromise = page.waitForEvent("download");
    await page.locator("#runMp3Tags").click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("sample-tagged.mp3");
    const bytes = await download.createReadStream();
    const chunks = [];
    for await (const chunk of bytes) chunks.push(chunk);
    const output = Buffer.concat(chunks);
    expect(output.subarray(0, 3).toString()).toBe("ID3");
    expect(output.includes(Buffer.from("Launch track", "utf16le"))).toBeTruthy();
    await expect(page.locator("#workspaceOutput")).toContainText("New ID3 tags were written");
  });

  test("splits selected PDF pages and exports a real DOCX", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    const pdf = await makeTextPdf(2);
    await openTool(page, "pdf-split");
    await page.locator("#pdfFile").setInputFiles({ name: "two.pdf", mimeType: "application/pdf", buffer: pdf });
    await page.locator("#pdfSplitPages").fill("2");
    const splitDownload = page.waitForEvent("download");
    await page.locator("#runPdf").click();
    const zipDownload = await splitDownload;
    expect(zipDownload.suggestedFilename()).toBe("toolbari-split-pages.zip");
    const splitZip = await JSZip.loadAsync(await readFile(await zipDownload.path()));
    expect(Object.keys(splitZip.files).filter((name) => name.endsWith(".pdf"))).toEqual(["toolbari-page-2.pdf"]);
    await closeTool(page);

    await openTool(page, "pdf-to-word");
    await page.locator("#pdfFile").setInputFiles({ name: "two.pdf", mimeType: "application/pdf", buffer: pdf });
    const docxDownload = page.waitForEvent("download");
    await page.locator("#runPdf").click();
    const docx = await docxDownload;
    expect(docx.suggestedFilename()).toBe("toolbari-extracted.docx");
    const docxBytes = await readFile(await docx.path());
    const docxZip = await JSZip.loadAsync(docxBytes);
    const documentXml = await docxZip.file("word/document.xml").async("string");
    expect(documentXml).toContain("ToolBari page 1");
    expect(documentXml).toContain("ToolBari page 2");
    await expect(page.locator("#workspaceOutput")).toContainText("DOCX ready");
    await closeTool(page);

    await openTool(page, "word-pdf");
    await page.locator("#wordFile").setInputFiles({
      name: "extracted.docx",
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      buffer: docxBytes
    });
    await expect(page.locator("#wordContent")).toHaveValue(/ToolBari page 1/);
    await expect(page.locator("#workspaceOutput")).toContainText("ToolBari page 2");
  });

  test("compressor reports an honest result and page image selector works", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    const pdf = await makeTextPdf(2);
    const padded = Buffer.concat([pdf, Buffer.from("\n" + "% padding\n".repeat(2000))]);
    await openTool(page, "pdf-compressor");
    await page.locator("#pdfFile").setInputFiles({ name: "padded.pdf", mimeType: "application/pdf", buffer: padded });
    const compressedDownload = page.waitForEvent("download");
    await page.locator("#runPdf").click();
    const compressed = await compressedDownload;
    expect(compressed.suggestedFilename()).toBe("toolbari-compressed.pdf");
    const outputPdf = await readFile(await compressed.path());
    expect(outputPdf.length).toBeLessThan(padded.length);
    expect((await PDFDocument.load(outputPdf)).getPageCount()).toBe(2);
    await closeTool(page);

    await openTool(page, "pdf-to-image");
    await page.locator("#pdfFile").setInputFiles({ name: "two.pdf", mimeType: "application/pdf", buffer: pdf });
    await page.locator("#pdfPageNumber").fill("2");
    await page.locator("#runPdf").click();
    await expect(page.locator("#workspaceOutput")).toContainText("Page ready");
    const imageDownload = page.waitForEvent("download");
    await page.locator("#downloadCanvas").click();
    expect((await imageDownload).suggestedFilename()).toBe("toolbari-pdf-page-2.png");
  });

  test("all 19 recommended tools are present and live", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);
    for (const key of ADVANCED_TOOL_KEYS) {
      const card = page.locator(`[data-tool="${key}"]`);
      await expect(card, key).toBeVisible();
      await expect(card.locator(".card-status"), `${key} availability`).toContainText("Use now");
    }
  });

  test("calculates scientific, compound-interest, work-hours, margin and bill results", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);

    await openTool(page, "scientific-calculator");
    await page.locator("#scienceExpression").fill("sin(30) + sqrt(81) * 2");
    await expectResultAfter(page, () => page.locator("#runScience").click());
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("18.5");
    await closeTool(page);

    await openTool(page, "compound-interest");
    await page.locator("#compoundInitial").fill("1000");
    await page.locator("#compoundMonthly").fill("100");
    await page.locator("#compoundRate").fill("12");
    await page.locator("#compoundYears").fill("1");
    await expectResultAfter(page, () => page.locator("#runCompound").click());
    await expect(page.locator("#workspaceOutput")).toContainText("Estimated future value");
    await expect(page.locator("#workspaceOutput")).toContainText("2,200");
    await closeTool(page);

    await openTool(page, "work-hours");
    await page.locator("#workStart").fill("22:00");
    await page.locator("#workEnd").fill("07:00");
    await page.locator("#workBreak").fill("60");
    await page.locator("#workRate").fill("500");
    await expectResultAfter(page, () => page.locator("#runWorkHours").click());
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("8 hours");
    await expect(page.locator("#workspaceOutput")).toContainText("৳4,000");
    await closeTool(page);

    await openTool(page, "profit-margin");
    await page.locator("#profitMode").selectOption("target");
    await page.locator("#profitCost").fill("800");
    await page.locator("#profitTarget").fill("20");
    await expectResultAfter(page, () => page.locator("#runProfit").click());
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("৳1,000");
    await expect(page.locator("#workspaceOutput")).toContainText("20%");
    await closeTool(page);

    await openTool(page, "bill-splitter");
    await page.locator("#billSubtotal").fill("100");
    await page.locator("#billTax").fill("0");
    await page.locator("#billService").fill("0");
    await page.locator("#billTip").fill("10");
    await page.locator("#billPeople").fill("3");
    await expectResultAfter(page, () => page.locator("#runBill").click());
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("৳36.67");
    await expect(page.locator("#workspaceOutput")).toContainText("2 people pay ৳36.67");
  });

  test("organizes a PDF and processes watermark and palette image files", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);

    await openTool(page, "pdf-organizer");
    await page.evaluate(() => {
      window.__pdfTest = { copiedOrder: null, rotations: [], added: 0 };
      const pageFactory = () => ({
        getRotation: () => ({ angle: 0 }),
        setRotation: (rotation) => window.__pdfTest.rotations.push(rotation.angle)
      });
      window.PDFLib = {
        degrees: (angle) => ({ angle }),
        PDFDocument: {
          load: async () => ({ getPageCount: () => 1 }),
          create: async () => ({
            copyPages: async (_source, order) => {
              window.__pdfTest.copiedOrder = order.slice();
              return order.map(pageFactory);
            },
            addPage: () => { window.__pdfTest.added += 1; },
            save: async () => new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52])
          })
        }
      };
    });
    await page.locator("#organizerPdf").setInputFiles({
      name: "one-page.pdf",
      mimeType: "application/pdf",
      buffer: makeSinglePagePdf()
    });
    await page.locator("#organizerOrder").fill("1, 1");
    await page.locator("#organizerRotation").selectOption("90");
    await expectResultAfter(page, () => page.locator("#runPdfOrganizer").click());
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("2");
    expect(await page.evaluate(() => window.__pdfTest)).toEqual({ copiedOrder: [0, 0], rotations: [90, 90], added: 2 });
    await closeTool(page);

    await openTool(page, "image-watermark");
    await page.locator("#watermarkFile").setInputFiles({ name: "pixel.png", mimeType: "image/png", buffer: TEST_PNG });
    await page.locator("#watermarkText").fill("ToolBari test");
    await page.locator("#watermarkPosition").selectOption("center");
    await expectResultAfter(page, () => page.locator("#runWatermark").click());
    await expect(page.locator("#workspaceOutput")).toContainText("Watermark added");
    await expect(page.locator("#canvasMount canvas")).toBeVisible();
    await closeTool(page);

    await openTool(page, "palette-extractor");
    await page.locator("#paletteFile").setInputFiles({ name: "pixel.png", mimeType: "image/png", buffer: TEST_PNG });
    await page.locator("#paletteCount").fill("3");
    await expectResultAfter(page, () => page.locator("#runPalette").click());
    await expect(page.locator("[data-palette-color]").first()).toBeVisible();
    await expect(page.locator("[data-palette-color]").first()).toHaveText(/^#[0-9A-F]{6}$/);
  });

  test("converts time zones and creates WhatsApp, SEO, contrast and UTM outputs", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);

    await openTool(page, "timezone-converter");
    await page.locator("#timezoneInput").fill("2024-01-15T12:00");
    await page.locator("#timezoneFrom").selectOption("Asia/Dhaka");
    await page.locator("#timezoneTo").selectOption("UTC");
    await expectResultAfter(page, () => page.locator("#runTimezone").click());
    await expect(page.locator("#workspaceOutput")).toContainText("2024-01-15T06:00:00.000Z");
    await expect(page.locator("#workspaceOutput")).toContainText("Asia/Dhaka → UTC");
    await closeTool(page);

    await openTool(page, "whatsapp-link");
    await page.locator("#whatsappPhone").fill("+880 1712-345678");
    await page.locator("#whatsappMessage").fill("Hello বাংলা");
    await expectResultAfter(page, () => page.locator("#runWhatsapp").click());
    await expect(page.locator("#whatsappOutput")).toContainText("https://wa.me/8801712345678?text=Hello%20%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE");
    await expect(page.locator('#workspaceOutput a[target="_blank"]')).toHaveAttribute("rel", /noopener/);
    await closeTool(page);

    await openTool(page, "seo-meta");
    await page.locator("#seoTitle").fill("Test <Title> & Co");
    await page.locator("#seoDescription").fill("A safe description for search and sharing.");
    await page.locator("#seoUrl").fill("https://example.com/page?ref=1");
    await page.locator("#seoImage").fill("https://example.com/cover.png");
    await expectResultAfter(page, () => page.locator("#runSeoMeta").click());
    await expect(page.locator("#seoMetaOutput")).toContainText("<title>Test &lt;Title&gt; &amp; Co</title>");
    await expect(page.locator("#seoMetaOutput")).toContainText('content="summary_large_image"');
    await closeTool(page);

    await openTool(page, "contrast-checker");
    await page.locator("#contrastForeground").fill("#000000");
    await page.locator("#contrastBackground").fill("#ffffff");
    await page.locator("#runContrast").click();
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("21.00:1");
    await expect(page.locator("#workspaceOutput .metric strong")).toHaveText(["Pass", "Pass", "Pass", "Pass"]);
    await closeTool(page);

    await openTool(page, "utm-builder");
    await page.locator("#utmUrl").fill("https://example.com/path?keep=1#section");
    await page.locator("#utmSource").fill("google");
    await page.locator("#utmMedium").fill("cpc");
    await page.locator("#utmCampaign").fill("launch sale");
    await expectResultAfter(page, () => page.locator("#runUtm").click());
    const utm = await page.locator("#expansionTextOutput").textContent();
    const utmUrl = new URL(utm);
    expect(utmUrl.searchParams.get("keep")).toBe("1");
    expect(utmUrl.searchParams.get("utm_source")).toBe("google");
    expect(utmUrl.searchParams.get("utm_medium")).toBe("cpc");
    expect(utmUrl.searchParams.get("utm_campaign")).toBe("launch sale");
    expect(utmUrl.hash).toBe("#section");
  });

  test("renders Markdown safely and runs regex in the bounded worker", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);

    await openTool(page, "markdown-preview");
    await page.locator("#markdownInput").fill(
      "# Safe heading\n\n**Bold text**\n\n<script>window.__unsafe = true</script>\n\n[Safe](https://example.com) [Unsafe](javascript:alert(1))"
    );
    await expectResultAfter(page, () => page.locator("#runMarkdown").click());
    const preview = page.locator("#markdownPreview");
    await expect(preview.locator("h1")).toHaveText("Safe heading");
    await expect(preview.locator("strong")).toHaveText("Bold text");
    await expect(preview.locator('a[href="https://example.com/"]')).toHaveCount(1);
    await expect(preview.locator("script")).toHaveCount(0);
    await expect(preview).toContainText("<script>window.__unsafe = true</script>");
    expect(await page.evaluate(() => window.__unsafe)).toBeUndefined();
    await closeTool(page);

    await openTool(page, "regex-tester");
    await page.locator("#regexPattern").fill("(\\w+)");
    await page.locator("#regexFlags").fill("g");
    await page.locator("#regexText").fill("one two");
    await page.locator("#regexDoReplace").check();
    await page.locator("#regexReplacement").fill("[$1]");
    await expectResultAfter(page, () => page.locator("#runRegex").click());
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("2");
    await expect(page.locator("#regexReplaceOutput")).toHaveText("[one] [two]");
  });

  test("picks random items, inspects a file, converts bases and keeps decoded entities inert", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);

    await openTool(page, "random-picker");
    await page.locator("#randomItems").fill("Alpha\nBeta\nGamma");
    await page.locator("#randomCount").fill("2");
    await page.locator("#randomUnique").check();
    await expectResultAfter(page, () => page.locator("#runRandomPick").click());
    const picks = (await page.locator("#expansionTextOutput").textContent()).trim().split("\n");
    expect(picks).toHaveLength(2);
    expect(new Set(picks).size).toBe(2);
    expect(picks.every((item) => ["Alpha", "Beta", "Gamma"].includes(item))).toBeTruthy();
    await closeTool(page);

    await openTool(page, "file-inspector");
    await page.locator("#inspectorFile").setInputFiles({ name: "pixel.png", mimeType: "image/png", buffer: TEST_PNG });
    await expectResultAfter(page, () => page.locator("#runFileInspector").click());
    await expect(page.locator("#workspaceOutput")).toContainText("PNG image");
    await expect(page.locator("#fileHashOutput")).toHaveText(/^[0-9a-f]{64}$/);
    await closeTool(page);

    await openTool(page, "number-base");
    await page.locator("#baseInput").fill("FF");
    await page.locator("#baseFrom").selectOption("16");
    await expectResultAfter(page, () => page.locator("#runNumberBase").click());
    await expect(page.locator("#expansionTextOutput")).toContainText("BIN  11111111");
    await expect(page.locator("#expansionTextOutput")).toContainText("DEC  255");
    await closeTool(page);

    await openTool(page, "html-entities");
    await page.locator("#entityMode").selectOption("decode");
    await page.locator("#entityInput").fill("&lt;strong&gt;Hi &amp; বাংলা&lt;/strong&gt;");
    await expectResultAfter(page, () => page.locator("#runEntities").click());
    await expect(page.locator("#expansionTextOutput")).toHaveText("<strong>Hi & বাংলা</strong>");
    await expect(page.locator("#expansionTextOutput strong")).toHaveCount(0);
  });

  test("uses manual face blur when FaceDetector is unavailable", async ({ page }) => {
    await page.addInitScript(() => {
      try { delete window.FaceDetector; } catch (_error) { /* No native detector to remove. */ }
    });
    await loadHome(page);
    await useEnglish(page);
    expect(await page.evaluate(() => "FaceDetector" in window)).toBeFalsy();

    await openTool(page, "blur-faces");
    await expect(page.locator("#blurMode")).toHaveValue("manual");
    await expect(page.locator("#manualBlurFields")).toBeVisible();
    await page.locator("#imageFile").setInputFiles({ name: "pixel.png", mimeType: "image/png", buffer: TEST_PNG });
    await page.locator("#blurX").fill("0");
    await page.locator("#blurY").fill("0");
    await page.locator("#blurWidth").fill("100");
    await page.locator("#blurHeight").fill("100");
    await page.locator("#runImage").click();
    await expect(page.locator("#workspaceOutput .result-content")).toBeVisible();
    await expect(page.locator("#workspaceOutput")).toContainText("The selected region was blurred");
    await expect(page.locator("#canvasMount canvas")).toBeVisible();
  });

  test("handles undefined tangent, Unicode empty regex, DST folds and duplicate unique picks", async ({ page }) => {
    await loadHome(page);
    await useEnglish(page);

    await openTool(page, "scientific-calculator");
    await page.locator("#scienceExpression").fill("tan(90)");
    await page.locator("#runScience").click();
    await expect(page.locator("#workspaceOutput")).toContainText("undefined at this angle");
    await closeTool(page);

    await openTool(page, "regex-tester");
    await page.locator("#regexPattern").fill("(?:)");
    await page.locator("#regexFlags").fill("gu");
    await page.locator("#regexText").fill("😀");
    await page.locator("#runRegex").click();
    await expect(page.locator("#workspaceOutput .big-result")).toHaveText("2");
    await closeTool(page);

    await openTool(page, "timezone-converter");
    await page.locator("#timezoneInput").fill("2026-11-01T01:30");
    await page.locator("#timezoneFrom").selectOption("America/New_York");
    await page.locator("#timezoneTo").selectOption("UTC");
    await page.locator("#timezoneFold").selectOption("earlier");
    await page.locator("#runTimezone").click();
    await expect(page.locator("#workspaceOutput")).toContainText("2026-11-01T05:30:00.000Z");
    await page.locator("#timezoneFold").selectOption("later");
    await page.locator("#runTimezone").click();
    await expect(page.locator("#workspaceOutput")).toContainText("2026-11-01T06:30:00.000Z");
    await closeTool(page);

    await openTool(page, "random-picker");
    await page.locator("#randomItems").fill("A\nA\nB");
    await page.locator("#randomCount").fill("2");
    await page.locator("#randomUnique").check();
    await page.locator("#runRandomPick").click();
    const picked = (await page.locator("#expansionTextOutput").innerText()).trim().split(/\r?\n/).sort();
    expect(picked).toEqual(["A", "B"]);
    await closeTool(page);
  });
});
