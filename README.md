# Naruto Sitanggang Portfolio

Next.js App Router portfolio built with TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project screenshots

Project showcase visuals are labelled placeholders, not screenshots from the projects. To replace one, place the image in `public/projects/`, then set that project's `image` property in `app/data.ts`, for example:

```ts
image: '/projects/silog-portal.png',
```

The project layout, title, and alt text are configured in the same data entry.

## CV

The downloadable PDF is `public/naruto-sitanggang-cv.pdf`. Its editable source is `scripts/generate_cv.py`; run it with Python and ReportLab to regenerate the PDF after updating its content.
