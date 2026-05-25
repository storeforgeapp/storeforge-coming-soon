# Storeforge UI Design Specification

This document serves as the visual and structural blueprint for implementing the Storeforge Landing Page and Dashboard Preview UI.

---

## 1. Visual System & Design Tokens

### 1.1 Color Palette

#### Primary Brand Colors
- **Primary Color (`--color-primary`)**: `#020F31` (Used for headers, primary waitlist buttons, and dark elements).
- **Mint Green (`--color-mint`)**: `#29d49a` (Used for the "Forge" brand accent, active state items, and the main CTA "Edit Website").
- **Amber Gold (`--color-amber`)**: `#d97706` / `#fbbf24` (Used for pending state text/badges e.g., "Store setup in progress").

#### Neutrals & Text
- **Background (`--background`)**: `#f5f7fb`
- **Text Primary (`--text-primary`)**: `#000000` (High readability text).
- **Text Muted (`--text-muted`)**: `#666666` (Muted gray for subtitles and captions).
- **Navbar Links (`--color-navbar-links`)**: `#1A1A1A`

#### Borders & Stroke
- **Stroke (`--color-stroke`)**: `#DEE5ED`
- **Stroke Secondary (`--color-stroke-secondary`)**: `#0700C7`

### 1.2 Typography
- **Primary Font**: **Rethink Sans** (Sans-serif)
  - Used for both headings and body text.
  - Weights: `Regular`, `Medium`, `Bold`

#### Sizes
- **Biggest Text Size**: `68px`, `150%` line height
- **Smallest Size**: `12px`

### 1.3 Depth & Shadows
- **Navbar & Main Container Glassmorphism**:
  - `backdrop-filter: blur(12px)`
  - `background: rgba(255, 255, 255, 0.65)`
  - `border: 1px solid rgba(255, 255, 255, 0.4)`
- **Soft Glow Shadows**:
  - `box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.08)`

---

## 2. Component Specifications

### 2.1 Page Background
- **Dot Grid Pattern**: A repeating SVG background featuring fine, light gray dots spaced `24px` apart.
- **Radial Glow**: A central soft radial gradient (`radial-gradient(circle at top, rgba(41,212,154,0.08) 0%, rgba(255,255,255,0) 70%)`) to create warmth and focal focus.

### 2.2 Capsule Navigation Bar
- **Shape**: Centered floating capsule (`border-radius: 9999px`) with padding `12px 24px`.
- **Structure**:
  - **Left**: Storeforge logo. Green shopping bag icon paired with `"Store"` in Deep Navy and `"Forge"` in Mint.
  - **Center**: Links ("Pricing", "Features", "Blog", "FAQs") styled with soft gray colors and a bottom-border hover transition.
  - **Right**: `"Get Early Access"` primary button in Deep Navy.

### 2.3 Hero Section
- **Title**: `"Build Your Dream Store in Minutes, Not Months."`
  - Stacked in two lines.
  - Font size: `clamp(2.5rem, 5vw, 4rem)`.
  - Color: Deep Charcoal/Navy.
- **Subheadline**: `"Sell via website + WhatsApp – no coding needed. Join the Storeforge waitlist for early access and launch updates."`
  - Max width: `60ch`.
  - Spacing: `24px` top margin.

### 2.4 Waitlist input Capsule
- **Structure**:
  - Input field and button housed within a single outer pill-shaped container (`border-radius: 9999px`, light gray background, thin border).
  - Input: Borderless, placeholder `"Enter Your Email"`.
  - Button: `"Join Waitlist"` capsule button aligned to the right inside the container.

### 2.5 Floating Badges
- Stylized speech-bubble labels showing core platform capabilities: **Orders**, **Analytics**, **Launch**, **Payments**.
- Colored dark charcoal/black with tiny directional indicator points.
- Floating physics (subtle `translateY` animation) to give depth to the viewport.

### 2.6 Dashboard Preview (Dark Theme UI)
A rich preview of the store dashboard, displaying a glassmorphic dark container:
- **Sidebar Navigation**:
  - User details header: `"Dimith Dananjana.."` with an avatar.
  - Active item: `"Dashboard"` showing a neon outline, mint text, and background fill.
  - Navigation items: `"Products"`, `"Orders"`, `"Customers"`, `"Inbox"`, `"Payments"`, `"Analytics"`.
- **Main Dashboard Section**:
  - **Title Area**: `"Build and manage your online store"` with setup status pills ("Store setup in progress", "Products: 0", "Store URL").
  - **Action Panel**:
    - Primary CTA: `"Edit Website"` in Mint green with dark text.
    - Secondary CTA: `"Add Product"` outlined button.
  - **Store Preview Mockup**: A dotted-line container with a store preview template.
  - **Data Modules**:
    - `"Revenue Trend"` graph canvas.
    - `"Quick Stats"` checklist showing counts for pending orders, conversations, and unreconciled payments.

---

## 3. Responsive Layout Guidelines

- **Mobile (< 640px)**:
  - Navbar becomes static or hides links in a hamburger menu.
  - Hero font scales down smoothly (`clamp` handles this).
  - Waitlist form shifts from inline to stacked layout to save space.
  - The Dashboard Preview wrapper scales using CSS transforms or hides sidebar elements to fit narrow viewports.
- **Tablet (640px - 1024px)**:
  - Navigation links appear.
  - Side-by-side elements in the dashboard preview wrap to a single column.
- **Desktop (> 1024px)**:
  - Full side-by-side grids, floating badges placed accurately at absolute viewport coordinates.
