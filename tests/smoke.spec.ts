import { expect, test } from "@playwright/test";

test("Vietnamese information home renders the primary positioning", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /SleepM - Thông tin dành cho khách hàng Việt Nam/i })).toBeVisible();
  await expect(page.getByText(/không phải cửa hàng trực tuyến/i).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Truy cập sleepm.com/i })).toBeVisible();
});

test("Site does not expose ecommerce actions", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Không giỏ hàng/i)).toBeVisible();
  await expect(page.getByText(/Không thanh toán/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /Đặt hàng|Thanh toán|Mua ngay/i })).toHaveCount(0);
});

test("Product and contact information are visible without checkout", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Tìm hiểu hệ sản phẩm SleepM/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Nệm BioCrystal", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Kênh thông tin minh bạch/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "info@sleepm.com" }).first()).toBeVisible();
});

test("Mobile menu covers the viewport width", async ({ page }) => {
  await page.setViewportSize({ width: 546, height: 808 });
  await page.goto("/");
  await page.getByRole("button", { name: /Mở menu/i }).click();
  const box = await page.locator("[data-mobile-panel]").boundingBox();
  expect(box?.x).toBe(0);
  expect(Math.round(box?.width ?? 0)).toBe(546);
  await expect(page.getByLabel("Điều hướng mobile").getByRole("link", { name: "Sản phẩm" })).toBeVisible();
});

test("Old Vietnamese product URL redirects to the product section", async ({ page }) => {
  await page.goto("/vi/products/");
  await page.waitForURL(/#san-pham/);
  await expect(page.getByRole("heading", { name: /Tìm hiểu hệ sản phẩm SleepM/i })).toBeVisible();
});
