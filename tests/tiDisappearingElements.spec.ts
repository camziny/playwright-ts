import { test, expect } from "@playwright/test";

test("disappearing elements", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

  // Locate all buttons in the list
  const buttons = page.locator("ul > li > a");
  const buttonCount = await buttons.count();

  console.log(`Number of buttons found: ${buttonCount}`);

  expect(buttonCount).toBeGreaterThanOrEqual(1);

  const homeButton = page.getByRole("link", { name: "Home" });
  const aboutButton = page.getByRole("link", { name: "About" });
  const contactButton = page.getByRole("link", { name: "Contact Us" });
  const portfolioButton = page.getByRole("link", { name: "Portfolio" });
  const galleryButton = page.getByRole("link", { name: "Gallery" });

  // Check visibility of each button
  console.log("Checking button visibility...");
  if (await homeButton.isVisible()) console.log("Home button is visible");
  if (await aboutButton.isVisible()) console.log("About button is visible");
  if (await contactButton.isVisible()) console.log("Contact button is visible");
  if (await portfolioButton.isVisible())
    console.log("Portfolio button is visible");
  if (await galleryButton.isVisible()) {
    console.log("About button is visible");
  } else {
    console.log("Gallery button is NOT visible");
  }
});
