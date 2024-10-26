import { test, expect } from "@playwright/test";

test("search term with 0 results on MDN", async ({ page, context }) => {
  // Go to MDN website
  await page.goto("https://developer.mozilla.org/en-US/");

  const searchTerm = "fdsDfdg4g2";

  // Search for a term that will yield 0 results
  await page.locator("#top-nav-search-input").fill(searchTerm);
  await page.locator('#top-nav-search-form [type="submit"]').click();

  // Verify that the correct search was performed
  await expect(
    page.locator(`text=Search results for: ${searchTerm}`)
  ).toHaveText(`Search results for: ${searchTerm}`);

  // Assert that 0 matches were found using a regular expression
  const searchResultsLocator = page.locator('p:has-text("Found 0 matches in")');
  await expect(searchResultsLocator).toBeVisible();
  const searchResultsText = await searchResultsLocator.innerText();
  const regex = /Found 0 matches in \d+ milliseconds\./;
  expect(searchResultsText).toMatch(regex);
});
