import { expect, test } from "@playwright/test";

test("English home keeps legacy layout with new positioning", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.getByRole("heading", { name: /Premium natural mattress with 16 BioCrystal types/i })).toBeVisible();
  await expect(page.getByText(/WordPress backup/i).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Redefining the sleep standard/i }).first()).toBeVisible();
});

test("Root defaults to Vietnamese", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/vi\/$/);
  await expect(page.getByRole("heading", { name: /Nệm thủ công hữu cơ tự nhiên cao cấp/i })).toBeVisible();
});

test("Vietnamese home renders updated navigation and no-commerce copy", async ({ page }) => {
  await page.goto("/vi/");
  await expect(page.getByRole("link", { name: /Products/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Biocrystals/i }).first()).toBeVisible();
  await expect(page.getByText(/không có giỏ hàng/i).first()).toBeVisible();
});

test("Mobile menu covers the viewport width", async ({ page }) => {
  await page.setViewportSize({ width: 546, height: 808 });
  await page.goto("/vi/products/");
  await page.getByRole("button", { name: /menu/i }).click();
  const box = await page.locator("[data-mobile-menu]").boundingBox();
  expect(box?.x).toBe(0);
  expect(Math.round(box?.width ?? 0)).toBe(546);
  await expect(page.locator("[data-mobile-menu]").getByRole("link", { name: "Home", exact: true })).toBeVisible();
});

test("Product detail keeps static SSG content available", async ({ page }) => {
  await page.goto("/en/products/mattress/");
  await expect(page.getByRole("heading", { name: /Premium natural mattress with 16 BioCrystal types/i })).toBeVisible();
  await expect(page.getByText(/Made in USA and Canada/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /Request information/i }).first()).toBeVisible();
});

test("Contact page shows backup contact with legal caveat", async ({ page }) => {
  await page.goto("/vi/contact/");
  await expect(page.getByText(/Đầu mối tiếp nhận thông tin tiếng Việt/i)).toBeVisible();
  await expect(page.getByText(/0933 993 739/i)).toBeVisible();
  await expect(page.getByText(/Diamond Plaza/i).first()).toBeVisible();
  await expect(page.getByText(/không phải văn phòng đại diện pháp lý/i)).toBeVisible();
});
