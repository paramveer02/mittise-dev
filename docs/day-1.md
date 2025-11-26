# Day 1 - MittiSe Project Setup

**Date:** November 25, 2025  
**Goal:** Bootstrap production-ready monorepo with web and mobile apps displaying demo UI

---

## Project Structure

```
mittise-qoder/
├── apps/
│   ├── web/                          # Next.js 14 web application
│   │   ├── app/
│   │   │   ├── layout.tsx           # Root layout with metadata
│   │   │   ├── page.tsx             # Home page component
│   │   │   └── globals.css          # Tailwind v4 global styles
│   │   ├── package.json
│   │   ├── tsconfig.json            # TypeScript config with workspace paths
│   │   └── next.config.ts
│   │
│   └── mobile/                       # Expo mobile application
│       ├── app/
│       │   ├── _layout.tsx          # Expo Router root layout
│       │   └── index.tsx            # Home screen component
│       ├── metro.config.js          # Metro bundler config (auto-configured)
│       ├── babel.config.js          # Babel preset for Expo
│       ├── app.json                 # Expo configuration
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── types/                        # Shared TypeScript types
│   │   ├── src/
│   │   │   └── index.ts             # ProductSummary, Box, User interfaces
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ui/                           # Shared UI constants
│       ├── src/
│       │   └── index.ts             # BRAND_NAME, BRAND_COLORS
│       ├── package.json
│       └── tsconfig.json
│
├── docs/
│   └── day-1.md                     # This file
│
├── .gitignore                       # Git ignore rules
├── .npmrc                           # pnpm configuration (hoisted)
├── .prettierrc                      # Code formatting rules
├── .eslintrc.json                   # Linting configuration
├── AGENTS.md                        # AI agent operating instructions
├── package.json                     # Root workspace package
├── pnpm-workspace.yaml              # pnpm workspace configuration
├── tsconfig.base.json               # Base TypeScript configuration
└── turbo.json                       # Turborepo pipeline configuration
```

---

## Tech Stack

### Monorepo

- **Package Manager:** pnpm (v9.15.0) with workspaces
- **Build System:** Turborepo (v2.3.3)
- **Node Version:** v20.19.6 (LTS)

### Web (apps/web)

- **Framework:** Next.js 16.0.4 (App Router, Turbopack)
- **Language:** TypeScript 5.7.2 (strict mode)
- **Styling:** Tailwind CSS v4.0.0
- **React:** v19.2.0

### Mobile (apps/mobile)

- **Framework:** Expo SDK 54
- **Runtime:** React Native 0.81.5
- **Navigation:** Expo Router v6.0.15
- **Language:** TypeScript 5.9.2 (strict mode)
- **React:** v19.1.0
- **Testing Platform:** Expo Go

### Shared Packages

- **Type Safety:** Shared TypeScript interfaces
- **Code Reuse:** Centralized brand constants

---

## Implementation Details

### 1. Monorepo Configuration

**Files Created/Modified:**

- `pnpm-workspace.yaml` - Defines workspace packages
- `.npmrc` - Configures hoisted node-linker for Expo compatibility
- `turbo.json` - Defines build pipelines (dev, build, lint, typecheck)
- `tsconfig.base.json` - Base TypeScript configuration

**Key Decisions:**

- Used pnpm hoisted installation for Expo Go compatibility
- Turborepo for efficient task orchestration
- Strict TypeScript across all packages

### 2. Web Application (Next.js)

**Files Created/Modified:**

- `apps/web/app/page.tsx` - Home page with MittiSe branding
- `apps/web/app/layout.tsx` - Root layout with custom metadata
- `apps/web/tsconfig.json` - Added workspace package path mappings

**Key Features:**

- TypeScript path aliases for workspace packages (`@mittise/ui`, `@mittise/types`)
- Tailwind v4 with gradient backgrounds
- Metadata optimized for SEO
- Turbopack for fast hot-reload

**TypeScript Paths Added:**

```json
"paths": {
  "@/*": ["./*"],
  "@mittise/ui": ["../../packages/ui/src"],
  "@mittise/types": ["../../packages/types/src"]
}
```

