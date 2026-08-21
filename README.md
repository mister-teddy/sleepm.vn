# SleepM.vn

Website thông tin tiếng Việt cho SleepM Global Inc., build bằng Astro và deploy qua GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open:

- `http://localhost:4321/`
- `http://localhost:4321/vi/`

## Build and test

```bash
npm run build
npm run test:e2e
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`, which builds `dist/` and deploys it with GitHub Pages Actions. The custom domain is stored in `public/CNAME` as `sleepm.vn`.

Website được định hướng là cổng thông tin. Site không triển khai giỏ hàng, thanh toán, giá bán, đặt hàng trực tiếp hoặc luồng giao dịch thương mại điện tử nội địa.
