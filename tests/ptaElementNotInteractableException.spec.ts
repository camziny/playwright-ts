import { test, expect } from "@playwright/test";

test("verify text saved in row 2", async ({ page }) => {
  // Navigate to pta test exceptions page
  await page.goto(
    "https://practicetestautomation.com/practice-test-exceptions/"
  );
  // click add button
  await page.getByRole("button", { name: "Add" }).click();

  // wait 5 seconds and verify that row 2 input field is displayed
  await page.waitForTimeout(5000);

  // fill the input in row 2 with text
  const row2Input = page.locator("#row2 input");
  await row2Input.fill("Chicken");

  // click Save
  await page.getByRole("button", { name: "Save" }).click();

  // assert that the input field in row 2 has the value "Chicken"
  await expect(row2Input).toHaveValue("Chicken");
});
