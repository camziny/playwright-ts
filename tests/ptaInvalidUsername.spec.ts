import { test, expect } from "@playwright/test";

test("invalid username", async ({ page }) => {
  // Navigate to the-internet page
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // fill in username and password with invalid credentials
  await page.getByRole("textbox", { name: "username" }).fill("dsadfds");
  await page.getByRole("textbox", { name: "password" }).fill("Password123");

  // click submit
  await page.getByRole("button", { name: "Submit" }).click();

  // assert that the credentials were invalid
  await expect(
    page.locator("#error").getByText("Your username is invalid!")
  ).toBeVisible();
});
