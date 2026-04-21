# Mobile App Platform

Production-ready foundation for a multilingual mobile app portfolio, support, and policy hub.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- PostgreSQL
- Prisma ORM
- Custom admin authentication with signed HTTP-only cookies
- Turkish and English routing from day one

## Main Routes

- Public: `/tr`, `/en`
- Projects: `/tr/projects`, `/en/projects`
- Project detail: `/tr/projects/[slug]`, `/en/projects/[slug]`
- Store compliance pages:
  - `/[locale]/projects/[slug]/privacy`
  - `/[locale]/projects/[slug]/terms`
  - `/[locale]/projects/[slug]/support`
  - `/[locale]/projects/[slug]/delete-account`
  - `/[locale]/projects/[slug]/faq`
  - `/[locale]/projects/[slug]/suggestions`
- Admin:
  - `/admin/login`
  - `/admin`
  - `/admin/projects`
  - `/admin/projects/new`
  - `/admin/projects/[id]/edit`
  - `/admin/messages`
  - `/admin/suggestions`
  - `/admin/settings`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Update `.env` with a PostgreSQL connection and strong `SESSION_SECRET`.

4. Generate Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Seed demo data:

```bash
npm run db:seed
```

The seed creates realistic Turkish and English demo projects and an admin user from `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

6. Start development server:

```bash
npm run dev
```

## Production Notes

- Use a managed PostgreSQL database on Vercel or another provider.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Set `SESSION_SECRET` to a long random value.
- Change the seeded admin password before production use.
- The app uses server components and server actions for public submissions and admin mutations.

## Content Model

Prisma models include:

- `User`
- `Project`
- `ProjectImage`
- `ProjectFaq`
- `Suggestion`
- `SupportMessage`
- `SiteSetting`

Project content is stored separately for Turkish and English, including names, descriptions, privacy policy, terms, account deletion instructions, support content, and FAQ entries.
