# Koh Yam Design System

**Bếp Thái Koh Yam — Thai Kitchen & Dessert.** A Hanoi / HCMC Thai restaurant chain since 2014, seasoned for Vietnamese palates. Tagline: **“Yam cho vừa, ăn cho vui.”**
*Koh* = island, *Yam* = toss & season "just right". The chain is an archipelago; every restaurant is an island. The system is built on that idea: **70% shared across the archipelago, 30% per island.**

## Sources
- Local folder `Koh Yam - Branding/` (attached, read-only):
  - `Koh-Yam-Design-System/` — prior brand book (`README.md`, Vietnamese), `tokens.css/json`, 13 component previews + `components/bundle.css`, fonts, assets. **Primary source of truth** for every value here.
  - `Colors/`, `Logo/` (PDF/AI, PNG/JPG lockups), `Graphic Elements/` (AI/PDF patterns, illustration), `Pattern - png/`, `Fonts/`, `kohyam_guideline_id.pdf` (Visual Guideline 2021, Studio Cohe). PDFs/AI were not parsed; their colours/logos are already reflected in the DS folder.
- No website, app, menu or slide source was provided.

## Architecture — 3 layers
| Layer | Contains | Tokens | Used on |
|---|---|---|---|
| **1 · Nhà Koh** (core, 70%) | logo, fonts, cream paper, brown ink, Koh green, chair pink, Koh gold, stamp frame, patterns, voice | `--surface`, `--ink`, `--brand`, `--cta`, `--koh-*` | everything chain-wide |
| **2 · Đảo** (island, 30%) | 1 main + 1 alt colour, island name, passport stamp | `--island-<slug>`, `-alt`, `-on`, `-ink`; scope with `data-island="<slug>"` | facades, branch posts, stamps, location tags |
| **3 · Mùa** (season, time-boxed) | colour alias + 1–2 seasonal motifs | `--campaign-*` | Trung thu, Songkran, birthday, Tết |

An upper layer never replaces a lower one: a Trung thu post still uses Nhà Koh logo, fonts, frame, CTA.

## CONTENT FUNDAMENTALS
- **Language:** Vietnamese first, sprinkled with Thai words — *sawasdee, aroi, khob khun*. English only in a few fixed lines ("Summer taste", "Comment post").
- **Person:** the brand speaks as **“Koh”**; the guest is **“bạn”** or **“cả nhà”**. Mascot **Sanuk** speaks as "Sanuk" (Zalo OA, passport, kids) — catchphrase “Sanuk ghê!”.
- **Tone:** warm, playful, a little cheeky, *very sure about flavour*. Short sentences with concrete taste detail (sauce, spice level, how to eat). E.g. “Sốt chấm Gà lạnh nhà Koh: chua chanh trước, cay ớt sau, ngọt hậu vừa đủ để bạn chấm thêm miếng nữa.”
- **House verbs:** *nêm, yam, ghé, mời*.
- **Banned:** “tuyệt hảo”, “đỉnh cao”, “hương vị khó quên”, “chuẩn Thái 100%”, “nhất”, “đầu tiên”; mass-discount shouting as the main message; “Click ngay!!!”.
- **Casing:** CTAs and labels UPPERCASE (“ĐẶT BÀN NGAY”); headings sentence case.
- **Emoji:** none in print/design; max 2 in social captions.
- **Landmark catchphrases (approved):** Suối Thảo Mộc “Danh thắng đã đặt tên cho Koh.” · Biển Đỏ “Ra khơi cùng cả bàn.” · Núi Lửa “Leo tới đỉnh là hết sợ cay.” · Sông Băng “Dòng sông mát nhất giữa mâm cay.” · Rừng Giòn “Gắp trước, kẻo hết.”
- **Staff greeting:** “Sawasdee! Koh Yam xin chào. Hôm nay mình đi mấy người ạ?”
- **Post copy budget:** one message ≤8 words, one CTA of 2–4 words (verb + destination), max one promo label, conditions always stated in a caption.

