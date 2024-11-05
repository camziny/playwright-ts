import { test, expect } from "@playwright/test";

test("check prices on sauce labs", async ({ page }) => {
  // Navigate to Swag Labs
  await page.goto("https://www.saucedemo.com/");

  // fill in username and password with valid credentials and log in
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // assert that each product has the correct price
  await expect(
    page
      .locator(
        `[data-test="inventory-container"] [data-test="inventory-item-price"]`
      )
      .nth(0)
  ).toHaveText(`$29.99`);
  await expect(
    page
      .locator(
        `[data-test="inventory-container"] [data-test="inventory-item-price"]`
      )
      .nth(1)
  ).toHaveText(`$9.99`);
  await expect(
    page
      .locator(
        `[data-test="inventory-container"] [data-test="inventory-item-price"]`
      )
      .nth(2)
  ).toHaveText(`$15.99`);
  await expect(
    page
      .locator(
        `[data-test="inventory-container"] [data-test="inventory-item-price"]`
      )
      .nth(3)
  ).toHaveText(`$49.99`);
  await expect(
    page
      .locator(
        `[data-test="inventory-container"] [data-test="inventory-item-price"]`
      )
      .nth(4)
  ).toHaveText(`$7.99`);
  await expect(
    page
      .locator(
        `[data-test="inventory-container"] [data-test="inventory-item-price"]`
      )
      .nth(5)
  ).toHaveText(`$15.99`);
});
