# Dieu SteriMed — Professional Next.js Website Redesign

A fully professional, production-ready Next.js 15 website redesign for **Dieu SteriMed Pvt. Ltd.**, a sterilization monitoring products company.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Icons**: Lucide React
- **Fonts**: Inter + Barlow (Google Fonts)
- **Language**: TypeScript

## 🎨 Design System

- **Primary Color**: Forest Green (`#1a7c3e`) — trust, safety, healthcare
- **Accent Color**: Gold (`#f4b800`) — premium, certified, excellence
- **Dark**: Near-black (`#0d1117`) — sophisticated, medical
- **Typography**: Barlow (headings) + Inter (body)

## 📁 Project Structure

```
dieu-sterimed/
├── app/
│   ├── layout.tsx          # Root layout with fonts, meta, Navbar/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + utility classes
│   ├── about/page.tsx      # About Us page
│   ├── products/page.tsx   # Products catalog page
│   ├── quality/page.tsx    # Quality & Compliance page
│   └── contact/page.tsx    # Contact page with form
├── components/
│   ├── Navbar.tsx          # Sticky navbar (transparent → solid on scroll)
│   ├── Footer.tsx          # Dark footer with links + certifications
│   └── home/
│       ├── Hero.tsx        # Full-screen hero with floating badges
│       ├── StatsBar.tsx    # Animated counter stats
│       ├── AboutSnapshot.tsx
│       ├── ProductsPreview.tsx  # 6-product card grid
│       ├── WhyChooseUs.tsx
│       ├── Certifications.tsx
│       ├── Testimonials.tsx
│       └── CTABanner.tsx
├── tailwind.config.js      # Custom colors, fonts, animations
├── next.config.js
└── package.json
```

## 🖥️ Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, about snapshot, products, why us, certs, testimonials, CTA |
| About | `/about` | Story, values, founders, timeline |
| Products | `/products` | All 6 product categories with SKUs |
| Quality | `/quality` | Certifications, quality process, standards |
| Contact | `/contact` | Contact form + info |

## ✨ Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll behavior
- ✅ Animated counter stats (IntersectionObserver)
- ✅ Floating navbar (transparent → white on scroll)
- ✅ Mobile hamburger menu
- ✅ Animated hero with floating badges
- ✅ Wave SVG section transitions
- ✅ Hover animations and card effects
- ✅ Contact form with success state
- ✅ SEO metadata (OpenGraph, Twitter cards)
- ✅ Custom scrollbar

## 🛠️ Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## 🏗️ Build

```bash
npm run build
npm start
```

## 📋 Notes

- Update phone numbers in `Navbar.tsx`, `Footer.tsx`, and `contact/page.tsx`
- Update company address in `Footer.tsx` and `contact/page.tsx`
- Social media links in `Footer.tsx` (currently `#`)
- Contact form in `contact/page.tsx` needs a backend API (e.g., Nodemailer, Resend)
- Logo: Replace the Shield icon with the actual company logo image
