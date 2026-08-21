import { expect, test } from "@playwright/test";

test("English home renders primary clone sections", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.getByRole("heading", { name: /Sleep Better, Live Better/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /BioCrystal Mattress/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /About/i }).first()).toBeVisible();
});

test("Root defaults to Vietnamese", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/vi\/$/);
  await expect(page.getByRole("heading", { name: /Ngủ ngon hơn, sống tốt hơn/i })).toBeVisible();
});

test("Vietnamese home renders localized navigation and copy", async ({ page }) => {
  await page.goto("/vi/");
  await expect(page.getByRole("heading", { name: /Ngủ ngon hơn, sống tốt hơn/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Sản phẩm/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Nhà phân phối/i }).first()).toBeVisible();
});

test("Mobile menu covers the viewport width", async ({ page }) => {
  await page.setViewportSize({ width: 546, height: 808 });
  await page.goto("/vi/products/");
  await page.getByRole("button", { name: /menu/i }).click();
  const box = await page.locator("[data-mobile-menu]").boundingBox();
  expect(box?.x).toBe(0);
  expect(Math.round(box?.width ?? 0)).toBe(546);
  await expect(page.getByRole("link", { name: "Trang chủ" })).toBeVisible();
});

test("Product detail keeps static SSG content available", async ({ page }) => {
  await page.goto("/en/products/mattress/");
  await expect(page.getByRole("heading", { name: /Improve wellness through better sleep/i })).toBeVisible();
  await expect(page.getByAltText(/GREENGUARD Gold/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /Contact Sleepm/i }).first()).toBeVisible();
});
