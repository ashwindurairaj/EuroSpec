# North American Metals (Eurospec) Website PRD

## Original Problem Statement
Build a static website for North American Metals (operating as Eurospec) - Canadian automotive manufacturing company. Rebuilt with Vite + React 18, Node 20.x compatible. Email functionality using Python smtplib (NodeMailer-style) for contact and career forms to ashwinviyan@gmail.com.

## Tech Stack
- **Frontend**: Vite + React 18 + react-router-dom v6 + Tailwind CSS
- **Backend**: FastAPI (Python) with smtplib for emails
- **No CRA/CRACO/webpack** - pure Vite

## What's Been Implemented (February 2026)
- [x] Vite + React 18 frontend (npm run dev works on Node 20)
- [x] All pages: Home, About Us, Services, Service Details, Careers, Contact
- [x] Service cards on home page - clickable to /services/{serviceId}
- [x] Job listings with Apply modal
- [x] Contact form with Google Maps embed
- [x] Email endpoints: /api/contact and /api/apply
- [x] Resume file upload support
- [x] Emails sent to ashwinviyan@gmail.com
- [x] ADP Portal button in header

## Animation & Asset Revamp (June 2026)
- [x] All imagery localized into `src/assets/` and served via `src/assets/index.js` registry (no external Unsplash hotlinking)
- [x] Added `framer-motion` for a modern 2026 motion feel across ALL pages
- [x] Reveal/StaggerGroup/StaggerItem helpers (`src/components/Common/Reveal.jsx`) for scroll-triggered fade/slide reveals + staggered card entrances
- [x] Hero entrance animations + background zoom; PageBanner parallax zoom on all inner pages
- [x] Card hover-lift micro-interactions + image zoom-on-hover
- [x] Signature "exploded view" scroll animation on Home hero (`src/components/Home/ExplodedTool.jsx`): a progressive stamping die splits into Upper Shoe / Punch Plate / Metal Strip / Die Plate / Lower Shoe as you scroll down, reassembles on scroll up. 2.5D depth via CSS perspective tilt. Verified working.
- [x] vite.config.js `allowedHosts: true` so preview host loads correctly

## Email Configuration (backend/.env)
To enable actual email sending, configure:
- MAIL_HOST=smtp.gmail.com
- MAIL_PORT=587
- MAIL_USER=your_email@gmail.com
- MAIL_PASS=your_app_password (Gmail App Password)
- MAIL_TO=ashwinviyan@gmail.com

## API Endpoints
- GET /api/health - Health check
- POST /api/contact - Contact form submission
- POST /api/apply - Job application with resume upload

## Next Tasks
1. Configure Gmail SMTP credentials for actual email delivery
2. Add more job listings if needed
3. Update ADP Portal link to actual URL
