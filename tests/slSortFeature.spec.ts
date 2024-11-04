import { test, expect } from "@playwright/test";

test("verify product count in shopping cart", async ({ page }) => {
  // Navigate to Swag Labs
  await page.goto("https://www.saucedemo.com/");

  // log in with valid credentials
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // select Name (A to Z)
  await page.getByRole("combobox", { name: "" }).selectOption("Name (A to Z)");

  // select Name (Z to A)
  await page.getByRole("combobox", { name: "" }).selectOption("Name (Z to A)");

  // select Price (low to high)
  await page
    .getByRole("combobox", { name: "" })
    .selectOption("Price (low to high)");

  // select Price (high to low)
  await page
    .getByRole("combobox", { name: "" })
    .selectOption("Price (high to low)");
});
