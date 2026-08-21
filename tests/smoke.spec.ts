import { expect, test } from "@playwright/test";

test("English home keeps legacy layout with new positioning", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.getByRole("heading", { name: /Sleep better\. Live better/i })).toBeVisible();
  await expect(page.getByText(/does not show prices/i).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Legal FAQ/i }).first()).toBeVisible();
});

test("Root defaults to Vietnamese", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/vi\/$/);
  await expect(page.getByRole("heading", { name: /Sleep better\. Live better/i })).toBeVisible();
});

test("Vietnamese home renders updated navigation and no-commerce copy", async ({ page }) => {
  await page.goto("/vi/");
  await expect(page.getByRole("link", { name: /Sản phẩm/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /FAQ pháp lý/i }).first()).toBeVisible();
  await expect(page.getByText(/không tạo giỏ hàng/i).first()).toBeVisible();
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
  await expect(page.getByRole("link", { name: /Request information/i }).first()).toBeVisible();
});

test("Contact page shows Vietnamese information contact without Vietnam office claim", async ({ page }) => {
  await page.goto("/vi/contact/");
  await expect(page.getByText(/Đầu mối tiếp nhận thông tin tiếng Việt/i)).toBeVisible();
  await expect(page.getByText(/0933 993 739/i)).toBeVisible();
  await expect(page.getByText(/không phải văn phòng đại diện pháp lý/i)).toBeVisible();
  await expect(page.getByText(/Diamond Plaza/i)).toHaveCount(0);
});
