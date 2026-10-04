import { defineConfig, devices } from "@playwright/test";

const externalBaseUrl = process.env.BASE_URL;
const baseURL = externalBaseUrl || "http://127.0.0.1:4173";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: "./outputs/playwright-results",
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 90_000,
  expect: { timeout: 8_000 },
  reporter: process.env.CI
    ? [["line"], ["html", { outputFolder: "outputs/playwright-report", open: "never" }]]
    : [["line"]],
  use: {
    baseURL,
    locale: "en-US",
    timezoneId: "Asia/Dhaka",
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    acceptDownloads: true
  },
  webServer: externalBaseUrl
    ? undefined
    : {
        command: "node scripts/serve.mjs",
        url: baseURL,
        reuseExistingServer: true,
        timeout: 120_000
      },
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], browserName: "chromium", channel: "chrome" }
    },
    {
      name: "edge",
      use: { ...devices["Desktop Edge"], browserName: "chromium", channel: "msedge" }
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], browserName: "webkit" }
    },
    {
      name: "mobile-webkit",
      use: { ...devices["iPhone 13"], browserName: "webkit" }
    }
  ]
});
