import { test, expect } from "@playwright/test";

test("dynamic content changes", async ({ page }) => {
  // Navigate to the page
  await page.goto(
    "https://the-internet.herokuapp.com/dynamic_content?with_content=static"
  );

  // Get the initial content of the divs
  const initialContents = await page
    .locator("div.large-10.columns")
    .allTextContents();

  // Click the "click here" link
  await page.getByRole("link", { name: "click here" }).click();

  // Wait for a short moment to allow content to change
  await page.waitForTimeout(1000);

  // Get the content of the divs after the click
  const updatedContents = await page
    .locator("div.large-10.columns")
    .allTextContents();

  // Assert that at least one of the div's content has changed
  const hasChanged = initialContents.some(
    (content, index) => content !== updatedContents[index]
  );
  expect(hasChanged).toBeTruthy();
});
