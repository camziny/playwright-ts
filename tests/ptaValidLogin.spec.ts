import { test, expect } from "@playwright/test";

test("valid login", async ({ page }) => {
  // Navigate to the-internet page
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // fill in username and password with invalid credentials
  await page.getByRole("textbox", { name: "username" }).fill("student");
  await page.getByRole("textbox", { name: "password" }).fill("Password123");

  // click submit
  await page.getByRole("button", { name: "Submit" }).click();

  // assert that the user successfully logged in
  await expect(page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/"
  );
  await expect(
    page.locator(".post-title").getByText("Logged In Successfully")
  ).toBeVisible();
});
