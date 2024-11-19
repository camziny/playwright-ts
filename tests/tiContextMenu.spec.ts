import { test, expect } from "@playwright/test";

test("context menu", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/context_menu");

  // Add a listener for the alert dialog
  page.on("dialog", async (dialog) => {
    // Assert the alert message
    expect(dialog.message()).toBe("You selected a context menu");
    // Accept the alert
    await dialog.accept();
  });

  // Right-click the box
  await page.locator("#hot-spot").click({ button: "right" });
});
