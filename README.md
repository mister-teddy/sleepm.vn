# SleepM.vn

Vietnamese information website for SleepM Global Inc. built with Astro. The source, layout and deployment mechanism follow the legacy GitHub Pages site, with updated content for the current legal/contact requirements.

## Local development

```bash
npm install
npm run dev
```

Open:

- `http://localhost:4321/en/`
- `http://localhost:4321/vi/`

## Build and test

```bash
npm run build
npm run test:e2e
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`, which builds `dist/` and deploys it with GitHub Pages Actions. The custom domain is stored in `public/CNAME` as `sleepm.vn`.

This site is intentionally informational. It does not implement cart, checkout, prices, direct ordering, payment processing, or local ecommerce transaction flows in Vietnam.
