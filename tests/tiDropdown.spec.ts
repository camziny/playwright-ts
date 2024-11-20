import { test, expect } from "@playwright/test";

test("dropdown menu", async ({ page }) => {
  // navigate to the page
  await page.goto("https://the-internet.herokuapp.com/dropdown");

  // select option 1
  await page.locator("#dropdown").selectOption("1");

  // assert the selected option is "Option 1"
  const selectedOption = await page
    .locator("#dropdown > option[selected]")
    .textContent();
  expect(selectedOption?.trim()).toBe("Option 1");

  // select "Option 2"
  await page.locator("#dropdown").selectOption("2");

  // assert the selected option is "Option 2"
  const selectedOptionTwo = await page
    .locator("#dropdown > option[selected]")
    .textContent();
  expect(selectedOptionTwo?.trim()).toBe("Option 2");

  // assert the selected option ie either "Option 1" or "Option 2"
  const selectedValue = await page.locator("#dropdown").inputValue();
  expect(["1", "2"]).toContain(selectedValue);
});
