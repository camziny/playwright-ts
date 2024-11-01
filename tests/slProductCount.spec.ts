import { test, expect } from "@playwright/test";

test("verify product count in shopping cart", async ({ page }) => {
  // Navigate to Swag Labs
  await page.goto("https://www.saucedemo.com/");

  // Log in with valid credentials
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Assert that there are 6 products
  const product = page.locator(`[data-test="inventory-item"]`);
  await expect(product).toHaveCount(6);
});
