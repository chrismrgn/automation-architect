import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", name: "Homepage" },
  { path: "/services", name: "Services" },
  { path: "/process", name: "Process" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

test.describe("Smoke tests — every page loads", () => {
  for (const route of routes) {
    test.describe(route.name, () => {
      test(`${route.path} returns 200`, async ({ page }) => {
        const response = await page.goto(route.path);
        expect(response?.status()).toBe(200);
      });

      test(`${route.path} has a visible h1`, async ({ page }) => {
        await page.goto(route.path);
        const h1 = page.locator("h1").first();
        await expect(h1).toBeVisible();
      });

      test(`${route.path} has the nav bar visible`, async ({ page }) => {
        await page.goto(route.path);
        const nav = page.locator("header").first();
        await expect(nav).toBeVisible();
      });

      test(`${route.path} has the footer visible`, async ({ page }) => {
        await page.goto(route.path);
        const footer = page.locator("footer").first();
        await expect(footer).toBeVisible();
      });
    });
  }
});
