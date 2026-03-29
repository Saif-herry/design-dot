# HLS Global Group — Landing Page

A production-grade **Next.js 14 + TypeScript + Tailwind CSS** landing page.

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, Tailwind layers, custom CSS
│   ├── layout.tsx         # Root layout — fonts (next/font), metadata
│   └── page.tsx           # Home page — composes all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky header, mobile menu, hex logo
│   │   └── ScrollObserver.tsx # Client-side IntersectionObserver (fade-in)
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx        # Full-bleed hero with diagonal overlay
│   │   ├── HotTopicsSection.tsx   # 4-column static news grid
│   │   ├── AboutSection.tsx       # Firm description, stats, live map
│   │   └── InsightsSection.tsx    # Insight list + photo cards
│   │
│   └── ui/
│       ├── ArrowIcon.tsx    # Reusable → SVG arrow
│       ├── HexLogo.tsx      # SVG hexagon logo mark
│       └── SectionLabel.tsx # Orange-bar + uppercase heading combo
│
├── constants/
│   └── index.ts   # All site data (nav, stats, topics, cards, locations)
│
├── lib/
│   └── utils.ts   # Utility helpers (cn)
│
└── types/
    └── index.ts   # Shared TypeScript interfaces
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2 | App Router, SSR, Image optimisation |
| TypeScript | 5.4 | Type safety across all files |
| Tailwind CSS | 3.4 | Utility-first styling |
| next/font | built-in | Zero-layout-shift Google Fonts |

---

## 📐 Responsive Breakpoints

| Name | Width |
|------|-------|
| xs   | 320px |
| sm   | 640px |
| md   | 768px |
| lg   | 1024px |
| xl   | 1280px |
| 2xl  | 1536px |
| 3xl  | 1920px |

---

## ✏️ Customising Content

All site copy and data lives in **`src/constants/index.ts`** — edit there to update:
- Navigation links
- Hero headline & subtext
- Hot topics list
- Stats (250+, 1000+ …)
- Insight items & cards
- Office map locations

---

## 📦 Build for Production

```bash
npm run build
npm start
```
