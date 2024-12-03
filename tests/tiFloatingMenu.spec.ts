import { test, expect } from "@playwright/test";

test("floating menu", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/floating_menu");

  const home = page.locator('a:has-text("Home")');
  const news = page.locator('a:has-text("News")');
  const contact = page.locator('a:has-text("Contact")');

  // Scroll down the page
  await page.evaluate(() => window.scrollBy(0, 500));

  // Assert that 'Home', 'News', and 'Contact' links are still visible
  await expect(home).toBeVisible();
  await expect(news).toBeVisible();
  await expect(contact).toBeVisible();
});
