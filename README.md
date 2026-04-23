# The Tech Hub — Website

**Live Client:** The Tech Hub, Rochelle, IL  
**Built by:** [ETM Marketing](https://etm-marketing.com)  
**Motto:** End to End Support

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14+ (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v3 | Styling |
| shadcn/ui | UI components |
| Lucide React | Icons |
| Framer Motion | Animations |
| React Hook Form + Zod | Form handling & validation |
| Resend (or Nodemailer) | Contact form email delivery |
| `next/font` | Google Fonts (Rajdhani + IBM Plex Sans) |

---

## Getting Started

````bash
npm install
cp .env.local.example .env.local
# Fill in your credentials in .env.local
npm run dev
````

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

````env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@[PLACEHOLDER].com
````

> **Note:** The contact form API route (`/api/contact/route.ts`) is pre-wired for Resend. Swap in Nodemailer or another provider by editing that file only.

---

## Placeholders — Client Must Fill In

Search the codebase for `[PLACEHOLDER]` to find every item that needs real content before going live:

| Item | Location |
|------|----------|
| Phone number | `components/layout/Footer.tsx`, `app/contact/page.tsx` |
| Email address | `components/layout/Footer.tsx`, `app/contact/page.tsx`, `.env.local` |
| Physical address | `app/contact/page.tsx` |
| Hours of operation | `app/contact/page.tsx` |
| Google Maps embed URL | `app/contact/page.tsx` |
| Team member names & photos | `app/about/page.tsx` |
| Testimonial names & quotes | `components/sections/Testimonials.tsx` |
| Real product/service photos | Replace all `placehold.co` sources in `next/image` components |
| OG image | `public/og-image.png` |

---

## Project Structure

````
/app                    → Next.js App Router pages
  layout.tsx            → Root layout (Header, Footer, fonts, global metadata)
  page.tsx              → Home page
  /services
    page.tsx            → Services overview
    /[slug]/page.tsx    → Individual service pages (static generated)
  /about/page.tsx
  /contact/page.tsx
  /api/contact/route.ts → Contact form API endpoint

/components
  /layout               → Header, Footer, MobileNav
  /sections             → Page-level section components
  /shared               → Reusable components (ServiceCard, AnimatedSection, etc.)
  /ui                   → shadcn/ui primitives

/lib
  services.ts           → All service data (single source of truth)
  metadata.ts           → Shared SEO helpers
  validations.ts        → Zod schemas for forms
````

---

## Services Data

All service content lives in **`lib/services.ts`** as a typed array. To add, remove, or edit a service, update that file only — all pages (grid, dynamic routes, sitemap) pull from it automatically.

---

## Deployment

Recommended: **Vercel** (zero-config for Next.js)

1. Push repo to GitHub
2. Import into [vercel.com](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy

Custom domain setup handled via Vercel dashboard or your DNS provider.

---

## Going Live Checklist

- [ ] All `[PLACEHOLDER]` values replaced with real content  
- [ ] Real photography swapped in for `placehold.co` images  
- [ ] `RESEND_API_KEY` and `CONTACT_EMAIL` set in production env  
- [ ] Google Maps embed URL updated  
- [ ] Domain pointed and SSL confirmed  
- [ ] OG image (`/public/og-image.png`) created (1200×630px)  
- [ ] Google Search Console verified  
- [ ] Analytics (Google Analytics or Plausible) added if desired  

---

## Support

Site built and maintained by **ETM Marketing**  
🌐 [etm-marketing.com](https://etm-marketing.com)
