import { expect, test } from "@playwright/test";

test("English home renders primary clone sections", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.getByRole("heading", { name: /most rested place/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /BioCrystal Mattress/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /The Family/i }).first()).toBeVisible();
});

test("Vietnamese home renders localized navigation and copy", async ({ page }) => {
  await page.goto("/vi/");
  await expect(page.getByRole("heading", { name: /Nơi an yên nhất/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Sản phẩm/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Nhà phân phối/i }).first()).toBeVisible();
});

test("Product detail keeps static SSG content available", async ({ page }) => {
  await page.goto("/en/products/mattress/");
  await expect(page.getByRole("heading", { name: /The bed the night/i })).toBeVisible();
  await expect(page.getByText(/GREENGUARD Gold/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /Ask the family/i }).first()).toBeVisible();
});