### 3. Mobile Application (Expo)

**Files Created/Modified:**

- `apps/mobile/app/_layout.tsx` - Expo Router root layout
- `apps/mobile/app/index.tsx` - Home screen with MittiSe branding
- `apps/mobile/metro.config.js` - Simplified for SDK 54 auto-detection
- `apps/mobile/babel.config.js` - Minimal Babel preset
- `apps/mobile/app.json` - Expo configuration with router plugin
- `apps/mobile/package.json` - Aligned dependencies to SDK 54 specs

**Key Decisions:**

- Removed manual Metro configuration (watchFolders, nodeModulesPaths) per Expo SDK 52+ docs
- Aligned React to v19.1.0 and react-native-web to ^0.21.0 for SDK 54 compatibility
- Simplified Babel to just `babel-preset-expo` (removed deprecated expo-router/babel plugin)
- Removed NativeWind temporarily to isolate core functionality

**Expo Configuration Highlights:**

```json
{
  "name": "MittiSe",
  "slug": "mittise-mobile",
  "scheme": "mittise",
  "plugins": ["expo-router"],
  "ios": { "bundleIdentifier": "com.mittise.app" },
  "android": { "package": "com.mittise.app" }
}
```

### 4. Shared Packages

**packages/ui/src/index.ts:**

```typescript
export const BRAND_NAME = "MittiSe";
export const BRAND_COLORS = {
  green: { 50: "#f0fdf4", 600: "#16a34a", ... },
  orange: { 50: "#fff7ed" }
};
```

**packages/types/src/index.ts:**

```typescript
export interface ProductSummary {
  id;
  title;
  price;
  image;
}
export interface Box {
  id;
  name;
  description;
  type;
  products;
}
export interface User {
  id;
  email;
  name;
}
```

### 5. Tooling & Quality

**Files Created:**

- `.prettierrc` - Code formatting (single quotes, 2 spaces, trailing commas)
- `.eslintrc.json` - ESLint with recommended rules
- `.gitignore` - Node, Next.js, Expo, and IDE exclusions

---

## Changes Made

### Configuration Changes

1. **Node.js Upgrade:** v18.20.8 → v20.19.6 (required by Next.js 16)
2. **pnpm Settings:** Added `node-linker=hoisted` for Expo compatibility
3. **Metro Config:** Removed manual monorepo configuration (SDK 54 auto-detects)
4. **TypeScript Paths:** Added workspace package mappings in web tsconfig

### Dependency Alignment

- **Mobile React:** 18.2.0 → 19.1.0 (SDK 54 requirement)
- **Mobile react-dom:** Added 19.1.0
- **Mobile react-native-web:** 0.19.13 → ^0.21.0
- **Mobile @types/react:** 18.2.0 → 19.1.10
- **Mobile @types/react-dom:** Added 19.1.7

### Code Improvements

1. **Metadata Update:** Changed from "Create Next App" to "MittiSe - Wellness Starts Here"
2. **Shared Imports:** Both apps import `BRAND_NAME` from `@mittise/ui`
3. **Consistent Styling:** Green/orange brand palette across web and mobile

---

## Architecture

### Monorepo Structure

```
┌─────────────────────────────────────┐
│         Root Workspace              │
│  (Turborepo orchestration)          │
└─────────────────────────────────────┘
           │
           ├─── apps/web (Next.js)
           │    └─── Dependencies: @mittise/ui, @mittise/types
           │
           ├─── apps/mobile (Expo)
           │    └─── Dependencies: @mittise/ui, @mittise/types
           │
           └─── packages/
                ├─── ui (shared constants)
                └─── types (shared interfaces)
```

### Build Pipeline (Turborepo)

```
pnpm dev
  ├─── turbo run dev
  │    ├─── apps/web:dev (Next.js dev server)
  │    └─── apps/mobile:dev (Expo Metro bundler)
  │
pnpm build
  ├─── turbo run build
  │    ├─── packages/types:typecheck
  │    ├─── packages/ui:typecheck
  │    ├─── apps/web:build
  │    └─── apps/mobile:build
```

### Development Workflow

