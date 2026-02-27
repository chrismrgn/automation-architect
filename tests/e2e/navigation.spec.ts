import { test, expect } from "@playwright/test";

test.describe("Navigation — nav links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("clicking Services in nav navigates to /services", async ({ page }) => {
    await page.getByRole("link", { name: "Services" }).first().click();
    await expect(page).toHaveURL("/services");
  });

  test("clicking Process in nav navigates to /process", async ({ page }) => {
    await page.getByRole("link", { name: "Process" }).first().click();
    await expect(page).toHaveURL("/process");
  });

  test("clicking About in nav navigates to /about", async ({ page }) => {
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL("/about");
  });

  test("clicking Book Free Audit CTA in nav navigates to /contact", async ({
    page,
  }) => {
    await page
      .getByRole("link", { name: /Book Free Audit/i })
      .first()
      .click();
    await expect(page).toHaveURL("/contact");
  });

  test("clicking logo navigates to /", async ({ page }) => {
    // First navigate away from home so we can verify the logo brings us back
    await page.goto("/services");
    await expect(page).toHaveURL("/services");

    // The logo is a link with text "AutomationArchitects"
    await page
      .getByRole("link", { name: /AutomationArchitects/i })
      .first()
      .click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("Navigation — footer links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("clicking Services in footer navigates to /services", async ({
    page,
  }) => {
    const footer = page.locator("footer");
    await footer.getByRole("link", { name: "Services" }).click();
    await expect(page).toHaveURL("/services");
  });

  test("clicking Contact in footer navigates to /contact", async ({
    page,
  }) => {
    const footer = page.locator("footer");
    await footer.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact");
  });
});
