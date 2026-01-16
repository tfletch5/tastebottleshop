# Taste Bottle Shop Website

A modern, responsive website for Taste Bottle Shop - a fine wine, premium spirits, and craft beer store located in Dunwoody/Sandy Springs, Georgia.

Rebuilt from archived website content using Next.js 14, TypeScript, and TailwindCSS.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with TailwindCSS styling
- ✅ Customer testimonials section
- ✅ Product categories showcase
- ✅ Store location and contact information
- ✅ Google Maps integration
- ✅ Social media links (Instagram, Facebook)
- ✅ SEO optimized with proper metadata

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **shadcn/ui patterns** - Beautiful UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page auto-updates as you edit files.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tastebottleshop/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   └── ui/
│       ├── button.tsx      # Button component
│       └── card.tsx        # Card component
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Store Information

**Taste Bottle Shop**

- **Address:** 1155 Mount Vernon Hwy NE Suite 430, Atlanta, GA 30338
- **Hours:**
  - Monday-Saturday: 10am - 10pm
  - Sunday: 12:30pm - 8pm
- **Phone:** (678) 691-5854
- **Email:** drink@tastebottleshop.com

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Deploy on Netlify

1. Push your code to GitHub
2. Connect your repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## License

© 2026 Taste Bottle Shop. All rights reserved.
