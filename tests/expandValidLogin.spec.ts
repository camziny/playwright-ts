import { test, expect } from "@playwright/test";

test("expand testing valid login", async ({ page }) => {
  // navigate to expand testing login page
  await page.goto("https://practice.expandtesting.com/login");

  // fill in username with valid credentials
  await page.getByRole("textbox", { name: "Username" }).fill("practice");

  // fill in password with valid password
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("SuperSecretPassword!");

  // click login
  await page.getByRole("button", { name: "Login" }).click();

  // assert that the success message is displayed
  await expect(page.locator("#flash")).toContainText(
    "You logged into a secure area!"
  );
});
