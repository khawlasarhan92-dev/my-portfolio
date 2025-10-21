# Portfolio (Summary)

Author: khawla sarhan

GitHub repository:  https://github.com/khawlasarhan92-dev/my-portfolio.git


Short and clear README for the portfolio project with the essential info only.

Main pages:
- Home: brief intro and services.
- Projects / Work: project pages (see `app/projects/*`).
- CV: curriculum vitae page (see `app/cv`).
- Contact: contact details / form.

Included projects:
- e-commerce-store (`projects/e-commerce-store`)
- kh-media-app (`projects/kh-media-app`)

CV details:
- `CV.md` exists in `public/` and is used on the CV page.
- To generate a PDF CV run: `npm run generate-cv` (runs `scripts/generate-cv-pdf.js`).

Run locally (PowerShell):

```powershell
cd 'C:\Users\DELL\Desktop\portfolio'
npm install
npm run dev
```

Build / Production:

```powershell
npm run build
npm start
```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
