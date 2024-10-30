import { test, expect } from "@playwright/test";

test("verify instruction text element is no longer displayed", async ({
  page,
}) => {
  // Navigate to pta test exceptions page
  await page.goto(
    "https://practicetestautomation.com/practice-test-exceptions/"
  );

  // verify that instructions are visible
  const instructions = page.locator(
    'p:has-text("Push “Add” button to add another row")'
  );
  await expect(instructions).toBeVisible();
  // click add button
  await page.getByRole("button", { name: "Add" }).click();

  // assert that instructions are no longer visible
  await expect(instructions).toBeHidden();
});
