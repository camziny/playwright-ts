import { test, expect } from "@playwright/test";

test("timeout exception", async ({ page }) => {
  // Navigate to pta test exceptions page
  await page.goto(
    "https://practicetestautomation.com/practice-test-exceptions/"
  );

  // click add button
  await page.getByRole("button", { name: "Add" }).click();

  // wait for 3 seconds for the second input field to be displayed
  await page.waitForTimeout(3000);

  // verify second input field is displayed
  await expect(page.locator("#row2 input")).toBeVisible();
});
