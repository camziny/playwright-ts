import { test, expect } from "@playwright/test";

test("test broken images", async ({ page }) => {
  // Navigate to the-internet page
  await page.goto("https://the-internet.herokuapp.com/broken_images");

  // Select all images on the page
  const images = await page.locator("img").elementHandles();

  console.log(`Found ${images.length} images on the page.`);

  for (const image of images) {
    const imageSrc = await image.getAttribute("src");
    const naturalWidth = await image.evaluate(
      (img: HTMLImageElement) => img.naturalWidth
    );
    const naturalHeight = await image.evaluate(
      (img: HTMLImageElement) => img.naturalHeight
    );

    if (naturalWidth > 0 && naturalHeight > 0) {
      // Log and assert for working images
      console.log(`Working image: ${imageSrc}`);
      expect(naturalWidth).toBeGreaterThan(0);
      expect(naturalHeight).toBeGreaterThan(0);
    } else {
      // Log and assert for broken images
      console.log(`Broken image: ${imageSrc}`);
      expect(naturalWidth).toBe(0);
      expect(naturalHeight).toBe(0);
    }
  }
});
