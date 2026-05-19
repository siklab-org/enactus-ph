# Enactus Philippines

> A national network of student-led ventures driving social impact through entrepreneurship.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-cyan?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

## About

Enactus Philippines unites student, academic, and business leaders using innovation and entrepreneurship to build a sustainable future for the Philippines. The organization supports 32 partner universities, 78 active ventures, and has generated 12K+ volunteer hours impacting 240K+ lives.

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.2.6 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 4 |
| Component Primitives | Radix UI | latest |
| Form Handling | React Hook Form + Zod | 7.75.0 / 4.4.3 |
| Charts | Recharts | 3.8.1 |
| Icons | Lucide React | 1.16.0 |
| Fonts | Space Grotesk, Inter, JetBrains Mono | (next/font) |

## Project Structure

```
enactus-ph/
├── app/                        # Next.js App Router
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui-style primitives (Radix-based)
│   │   ├── SiteHeader.tsx      # Global navigation header
│   │   ├── SiteFooter.tsx      # Global footer
│   │   └── PageHero.tsx        # Reusable hero section
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities (utils.ts)
│   ├── contact/               # Contact page
│   ├── impact/                # Impact metrics page
│   ├── what-we-do/            # Programs & initiatives page
│   ├── who-we-are/            # About the organization page
│   ├── layout.tsx             # Root layout with fonts & metadata
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles & Tailwind
├── public/                    # Static assets
├── .github/                   # GitHub config & PR template
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── LICENSE
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/enactus-ph.git
cd enactus-ph

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Key Features

- **Responsive Design** — Mobile-first approach with Tailwind CSS 4
- **Component Library** — Custom shadcn/ui-style primitives built on Radix UI
- **Form Validation** — React Hook Form with Zod schema validation
- **Data Visualization** — Recharts for impact metrics and analytics
- **SEO Optimized** — Next.js metadata API with OpenGraph support
- **Custom Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (code)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, pillars, and CTA |
| `/who-we-are` | About Enactus Philippines |
| `/what-we-do` | Programs and initiatives |
| `/impact` | Impact metrics and outcomes |
| `/contact` | Contact information and form |

## Development Guidelines

### Component Architecture

- Use `app/components/ui/` for reusable UI primitives
- Components are built on Radix UI primitives with Tailwind styling
- Follow the `class-variance-authority` pattern for component variants

### Styling Conventions

- Tailwind CSS 4 with CSS variables for theming
- `clsx` and `tailwind-merge` for conditional class handling
- CSS custom properties defined in `globals.css`

### Form Handling

- React Hook Form for form state management
- Zod for schema validation
- `@hookform/resolvers` for Zod integration

## License

MIT License — Copyright (c) 2026 Siklab

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CLAUDE.md](CLAUDE.md) for development guidelines.