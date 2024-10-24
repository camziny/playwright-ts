import { test, expect } from "@playwright/test";

test("add and remove elements", async ({ page }) => {
  // Navigate to the-internet page
  await page.goto("https://the-internet.herokuapp.com/");

  // Click on the "Checkboxes" link to navigate to the checkboxes page
  await page.getByRole("link", { name: "Checkboxes" }).click();

  // Locate the first and second checkboxes
  const checkboxOne = page.locator('input[type="checkbox"]').nth(0);
  const checkboxTwo = page.locator('input[type="checkbox"]').nth(1);

  // Assert that checkbox 2 is checked and checkbox 1 is not
  await expect(checkboxTwo).toBeChecked();
  await expect(checkboxOne).not.toBeChecked();

  // Click checkbox 1 and checkbox 2
  await checkboxOne.click();
  await checkboxTwo.click();

  // Assert that checkbox 1 is checked and checkbox 2 is not
  await expect(checkboxOne).toBeChecked();
  await expect(checkboxTwo).not.toBeChecked();
});
