# Andrew Baek Portfolio Design System

## 5. Layout

### Container
- Max-width: 1200px
- Side padding: 24px on desktop, 20px on mobile

## 6. Component Patterns

### Cards
- Border-radius: 20px
- Border: uses `var(--card-border)` (currently `transparent` — no visible stroke)
- Padding: 48px on desktop, 32px on mobile
- Hover state: stays the same

### Bento Layout
- The site uses a card-based bento layout where each major section lives inside its own card.
- Cards have generous internal padding and clear visual containment.
- Multiple cards on the same page sit on the `bg-primary` background with `space-md` (24px) gaps between them.
- This creates a layered feel: warm background, distinct content cards.

## 14. Theme Modes

The site supports both light and dark modes.

- **Default**: Light mode tokens are defined in `:root`.
- **Explicit override**: `[data-theme="dark"]` on `<html>` activates dark tokens. Set via the nav toggle, persisted in `localStorage`.
- **System preference**: Respected via `@media (prefers-color-scheme: dark)` targeting `:root:not([data-theme])` — CSS-only fallback when no explicit override exists.
- **No flash**: An `is:inline` script in `<head>` reads `localStorage` (or system preference) and sets `data-theme` before the body renders.
- **Toggle**: A sliding pill toggle in the nav. Track background is `#FFFFFF` in light mode and `#333333` in dark mode (track stays neutral; the moon/sun icon inside the sliding thumb carries the accent color via `var(--text-accent)`).
- **Card borders**: Cards use `--card-border: transparent` (not `--border`), giving them no visible stroke in either mode. The nav pill continues to use `--border`.
- **Nav positioning**: `position: fixed; top: 24px` on both desktop and mobile. The pill is centered horizontally with a `pointer-events: none` parent so the empty area beside it doesn't intercept clicks.
- **Token rule**: All component styles must reference CSS tokens. Never use hardcoded color values.
- **Accent colors (split surface vs. text/icons)**:
  - `--accent` (solid fallback, e.g. for buttons or non-gradient surfaces): `#E5A77A` (warm pastel peach) in both modes. `--accent-hover`: `#D8945E`.
  - `--accent-gradient` (project card fill): `linear-gradient(to bottom, #F99E67, #FAB771)` in both modes. The gradient is the primary look for project card backgrounds; `--accent` is the solid fallback.
  - `--text-accent` (text, icons, small marks like the nav dot or link underlines): `#C2410C` in light mode (deeper burnt orange reads better on white), `#FB923C` in dark mode.
  - **Rule**: use `--accent-gradient` for filled surfaces; for any text or icon color, use `--text-accent`. Use `--accent` only when a gradient isn't appropriate (e.g. small chips).
- **Nav pill background**: `--nav-pill-bg` is a solid neutral — `#F3F5F6` in light mode, `#2A2A2A` in dark mode. No glass / backdrop-filter effect; the solid bg keeps the menu legible when scrolling over saturated content (project cards). The pill uses `--border` for its 1px stroke and a soft `box-shadow` for separation.
- **Project hover spotlight**: Hovering a `.project-cta` triggers a CSS `:has()`-driven spotlight: the hovered project's `.project-content` stays at full opacity while every other project's content + the hero section drop to `opacity: 0.08` (barely visible). The nav pill is excluded from this dim so menu access is preserved.
- **Project card hover reveal**: Each project card has an optional `headline` + `meta` text block that's `position: absolute` behind the card by default and slides down out from underneath on `.project-cta:hover`. Because it's absolute it doesn't reserve layout space, so the gap between project cards stays at `var(--space-lg)` regardless of hover state.
- **Project scroll animation**: Each `.project` reads two CSS variables driven by a scroll listener (`--scroll-scale`, `--scroll-opacity`). Cards scale from `0.92 → 1` over a 120-px scroll window as their top crosses the viewport bottom, and fade in/out symmetrically. The first card is at full state at scroll top; the last card is at full state at scroll bottom; cards in between animate continuously as the user scrolls. Disabled under `prefers-reduced-motion`.
