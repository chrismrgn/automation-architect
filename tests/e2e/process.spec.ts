import { test, expect } from "@playwright/test";

test.describe("Process page — Before/After tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/process");
  });

  test("Before/After section renders with all 3 tabs", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "Lead Follow-Up" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Invoice Processing" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Weekly Reporting" })
    ).toBeVisible();
  });

  test("Lead Follow-Up tab is active by default and shows its content", async ({
    page,
  }) => {
    // Default tab content should be visible
    await expect(page.getByText("Sales rep gets notified (maybe)")).toBeVisible();
    await expect(page.getByText("45 min/lead")).toBeVisible();
    await expect(page.getByText("Personalized follow-up in <5 min")).toBeVisible();
  });

  test("clicking Invoice Processing tab changes the displayed content", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Invoice Processing" })
      .click();

    // Invoice Processing content should be visible
    await expect(page.getByText("PM emails finance")).toBeVisible();
    await expect(page.getByText("2 hrs/invoice")).toBeVisible();
    await expect(page.getByText("Invoice auto-generated")).toBeVisible();

    // Lead Follow-Up content should no longer be visible
    await expect(
      page.getByText("Sales rep gets notified (maybe)")
    ).not.toBeVisible();
  });

  test("clicking Weekly Reporting tab changes the displayed content", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Weekly Reporting" })
      .click();

    // Weekly Reporting content should be visible
    await expect(
      page.getByText("Pull data from 4+ tools")
    ).toBeVisible();
    await expect(page.getByText("3-4 hrs/week")).toBeVisible();
    await expect(
      page.getByText("KPI dashboard updated")
    ).toBeVisible();

    // Lead Follow-Up content should not be visible
    await expect(
      page.getByText("Sales rep gets notified (maybe)")
    ).not.toBeVisible();
  });

  test("switching between all 3 tabs shows different workflow content", async ({
    page,
  }) => {
    // Start on Lead Follow-Up (default)
    await expect(page.getByText("45 min/lead")).toBeVisible();

    // Switch to Invoice Processing
    await page
      .getByRole("button", { name: "Invoice Processing" })
      .click();
    await expect(page.getByText("2 hrs/invoice")).toBeVisible();
    await expect(page.getByText("45 min/lead")).not.toBeVisible();

    // Switch to Weekly Reporting
    await page
      .getByRole("button", { name: "Weekly Reporting" })
      .click();
    await expect(page.getByText("3-4 hrs/week")).toBeVisible();
    await expect(page.getByText("2 hrs/invoice")).not.toBeVisible();

    // Switch back to Lead Follow-Up
    await page
      .getByRole("button", { name: "Lead Follow-Up" })
      .click();
    await expect(page.getByText("45 min/lead")).toBeVisible();
    await expect(page.getByText("3-4 hrs/week")).not.toBeVisible();
  });
});
