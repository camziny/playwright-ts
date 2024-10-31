import { test, expect } from "@playwright/test";

test("notification message", async ({ page }) => {
  // Navigate to expand testing notification message page
  await page.goto(
    "https://practice.expandtesting.com/notification-message-rendered"
  );

  // Click on the notification link
  await page.getByRole("link", { name: "Click here" }).click();

  // Wait for any element that contains the text to appear
  const notification = page.locator(
    ":text('Action successful'), :text('Action unsuccessful')"
  );
  await expect(notification).toBeVisible({ timeout: 10000 });

  // Assert that the notification text is either of the expected options
  await expect(notification).toContainText(
    /Action (un)?successful(, please try again)?/
  );
});
