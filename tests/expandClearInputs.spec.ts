import { test, expect } from "@playwright/test";

test("timeout exception", async ({ page }) => {
  // Navigate to expand testing web inputs page
  await page.goto("https://practice.expandtesting.com/inputs");

  // click on display inputs
  await page.getByRole("button", { name: "Display Inputs" }).click();

  // assert that inputs are visible
  await expect(page.locator("#output-number")).toBeVisible();
  await expect(page.locator("#output-text")).toBeVisible();
  await expect(page.locator("#output-password")).toBeVisible();
  await expect(page.locator("#output-date")).toBeVisible();

  // click on clear inputs
  await page.getByRole("button", { name: "Clear Inputs" }).click();

  // assert that inputs are no longer visible
  await expect(page.locator("#output-number")).toBeHidden();
  await expect(page.locator("#output-text")).toBeHidden();
  await expect(page.locator("#output-password")).toBeHidden();
  await expect(page.locator("#output-date")).toBeHidden();
});
