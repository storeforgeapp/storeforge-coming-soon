<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Tech Stack, Frameworks & Libraries

This document provides developer guidelines and references for tools, frameworks, and libraries used in the Storeforge Web project.

---

## 1. Core Framework & Runtime

*   **Next.js (v16.2.4)**: Utilizing the modern App Router (`/app` directory layout) and React 19.
    *   **Guidance**: Note that Next.js 16/React 19 contains breaking API changes, deprecated features, and new hook semantics.
    *   **Routing**: All routes are placed inside the [app](file:///d:/Code/storeforge-web/app) directory (e.g., page components, layout configurations).
    *   **Server/Client Components**: Use the `"use client"` directive at the top of files that rely on React hooks, state, browser APIs, or interactive shadcn/ui components.

*   **React (v19.2.4) & React DOM (v19.2.4)**: Rely on standard JSX structures and React 19 rules.

*   **TypeScript (v5)**: Strict type checking is enabled. Always declare proper interfaces or type definitions for props, config themes, and state.

---

## 2. Styling System

*   **Tailwind CSS (v4)**: Modern Tailwind CSS is integrated via PostCSS.
    *   **Configuration**: Styled elements configure colors and themes inline or via CSS variables. Refer to [globals.css](file:///d:/Code/storeforge-web/app/globals.css) for the customized `@theme inline` mapping.
    *   **Fonts**: The design system relies on **Rethink Sans** (`font-sans` and `font-heading`) for all text styles, including headings, interactive UI, forms, and body copy.
    *   **Colors & Theme Variables**:
        *   `--primary` (`#020F31`): Primary brand accents, solid headers, waitlist CTAs.
        *   `--accent` (`#29d49a`): Active states, highlight tags, primary dashboard interactions.
        *   `--muted-foreground` (`#666666`): Subtext, descriptive captions.
        *   `--background` (`#f5f7fb`): Base page backdrop.
        *   `--border` (`#DEE5ED`): Stroke / border lines.

---

## 3. UI Component Library

*   **shadcn/ui**: The primary UI component library, built on top of Radix UI primitives.
    *   **Usage**: Components are added dynamically to `@/components/ui/` using the CLI.
    *   **Adding Components**: Run `pnpm dlx shadcn@latest add <component>` to pull component code directly into the workspace.
    *   **Customization**: Alter style definitions directly in the component files (e.g., [components/ui/button.tsx](file:///d:/Code/storeforge-web/components/ui/button.tsx)) or customize variables in [globals.css](file:///d:/Code/storeforge-web/app/globals.css).

---

## 4. Development Workflow & Commands

*   **Development Server**: Start using `npm run dev` or `npm run build` to verify production readiness.
*   **Linting**: Run `npm run lint` (`eslint`) to check syntax correctness and formatting rules.
*   **Design Compliance**: Refer to [DESIGN.md](file:///d:/Code/storeforge-web/DESIGN.md) for UX specs, grid alignments, spacing, and layout configurations.
