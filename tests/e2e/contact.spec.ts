import { test, expect } from "@playwright/test";

test.describe("Contact page — form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("contact form renders with all fields", async ({ page }) => {
    // Use locator by id since labels have asterisk spans that confuse getByLabel
    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#company")).toBeVisible();
    await expect(page.locator("#teamSize")).toBeVisible();
    await expect(page.locator("#challenge")).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Send Message/i })
    ).toBeVisible();
  });

  test("empty form submission is prevented — success message does not appear", async ({
    page,
  }) => {
    // Click submit without filling required fields
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Form uses HTML5 required validation — success message should NOT appear
    await expect(
      page.getByText(/Thanks! We'll be in touch/i)
    ).not.toBeVisible();

    // Required field should still be present
    await expect(page.locator("#name")).toBeVisible();
  });

  test("fill in all fields and submit shows success message", async ({
    page,
  }) => {
    await page.locator("#name").fill("Jane Doe");
    await page.locator("#email").fill("jane@example.com");
    await page.locator("#company").fill("Acme Corp");
    await page.locator("#teamSize").selectOption("6-15");
    await page.locator("#challenge").fill("Manual reporting takes too long");

    await page.getByRole("button", { name: /Send Message/i }).click();

    await expect(
      page.getByText(/Thanks! We'll be in touch within 24 hours/i)
    ).toBeVisible();
  });

  test("contact page has a heading", async ({ page }) => {
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
  });
});
