# Atryverse Web - Technical Overview

This directory contains the main Next.js application for the Atryverse Portfolio.

## Technical Details

- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL (Prisma ORM)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Development

Run the development server:

```bash
npm run dev
```

### Database Management

-   **Schema**: `prisma/schema.prisma`
-   **Seeding**: `npm run prisma:seed` (configured in `package.json`)
-   **Studio**: `npx prisma studio`

## Deployment

This app is optimized for deployment on Vercel. Ensure the following environment variables are set:
- `DATABASE_URL`
- `DIRECT_URL`

For more information on the overall project, see the [Root README](../README.md).