## VISUAL FOUNDATIONS
- **Colour (option A, chosen):** Koh green `#456534` leads; `#293d1f` for dark grounds. One gold `#d8a459` (logo, patterns, CTA/numbers on dark green). Cream `#fcf7ef` is paper, brown `#28231c` is ink. Supporting colours (chili, terracotta, blue-grey, coral, peach) used sparingly — chili for spice/promo, terracotta for grill/cold season, blue for cold dishes & Songkran. Chair pink `#eba7b8` is the only off-guideline addition (≤10%). Frame ratio **60% surface · 30% green or photo · 10% one accent**.
- **Themes:** `data-theme="kem"` (default: menus, web, dish posts) and `"xanh"` (promos, events, posters). `b-kem` / `b-nau` are the option-B comparison — delete when leadership signs off. Always use semantic tokens (`--surface --ink --brand --cta --on-cta --highlight --promo`).
- **Contrast:** gold on #456534 is only 3:1 → very large text only; regular gold text sits on green-900. Never white/cream text on gold (~2:1). Focus ring 2px solid `--focus-ring`, 3px offset.
- **Type:** Montserrat Alternates for things you *look at* (headlines Light/Medium, left-aligned, lh 1.2; Bold for h3/CTA/numbers/eyebrows). Montserrat (regular family, Google Fonts) for things you *read* (≥2 lines or ≤14px), Medium body, Bold emphasis, lh 1.4 for Vietnamese diacritics. Allison script for 2–4 accent words in `--brand`, ≥60px on social. No other fonts, ever (replace the old serif “11”).
- **Backgrounds:** flat cream or flat dark green; no gradients. Texture comes from the gold Thai pattern PNGs (borders, back-of-menu, ≤30% coverage) and the hand-drawn ingredient illustration. Full-bleed is reserved for photos inside the rounded frame.
- **Graphic language:** postage stamp & postmark (StampLogo, Postmark, IslandStamp) — "letters from Koh island"; guidebook cards (LandmarkCard) for signature dishes; Thai letters (neon “สวัสดี”) only as spatial decoration, never as content. **No elephants, no golden pagodas.**
- **Shapes & radii:** photo frames `radius-lg` 32px; cards `radius-md` 14px; small tags 6px; CTA + location tag pills.
- **Shadow:** a single hard sticker shadow `0 3px 0 rgba(40,35,28,.18)` — no blur, no elevation scale. Photos on green get a 6px cream ring instead of a shadow.
- **Borders:** cards use a 1px `--line` (sand) ring via box-shadow; dashed sand rules inside landmark cards; stamps use solid + dashed rings.
- **Cards:** cream-50 fill, 14px radius, 1px sand ring + sticker shadow, coloured header band (landmark colour / island colour).
- **Imagery:** warm, natural light; food top-down or 45° on warm wood; long tables of many dishes; hands serving. Interiors show green & pink bent-wood chairs, light wood, turquoise tiles, rough white walls, Thai letters, plus one island-specific corner. Real guests and staff. No cool filters.
- **Layout:** posts 1080×1080 (or 1080×1350), 3% safe margin, logo as corner stamp or top-right tab, CTA bottom-centre. Stamp tilt ±4° on photos; island stamps −8°.
- **Motion / states:** source defines none. Recommended (not sourced): no bounces; simple 150ms fades; hover = darken toward green-900 / slight lift of sticker shadow; press = remove sticker shadow (sticker "pressed flat"). Transparency only on pattern strips (≈0.5 opacity); no blur.

## ICONOGRAPHY
The brand has **no icon set**. The only glyph is the filled, round-cornered **map pin** in `LocationTag` (inline SVG, tinted with island ink). New icons (spice level, vegetarian, kids) should match: solid fill, rounded corners, single colour, 24px grid — add them to `assets/icons/` when drawn. No icon font, no CDN icon set, no emoji as icons, no unicode pictographs. Thai patterns 01/02 may act as large decorative bullets.

## Fonts
`fonts/` — Montserrat Alternates 300–800 + Allison (OFL, from Branding 2021). **Montserrat** (long text) loads from Google Fonts — no local file was supplied.

## Index
- `styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `brand-classes.css` (ported `ky-*` classes).
- `guidelines/` — 21 foundation cards (Colors, Type, Spacing, Brand).
- `assets/logos/` 12 SVG lockups (stacked/horizontal × tagline × brown/gold/cream) · `assets/patterns/` 11 PNG · `assets/illustrations/` · `assets/photos/` 6 reference photos.
- `components/` — React primitives (see below), each with `.d.ts` + `.prompt.md`; set `window.KOHYAM_ASSETS` to your `assets/` path.
- `ui_kits/social-posts/` — post studio (5 templates).
- `thumbnail.html`, `SKILL.md`.

## Components
Mirrors the 13 families of the source DS:
- **brand/** — `Logo` (incl. logo tab), `StampLogo`, `Postmark`, `IslandStamp`, `PatternBand`
- **actions/** — `CTAButton`, `PromoTag` + `PromoNumber`, `LocationTag`
- **content/** — `LandmarkCard`, `IslandPalette` (+ `IslandCard`, `ISLANDS` data), `SoSanhPhuongAn`
- **social/** — `SocialPost`
- Not ported: **Cover** (source preview only; contents not recoverable without its base64 assets).

### Intentional additions
- `PromoNumber` split out of PromoTag (the source styles it as a separate class `ky-promo-number`).
- `IslandCard` exported from IslandPalette for single-island use.

## Open items (from source)
Name for 34A Quang Trung island; three "Đề xuất" island colours pending facades; option A vs B sign-off; thin pagoda line art on the 11-year set breaks the no-pagoda rule.
