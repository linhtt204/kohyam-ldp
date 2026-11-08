# Koh Yam · Ưu đãi tháng 11

Landing page for Koh Yam's November 2026 offers, built with Next.js from the Claude Design handoff in `koh-yam-u-i-th-ng-11/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also: npm start, npm run lint, npm run typecheck)
```

The build downloads Montserrat through `next/font/google`, so it needs network access.

## Where things live

| Path | What |
| --- | --- |
| `src/data/promotions.ts` | **All offers, islands, FAQs and contact details. Edit content here.** |
| `src/app/page.tsx`, `page.module.css` | Page layout and styles |
| `src/components/OffersAndCalendar.tsx` | The interactive part: category filter and calendar |
| `src/components/brand.tsx` | Design system components (Logo, CTAButton, Postmark, ...) |
| `src/styles/design-system/` | Design system tokens and `ky-*` classes, copied from the handoff |
| `public/assets/` | Logos, pattern, photos |

## Before launch

Replace the placeholders in `CONTACT` in `src/data/promotions.ts`: the booking link and the hotline number.

## Notes

- The calendar highlights today using Vietnam time. Outside November 2026 it has no "today" and opens on 01/11.
- The page assumes one campaign month. Reusing it for another month means updating `CAMPAIGN`, the first-weekday logic in `dayOfWeek`, and the month text in the copy.
