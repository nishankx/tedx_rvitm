# TEDxRVITM — Official Website

Official website for **TEDxRVITM**, the premier TEDx event at **RV Institute of Technology and Management (RVITM), Bengaluru**.

> **Theme:** UNRAVEL : THE UNCHARTED  
> **Date:** November 14, 2026  
> **Venue:** RVITM Grand Auditorium, Bengaluru  
> **License:** *This independent TEDx event is operated under license from TED.*

---

## 🚀 Tech Stack

- **Framework:** React 18 + TypeScript (strict mode) + Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Motion & Physics:** Framer Motion (`framer-motion`)
  - Velocity-reactive marquees (`useVelocity`, `useSpring`)
  - Scroll-linked fills & transforms (`useScroll`, `useTransform`)
  - Shared-element modal transition (`layoutId`, `layout`)
  - Draggable & flingable physics cards & stickers (`drag`, `dragElastic`, `dragMomentum`)
  - Route shutter wipes (`AnimatePresence`)
- **Smooth Scroll:** Lenis (`lenis`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Form Management & Validation:** React Hook Form (`react-hook-form`) + Zod (`zod`) + `@hookform/resolvers`
- **Iconography:** Custom inline SVG Iconism library (16+ geometric badges, starbursts, pinwheels, smileys, hazard seals)
- **Typography:** Google Fonts:
  - Display: **Archivo**
  - Body: **Space Grotesk**
  - Monospace: **Space Mono**

---

## 🎨 Design Direction: Brutalism + Iconism

- **Core Palette (80%):**
  - Black: `#0A0A0A`
  - TED Red: `#E62B1E`
  - Deep Red: `#8B0000`
  - White: `#FFFFFF`
  - Paper: `#F2EFE6`
- **Electric Accent Contrast (10–15%):**
  - Acid Lime: `#D6F23A`
  - Hot Pink: `#FF5CC8`
  - Electric Violet: `#5B2EFF`
  - Orange: `#FF7A00`
- **Surfaces & Textures:**
  - Fixed SVG `feTurbulence` film-grain overlay
  - Dust and scanline scratches
  - Jagged torn-paper SVG dividers
  - Chamfered corner cards & notched ticket stubs
  - Hard offset shadows (`shadow-brutal`: `4px 4px 0px #000000`, no soft blur)
  - Morphing custom cursor with `DRAG`, `VIEW`, `PLAY`, and `OPEN` states

---

## 📑 How to Edit Content

All event text, metadata, speakers, agenda sessions, ticket tiers, team members, and FAQs live in:
👉 [`src/data/content.ts`](./src/data/content.ts)

Every variable contains typed interfaces and `{{PLACEHOLDER}}` tags so organizers can quickly customize:
- `EVENT_META.theme`: Event theme (e.g., `"UNRAVEL : THE UNCHARTED"`)
- `EVENT_META.date`: Event date (e.g., `"NOVEMBER 14, 2026"`)
- `EVENT_META.venue`: Venue location and address
- `SPEAKERS`: List of speaker names, talk titles, categories, bios, and headshot URLs
- `AGENDA_SESSIONS`: Sessions 1, 2, and 3 with schedule times and track items
- `TICKETS`: Pass pricing, benefit lists, and sold-out states
- `TEAM_MEMBERS`: Organizers, departments, and LinkedIn coordinates
- `FAQ_ITEMS`: Question and answer entries

---

## 🕹️ Interactive Easter Egg

Click on the spinning lime starburst sticker in the top-left of the footer or hero to unleash a physics rain of geometric badges tumbling down the screen!

---

## 🛠️ Local Development & Production Build

### Install Dependencies
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
```

### Build Production Bundle
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
