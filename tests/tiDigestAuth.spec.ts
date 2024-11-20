import { test, expect } from "@playwright/test";

test("context menu", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/context_menu");

  // Wait for the #hot-spot element to be visible
  const hotSpot = page.locator("#hot-spot");
  await hotSpot.waitFor({ state: "visible" });

  // Right-click the box
  await hotSpot.click({ button: "right" });

  // Add a listener for the alert dialog
  page.on("dialog", async (dialog) => {
    // Validate the alert text
    expect(dialog.message()).toBe("You selected a context menu");
    // Accept the alert
    await dialog.accept();
  });
});
