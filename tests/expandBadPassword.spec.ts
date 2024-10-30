import { test, expect } from "@playwright/test";

test("expand testing invalid password", async ({ page }) => {
  // navigate to expand testing login page
  await page.goto("https://practice.expandtesting.com/login");

  // fill in username with valid credentials
  await page.getByRole("textbox", { name: "Username" }).fill("practice");

  // fill in password with invalid password
  await page.getByRole("textbox", { name: "Password" }).fill("asdasd");

  // click login
  await page.getByRole("button", { name: "Login" }).click();

  // assert that invalid password message is displayed
  await expect(page.locator("#flash")).toContainText(
    "Your password is invalid!"
  );
});
