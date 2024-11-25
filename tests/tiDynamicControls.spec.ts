import { test, expect } from "@playwright/test";

test("add, remove, enable, and disable controls", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

  // Locators for elements
  const removeButton = page.getByRole("button", { name: "Remove" });
  const addButton = page.getByRole("button", { name: "Add" });
  const enableButton = page.getByRole("button", { name: "Enable" });
  const disableButton = page.getByRole("button", { name: "Disable" });
  const message = page.locator("#message");

  // Test removing the checkbox
  await removeButton.click();
  await expect(message).toContainText("It's gone!");

  // Test adding the checkbox
  await addButton.click();
  await expect(message).toContainText("It's back!");

  // Test enabling the input field
  await enableButton.click();
  await expect(message).toContainText("It's enabled!");

  // Test disabling the input field
  await disableButton.click();
  await expect(message).toContainText("It's disabled!");
});
