# CLAUDE.md

## Project Overview

This project is a Next.js dashboard template with Tailwind CSS and several UI components. Below is a guide for common development tasks and a summary of the directory structure.

## How to Run Common Tasks

### Build for Production

Build the application for production:

```bash
pnpm build
```

### Start Production Server

Run the production build:

```bash
pnpm start
```

### Linting

Check code for linting errors:

```bash
pnpm lint
```

### Generate Data

Run the data generation script:

```bash
pnpm generate
```

## Directory Structure

```
public/                  # Static assets
src/
  app/                   # Next.js app directory
    globals.css          # Global styles
    layout.tsx           # Main layout
    not-found.tsx        # 404 page
    siteConfig.ts        # Site configuration
    (main)/              # Main dashboard pages
      layout.tsx         # Main layout for dashboard
      details/           # Details page
      overview/          # Overview page
    settings/            # Settings pages
      layout.tsx         # Settings layout
      page.tsx           # Settings page
  components/            # Reusable UI components
    ui/                  # UI subcomponents
      icons/             # Icon components
      navigation/        # Navigation components
      overview/          # Dashboard overview components
  data/                  # Data and schema files
    data.ts              # Example data
    generateData.js      # Data generation script
    overview-data.ts     # Overview data
    schema.ts            # Data schema
```

## Additional Notes

- All commands use `pnpm`. If you use `npm` or `yarn`, adjust accordingly.
- For more details, see the README.md file.
