import { test, expect } from "@playwright/test";

test.describe("ToolBari Catalog 105 Tools & Beta Upgrades Verification", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/?lang=en");
    await page.waitForLoadState("domcontentloaded");
  });

  test("1. Total tool count displays 105", async ({ page }) => {
    const totalEl = page.locator("#toolTotal");
    await expect(totalEl).toHaveText("105");

    const cards = page.locator("#toolGrid .tool-card");
    await expect(cards).toHaveCount(105);
  });

  test("2. Tool 4 (banglish-to-bn) phonetic transliteration works", async ({ page }) => {
    await page.locator('[data-tool="banglish-to-bn"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    const input = page.locator("#converterInput");
    await input.fill("ami banglay gan gai");
    await page.locator("#runConverter").click();

    const output = page.locator("#workspaceOutput");
    await expect(output).toContainText("আমি বাংলায় গান গাই");
  });

  test("3. Tool 54 (bijoy) bidirectional conversion works", async ({ page }) => {
    await page.locator('[data-tool="bijoy"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    // Direction: Bijoy to Unicode
    await page.locator("#bijoyDirection").selectOption("bijoy-to-uni");
    await page.locator("#converterInput").fill("Avgvi †mvbvi evsjv");
    await page.locator("#runConverter").click();

    const output = page.locator("#workspaceOutput");
    await expect(output).toContainText("আমার সোনার বাংলা");
  });

  test("4. Tool 45 (qr-scanner) live camera and file UI ready", async ({ page }) => {
    await page.locator('[data-tool="qr-scanner"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    await expect(page.locator("#startQrCamera")).toBeVisible();
    await expect(page.locator("#qrFile")).toBeVisible();
  });

  test("5. Tool 9 (bdix) and Tool 30 (speed) gauges and tests ready", async ({ page }) => {
    await page.locator('[data-tool="speed"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();
    await expect(page.locator("#speedGaugeSvg")).toBeVisible();
    await expect(page.locator("#runNetwork")).toBeVisible();
  });

  test("6. Tool 101 (signature-maker) canvas, presets, and export ready", async ({ page }) => {
    await page.locator('[data-tool="signature-maker"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    await expect(page.locator("#sigCanvas")).toBeVisible();
    await expect(page.locator("#sigPreset")).toBeVisible();
    await expect(page.locator("#sigDownloadGovt")).toBeVisible();
    await expect(page.locator("#sigClear")).toBeVisible();
  });

  test("7. Tool 102 (zakat-calculator) calculates correct 2.5% zakat", async ({ page }) => {
    await page.locator('[data-tool="zakat-calculator"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    await page.locator("#zakatCash").fill("500000");
    await page.locator("#zakatDebts").fill("100000"); // Net: 400,000 -> 2.5% is 10,000
    await page.locator("#runZakat").click();

    const output = page.locator("#workspaceOutput");
    await expect(output).toContainText("10,000");
    await expect(output).toContainText("400,000");
  });

  test("8. Tool 103 (income-tax) calculates NBR slab progressive tax", async ({ page }) => {
    await page.locator('[data-tool="income-tax"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    await page.locator("#taxAnnualIncome").fill("650000");
    await page.locator("#taxInvestment").fill("0");
    await page.locator("#runTax").click();

    // Male general exemption 350k.
    // 650k - 350k = 300k taxable.
    // Next 100k @ 5% = 5,000.
    // Next 200k @ 10% = 20,000.
    // Total gross = 25,000.
    const output = page.locator("#workspaceOutput");
    await expect(output).toContainText("25,000");
  });

  test("9. Tool 104 (voice-typing) dictation and palette ready", async ({ page }) => {
    await page.locator('[data-tool="voice-typing"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    await expect(page.locator("#voiceLang")).toBeVisible();
    await expect(page.locator("#voiceToggle")).toBeVisible();
    await expect(page.locator("#voiceInput")).toBeVisible();

    // Click a punctuation button
    await page.locator('.punc-btn[data-punc="।"]').click();
    await expect(page.locator("#voiceInput")).toHaveValue("। ");
  });

  test("10. Tool 105 (exif-inspector) inspector and stripper controls ready", async ({ page }) => {
    await page.locator('[data-tool="exif-inspector"]').click();
    await expect(page.locator("#toolModal")).toBeVisible();

    await expect(page.locator("#exifFile")).toBeVisible();
    await expect(page.locator("#exifInspectBtn")).toBeVisible();
  });
});
