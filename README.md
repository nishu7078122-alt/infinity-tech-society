# INFINITY — THE TECH SOCIETY
### Sri Guru Gobind Singh College of Commerce, University of Delhi
**"Learn. Create. Design. Build. Innovate."**

A pixel-accurate, high-performance web recreation of the official INFINITY Tech Society platform featuring cinematic 3D Three.js animations, Framer Motion transitions, responsive layouts, and rich interactive modules.

---

## ⚡ Highlights

- **Cinematic 3D Intro Animation**: Full-screen 4-phase sequence rendering an interactive 3D metallic chrome Infinity sculpture with flowing neon-lime photons, volumetric lighting, and camera transitions.
- **Pixel-Accurate Homepage**: Recreated 1:1 against the official design reference:
  - Sticky glassmorphic navbar with active glowing pill indicator.
  - Left hero with institutional branding, futuristic typography, and social proof.
  - Right hero featuring the SGGSCC campus building at night and interactive 3D / photo view toggle.
  - Floating vertical section indicator (`01 Home` to `05 Bulletin`).
  - Glassmorphic Statistics Strip (Community Members, Events, Tech Domains, Opportunities).
  - 5 Interactive Technology Domain cards with illuminated icon docks.
  - Three-column showcase: Featured Event (Game Fest 2026 carousel), Executive Leadership Team, and Tech Bulletin newsfeed.
  - Join Infinity recruitment callout with illuminated borders.
- **Full Functional Sub-Pages & Interactive Modals**:
  - `About Us`: Legacy, NAAC A++ SGGSCC infrastructure, and the 5 pillars.
  - `Events & Competitions`: Category filter, prize pool summaries, and interactive registration modal with confetti effects.
  - `Our Team`: Executive Board (2025–26), Domain Heads, and Alumni directory.
  - `Tech Bulletin`: Research publications on Agentic AI, Spatial Computing, and Cyber Hygiene with integrated reader modal.
  - `Gallery`: Photo chronicles with responsive lightbox viewer.
  - `Join Us`: Comprehensive multi-field recruitment application with validation.
  - `Contact`: Campus address, lab timings, and interactive inquiry dispatcher.
  - `Global Search`: Fast modal searching across all events, articles, and wings (`Ctrl + K`).

---

## 🎨 Design System & Palette

- **Primary Background**: `#050807` (Deep Black)
- **Secondary Background**: `#0C1210` (Dark Charcoal)
- **Primary Accent**: `#B6FF39` (Neon Lime Green)
- **Secondary Accent**: `#77C83D` (Muted Green)
- **Primary Typography**: `#F5F7F4` (Clean White)
- **Secondary Typography**: `#A6ADA7` (Cool Grey)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ (tested on v24)
- npm or pnpm

### Local Development
```bash
# Navigate to project directory
cd infinity-tech-society

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
npm run build
npm run preview
```

### Vercel Deployment
The project contains pre-configured `vercel.json` and Vite production bundling:
```bash
# Deploy with Vercel CLI
npx vercel
```
Or connect your GitHub repository directly to Vercel — it will auto-detect Vite and deploy instantly.
