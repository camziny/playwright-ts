import { test, expect } from "@playwright/test";

test("expand testing invalid username", async ({ page }) => {
  // navigate to expand testing login page
  await page.goto("https://practice.expandtesting.com/login");

  // fill in username with invalid credentials
  await page.getByRole("textbox", { name: "Username" }).fill("adsda");

  // fill in password with valid password
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("SuperSecretPassword!");

  // click login
  await page.getByRole("button", { name: "Login" }).click();

  // assert that invalid username message is displayed
  await expect(page.locator("#flash")).toContainText(
    "Your username is invalid!"
  );
});