1. **Web:** Node 20 + Next.js + Turbopack → http://localhost:3000
2. **Mobile:** Expo Metro → Scan QR in Expo Go → Live reload
3. **Shared Code:** Changes in packages/ hot-reload in both apps

---

## Commands Reference

### Running Servers

**Web:**

```bash
cd apps/web
pnpm dev
# → http://localhost:3000
```

**Mobile:**

```bash
cd apps/mobile
pnpm start
# → Scan QR code with Expo Go
```

**Clear Cache:**

```bash
# Web
cd apps/web && rm -rf .next .turbo && pnpm dev

# Mobile
cd apps/mobile && pnpm start -c
```

### Build & Validation

```bash
# Typecheck all workspaces
pnpm typecheck

# Lint all workspaces
pnpm lint

# Build production
pnpm build
```

---

## Issues Resolved

### 1. Expo Router Entry Resolution Error

**Problem:** `Unable to resolve module expo-router/entry`  
**Root Cause:** Manual Metro config conflicted with SDK 54 auto-detection + React version mismatch  
**Solution:**

- Removed manual Metro configuration (watchFolders, nodeModulesPaths, disableHierarchicalLookup)
- Aligned React to v19.1.0 and react-native-web to ^0.21.0
- Simplified babel.config.js to just `babel-preset-expo`

### 2. Node Version Incompatibility

**Problem:** Next.js 16 requires Node >=20.9.0  
**Solution:** Upgraded from Node 18.20.8 to Node 20.19.6 via nvm

### 3. TypeScript Module Resolution

**Problem:** `Cannot find module '@mittise/ui'`  
**Solution:** Added explicit TypeScript paths in apps/web/tsconfig.json

### 4. Package.json Corruption

**Problem:** Root package.json became empty during dependency cleanup  
**Solution:** Recreated with proper Turborepo configuration

---

## Day 1 Achievements ✅

### Infrastructure

- ✅ Monorepo bootstrapped with Turborepo + pnpm workspaces
- ✅ Node.js 20 LTS environment configured
- ✅ Git repository initialized with proper .gitignore
- ✅ Code quality tooling (ESLint, Prettier, TypeScript strict mode)

### Web Platform

- ✅ Next.js 16 app running on http://localhost:3000
- ✅ Tailwind v4 with brand gradient (green-50 to orange-50)
- ✅ TypeScript compilation passing
- ✅ Turbopack fast refresh enabled
- ✅ SEO metadata configured

### Mobile Platform

- ✅ Expo SDK 54 app running on Metro bundler
- ✅ Expo Router navigation configured
- ✅ QR code available for Expo Go testing
- ✅ React 19 aligned with SDK 54 requirements
- ✅ Metro auto-detecting monorepo structure

### Shared Code

- ✅ packages/ui exporting BRAND_NAME and BRAND_COLORS
- ✅ packages/types with ProductSummary, Box, User interfaces
- ✅ Both apps successfully importing from shared packages

### UI/UX

- ✅ Consistent MittiSe branding across web and mobile
- ✅ "MittiSe - Wellness starts here" tagline displayed
- ✅ Platform badges ("Web Platform" / "Mobile Platform")
- ✅ Brand color palette applied

---

## Next Steps (Day 2 Preview)

1. **Shopify Integration:** Connect Shopify Storefront API for product data
2. **Supabase Setup:** Initialize database for custom content (rituals, recipes, streaks)
3. **NativeWind:** Re-add mobile styling framework after confirming base stability
4. **Navigation:** Implement routing structure for Boxes, Products, Content pages
5. **Deployment:** Connect web app to Vercel for continuous preview

---

## Notes

- **Expo Go Compatibility:** Using hoisted node-linker and simplified Metro config ensures Expo Go works reliably
- **SDK 54 Auto-Detection:** Expo now auto-configures Metro for monorepos; manual config causes conflicts
- **TypeScript Strict:** All packages enforce strict type checking for production readiness
- **Hot Reload:** Both platforms support instant refresh during development
- **Version Alignment:** Critical to match React versions to Expo SDK expectations (SDK 54 = React 19)

---

**Status:** ✅ Day 1 Complete - Both web and mobile servers running successfully with demo UI
