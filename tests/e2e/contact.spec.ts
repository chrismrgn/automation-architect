import { test, expect } from "@playwright/test";

test.describe("Contact page — form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("contact form renders with all fields", async ({ page }) => {
    await expect(page.getByLabel(/Name/)).toBeVisible();
    await expect(page.getByLabel(/Email/)).toBeVisible();
    await expect(page.getByLabel(/Company/)).toBeVisible();
    await expect(page.getByLabel(/Team Size/)).toBeVisible();
    await expect(page.getByLabel(/Biggest Challenge/)).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Send Message/i })
    ).toBeVisible();
  });

  test("empty form submission is prevented by HTML5 required validation", async ({
    page,
  }) => {
    // Click submit without filling anything
    await page.getByRole("button", { name: /Send Message/i }).click();

    // The success message should NOT appear since required fields are empty
    await expect(
      page.getByText("Thanks! We'll be in touch within 24 hours.")
    ).not.toBeVisible();

    // The form should still be visible (not replaced by success state)
    await expect(page.getByLabel(/Name/)).toBeVisible();
  });

  test("fill in all fields and submit shows success message", async ({
    page,
  }) => {
    await page.getByLabel(/Name/).fill("Jane Doe");
    await page.getByLabel(/Email/).fill("jane@example.com");
    await page.getByLabel(/Company/).fill("Acme Corp");
    await page.getByLabel(/Team Size/).selectOption("6-15");
    await page
      .getByLabel(/Biggest Challenge/)
      .fill("Manual reporting takes too long");

    await page.getByRole("button", { name: /Send Message/i }).click();

    await expect(
      page.getByText("Thanks! We'll be in touch within 24 hours.")
    ).toBeVisible();
  });
});

test.describe("Contact page — FAQ", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("FAQ items expand and collapse on click", async ({ page }) => {
    // The first FAQ question
    const firstQuestion = page.getByRole("button", {
      name: /Is the audit really free/i,
    });
    await expect(firstQuestion).toBeVisible();

    // The answer text
    const answerText = page.getByText(/No credit card, no commitment/i);

    // Initially, the answer should not be visible (collapsed via grid-rows-[0fr] + opacity-0)
    await expect(answerText).not.toBeVisible();

    // Click to expand
    await firstQuestion.click();
    await expect(answerText).toBeVisible();

    // Click again to collapse
    await firstQuestion.click();
    await expect(answerText).not.toBeVisible();
  });

  test("clicking a different FAQ item expands it and collapses the previous one", async ({
    page,
  }) => {
    const firstQuestion = page.getByRole("button", {
      name: /Is the audit really free/i,
    });
    const secondQuestion = page.getByRole("button", {
      name: /How should I prepare/i,
    });

    const firstAnswer = page.getByText(/No credit card, no commitment/i);
    const secondAnswer = page.getByText(
      /No prep needed. Just show up/i
    );

    // Expand first
    await firstQuestion.click();
    await expect(firstAnswer).toBeVisible();

    // Click second — first should collapse, second should expand
    await secondQuestion.click();
    await expect(secondAnswer).toBeVisible();
    await expect(firstAnswer).not.toBeVisible();
  });
});
