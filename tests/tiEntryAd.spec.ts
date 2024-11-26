import { test, expect } from "@playwright/test";

test("entry ad", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/entry_ad");

  // close modal
  await page.locator('p:has-text("Close")').click();

  // re enable the modal
  await page.locator('a:has-text("click here")').click();

  // assert that modal text is shown
  expect(
    page.locator(
      'p:has-text("It\'s commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker")'
    )
  ).toBeVisible();
});
