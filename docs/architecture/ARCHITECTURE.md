# Brand Platform Architecture

## Purpose

This project is a scalable creator-brand platform built around video content, an editorial armory database, projects, shop integration, membership, and user accounts.

The first version will focus on a clean modular monolith instead of microservices.

## Core Architecture

- Monorepo managed with pnpm and Turborepo
- Main application in `apps/web`
- Shared packages in `packages/*`
- Feature-based application structure
- Next.js App Router
- TypeScript-first development
- External integrations wrapped behind internal service modules

## Primary Domains

The internal `Videos` domain is exposed publicly as `/watch` with the navigation label `Watch`.

- Videos
- Armory
- Projects
- Shop
- Membership
- Users
- Admin

## Removed From V1

The following features are intentionally excluded from the first version:

- Challenges
- Predictions
- Leaderboards

These may be added later as isolated modules.

## Design Rules

Components display UI.

Actions handle user-triggered mutations.

Queries read data.

Services contain business logic.

Repositories handle database access.

Schemas validate input.

External APIs are wrapped in `lib/` or service modules.

## Request Flow

User
→ Next.js route
→ Feature component
→ Server action or query
→ Service layer
→ Repository or external integration
→ Database/API
→ Response

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- pnpm
- Turborepo
- Supabase Postgres
- Drizzle ORM
- Clerk
- Shopify
- Resend
- PostHog
- Vercel
