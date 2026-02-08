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
