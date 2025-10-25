# Nestcraft - Premium Real Estate Platform

Modern, luxury real estate website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with custom brand tokens
- **Database:** PostgreSQL + Prisma ORM
- **Fonts:** Playfair Display (headings), Inter (body)

## Brand Colors

- Primary Deep Teal: `#05374D`
- Accent Bronze/Gold: `#A28458`
- Off-White Paper: `#F0EDE8`
- Secondary Teal: `#2B5364`
- Slate: `#5B5B5C` / `#2F3234`

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL 14+ (local or hosted)

## Setup Instructions

1. **Clone and install dependencies:**
```bash
   npm install
```

2. **Configure environment variables:**
```bash
   cp .env.local.example .env.local
```

   Edit `.env.local` and add your `DATABASE_URL` and other credentials.

3. **Initialize database:**
```bash
   npx prisma db push
```

4. **Run development server:**
```bash
   npm run dev
```

   Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run format` — Format code with Prettier
- `npm run type-check` — TypeScript validation
- `npm run db:studio` — Open Prisma Studio (database GUI)
- `npm run db:migrate` — Create and run migrations

## Project Structure
```
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles + Tailwind
├── components/          # React components (future)
├── lib/                 # Utilities and shared logic
│   ├── fonts.ts         # Next.js font configuration
│   └── utils.ts         # Helper functions
├── prisma/
│   └── schema.prisma    # Database schema
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind + brand tokens
```

## Next Steps

- [ ] Implement property listing components
- [ ] Add search and filter functionality
- [ ] Build property details page
- [ ] Create lead capture forms
- [ ] Set up authentication
- [ ] Build admin dashboard

## License

Proprietary and confidential.