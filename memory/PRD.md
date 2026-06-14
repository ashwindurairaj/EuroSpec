# North American Metals (Eurospec) — Product Requirements

## Original Problem Statement
Responsive 5-page marketing website (Home, About, Services, Careers, Contact) for a Canadian automotive manufacturer "North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing". Clean, manufacturing-themed. Contact + Career forms email to ashwinviyan@gmail.com.

## Tech Stack
- Frontend: React 18 + **Vite** + Tailwind + Shadcn UI. Env var: `VITE_API_URL` (frontend/.env).
- Animations: framer-motion, lenis (smooth scroll), react-fast-marquee.
- Backend: FastAPI (Uvicorn, port 8001) — supervisor-enforced (Node.js not possible). Endpoints: `POST /api/contact`, `POST /api/apply`, `GET /api/health`.
- No MongoDB (backend only forwards emails).

## Implemented (2026-06-13)
- 5 pages + ServiceDetail, all content from PDF. Light/clean theme (navy #202E4A + red accent #E63946).
- **Animation overhaul (user chose: keep light theme + add rich animations):**
  - Parallax hero + PageBanner, staggered hero text entrance
  - Animated number counters (Home stats)
  - Scroll-triggered reveals (Reveal/StaggerContainer/StaggerItem) — `viewport once:true`, end at opacity 1
  - 3D tilt hover on cards (TiltCard)
  - Infinite brand marquee (Trusted by)
  - Page fade transitions (AnimatePresence), animated mobile menu, nav underline
  - Reusable motion primitives at `src/components/motion/index.jsx`
  - `prefers-reduced-motion` respected in index.css
- Fixed `vite.config.js` allowedHosts -> `true` (was hardcoded old host, blocked preview/deploy).
- Tested: testing_agent iteration_2 -> 100% backend (7/7 pytest) + 100% frontend. No issues.

## About page Leadership Team (2026-06-14)
- Added user-supplied "Our Visionaries / Leadership Team" section: CEO card (Ken Rudnick) + 5 director cards (Piraba, Indar, Nancy, Randy, Vladimir).
- Images imported from `src/assets/images/` (about.jpeg + 6 portraits). **Portraits are PLACEHOLDER initial-avatars** generated via PIL — user must upload real photos to replace files of the same name.
- Fixed: removed unsupported `<style jsx>` (moved float/pulse keyframes to index.css); replaced `var(--primary)` with #202E4A.
- Integrated with site animations (Reveal/Stagger). Tested iteration_3 -> frontend 100%, no broken images.
- Note: filename `NANCY KIRKPATRICK.png` has a space (matches user's git code) — works, consider renaming later.

## Iteration 4 (2026-06-14)
- Swapped in REAL director photos (RANDY, PIRABA, NANCY KIRKPATRICK, INDAR, VLADIMIR — mapped by filename) over placeholders. CEO (ceo.png) still placeholder pending user upload.
- Fixed white-screen flash on page navigation: removed `AnimatePresence mode="wait"` (caused a blank gap); pages now mount with a 0.25s fade-in. App.jsx + motion/index.jsx PageTransition.
- NEW: `components/ExplodedTool.jsx` — scroll-driven exploded view of a 5-plate progressive stamping die-set. Sticky 300vh section on Home; plates separate on scroll-down, reassemble on scroll-up; red accent band sweeps + progress bar. Inserted in Home between Overview and Services.
- Tested iteration_4 -> frontend 100%: nav has no white screen, plate transforms animate & reverse, all 5 director imgs load, no JS errors.
- Backlog note: rename "NANCY KIRKPATRICK.png" -> NANCY.png (space in filename, works but fragile).

## Known / Mocked
- **EMAIL SENDING IS MOCKED**: `send_email` returns success without sending when MAIL_USER/MAIL_PASS empty in backend/.env. Forms return success:true + show toast, but NO real email is delivered yet.

## Backlog / Next (P0/P1)
- P0: Wire real email — user to choose Resend (API key) or Gmail SMTP (App Password). Add creds to backend/.env (MAIL_USER/MAIL_PASS) or integrate Resend.
- P1: Add real ADP portal URL (currently https://workforcenow.adp.com placeholder in Header).
- P1: Run deployment_agent health check before deploy; restrict CORS to prod domain.
