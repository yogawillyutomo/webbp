# Bakaran Project Website

Official frontend website for **Bakaran Project**, presenting the team, services, portfolio, and contact information for its software and digital technology work.

🌐 **Live:** https://bakaranproject.com

## Overview

This repository contains the public-facing Bakaran Project website. The current landing page is organized around a clear company narrative:

- **Hero** — primary positioning and introduction
- **Services** — software and digital technology capabilities
- **Portfolio** — selected work and product highlights
- **Contact** — inquiry and collaboration entry point
- **Shared navigation and footer** — consistent site-level experience

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **ESLint**

## Project Structure

```text
src/
├── app/          # Next.js app entry, layout, metadata, and global styles
├── constants/    # Shared static values and configuration
├── core/         # Core application concerns
├── features/     # Page features such as hero, services, portfolio, and contact
└── shared/       # Shared UI and layout components
```

The project follows a feature-oriented structure so page sections can evolve independently while common UI remains reusable.

## Local Development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

Run lint checks with:

```bash
npm run lint
```

## Website Metadata

The application is configured for **Bakaran Project** with Indonesian-language metadata and `https://bakaranproject.com` as its canonical base URL.

## Repository Status

This repository represents the current public website frontend and will continue to evolve alongside Bakaran Project's product and company positioning.

---

**Bakaran Project** — building practical software and digital solutions for real operational problems.
