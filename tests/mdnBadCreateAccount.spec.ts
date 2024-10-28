import { test, expect } from "@playwright/test";

test("account creation with invalid username on Hacker News", async ({
  page,
}) => {
  // Go to Hacker News
  await page.goto("https://news.ycombinator.com/");

  // Navigate to login / create account page
  await page.getByRole("link", { name: "login" }).click();

  // Fill in invalid username and password and click create account
  await page
    .locator(`form:has-text('create account') [type="text"]`)
    .fill(`cameronziny@gmail.co`);
  await page
    .locator(`form:has-text('create account') [type="password"]`)
    .fill(`testpassword`);
  await page.getByRole("button", { name: "create account" }).click();

  // Wait briefly and check if the reload option is available, then click it if visible
  await page.waitForTimeout(1000);
  const reloadLocator = page.locator(`text="reload"`);
  if (await reloadLocator.isVisible()) {
    await reloadLocator.click();
  }

  // Assert that account creation fails with invalid username
  const errorMessage =
    "Email addresses are not valid usernames. Usernames can only contain letters, digits, dashes and underscores, and should be between 2 and 15 characters long. Please choose another.";
  await expect(page.locator(`body`)).toContainText(errorMessage);
});
