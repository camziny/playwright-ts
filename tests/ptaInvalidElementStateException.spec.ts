import { test, expect } from "@playwright/test";

test("verify text changed", async ({ page }) => {
  // Navigate to pta test exceptions page
  await page.goto(
    "https://practicetestautomation.com/practice-test-exceptions/"
  );
  // click add button
  await page.getByRole("button", { name: "Edit" }).click();

  // clear input field
  await page.locator("#row1 input").fill("");

  // assert that the text changed
  await expect(page.locator("#row1 input")).toHaveValue("");
});
