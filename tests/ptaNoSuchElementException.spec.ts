import { test, expect } from "@playwright/test";

test("verify row 2 input", async ({ page }) => {
  // Navigate to pta test exceptions page
  await page.goto(
    "https://practicetestautomation.com/practice-test-exceptions/"
  );
  // click add button
  await page.getByRole("button", { name: "Add" }).click();

  // wait 5 seconds and verify that row 2 input field is displayed
  await page.waitForTimeout(5000);
  await expect(page.locator("#row2 input")).toBeVisible();
});
