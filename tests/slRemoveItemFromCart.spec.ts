import { test, expect } from "@playwright/test";

test("verify product descriptions", async ({ page }) => {
  // Navigate to Swag Labs
  await page.goto("https://www.saucedemo.com/");

  // log in with valid credentials
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // add sauce labs bolt t-shirt to the cart
  await page
    .locator(`[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]`)
    .click();

  // assert that the correct item was added to the cart
  await page
    .locator(`[data-test="primary-header"] [data-test="shopping-cart-link"]`)
    .click();
  await expect(
    page.locator(
      `[data-test="cart-contents-container"] [data-test="item-1-title-link"]`
    )
  ).toHaveText(`Sauce Labs Bolt T-Shirt`);
  await expect(
    page.locator(
      `[data-test="cart-contents-container"] [data-test="item-1-title-link"]`
    )
  ).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Remove" })).toBeVisible();

  // click the remove button
  await page.getByRole("button", { name: "Remove" }).click();

  // assert that the item is no longer in the cart
  await expect(
    page.locator(
      `[data-test="cart-contents-container"] [data-test="item-1-title-link"]`
    )
  ).toHaveCount(0);
});
