import { test, expect } from "@playwright/test";

test("expand testing dynamic table", async ({ page }) => {
  // navigate to expand testing dynamic table page
  await page.goto("https://practice.expandtesting.com/dynamic-table");

  // Wait until the table becomes visible without setting a hardcoded timeout
  const table = page.locator(".table.table-striped");
  await expect(table).toBeVisible();

  // Locate and retrieve the specific CPU value for "Chrome"
  const tableCpuText = await page
    .locator(".table.table-striped tr:has-text('Chrome') td:nth-of-type(2)")
    .textContent();

  // Parse and log the extracted table CPU usage value
  const tableCpuUsage = parseFloat(
    (tableCpuText ?? "").replace(/[^0-9.]/g, "")
  );

  // Retrieve and parse the Chrome CPU usage
  const cpuText = await page.locator("#chrome-cpu").textContent();
  const chromeCpuUsage = parseFloat((cpuText ?? "").replace(/[^0-9.]/g, ""));

  // Compare the values
  expect(chromeCpuUsage).toBeLessThanOrEqual(tableCpuUsage);
});
