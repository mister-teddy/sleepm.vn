# Sleepm.vn

Vietnamese and English static Sleepm site built with Astro.

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
