# From Sharon to Clement

A personal romantic appreciation experience built with Next.js App Router and React. The original wording and Sarawak Malay / Iban / English passages are preserved from `../data.txt`. Interface copy is English.

## Local preview

```sh
npm run dev -- --port 3000
```

## Verify and publish

```sh
npm run lint
npm run build
```

Select this `clement-site` folder as the Vercel project root, with the Next.js preset. The project also generates a static `out/` folder for static hosting. No database, environment variables, or backend are needed.

## Content and assets

- `app/content.ts`: Sharon's letter chapters, closing gratitude, captions, and song choice.
- `app/page.tsx`: opening hero, five letter chapters, polaroid photo carousel, four interactive blooming promises, and WhatsApp response triggers.
- `app/globals.css`: burgundy/ivory styling, responsive layout, reduced-motion support.
- `public/photos`: five customer photos (`memory-1.jpg` to `memory-5.jpg`). Captions follow the matching source file.
- `public/music`: `love-me-like-you-do.mp3` by Ellie Goulding.
- `public/art/letter-still-life.webp`: custom stationery and wax seal still life.
- `public/fonts`: locally stored Cormorant Garamond regular and italic fonts.
