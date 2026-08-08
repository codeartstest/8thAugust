# Design: About Cambodia Website

## Architecture

Single-page static website. All content is hardcoded in HTML, styled with CSS, and enhanced with vanilla JavaScript for navigation behavior.

## File Structure

```
8thAugust/
|-- index.html      Main page with all sections
|-- styles.css      Responsive styling, Cambodia-themed colors
|-- script.js       Sticky nav scroll effect, mobile hamburger toggle
```

## Components

### 1. Header + Navigation Bar
- Sticky `<header>` element at top
- `<nav>` with anchor links to each section
- Desktop: horizontal nav bar
- Mobile: hamburger icon toggles vertical menu

### 2. Content Sections
Each section is a `<section>` with `id` for anchor navigation:
- `#history` — Khmer Empire, French colonization, modern era
- `#geography` — Location, borders, Mekong, Tonle Sap
- `#population` — ~17M people, demographics, ethnic groups
- `#language` — Khmer script, common phrases

### 3. Footer
- Copyright notice
- Quick navigation links

## Styling

- Color palette: deep red (#9E1B32), gold (#D5A021), white (#FFFFFF)
- Typography: system fonts (no external font imports)
- Responsive: CSS media query at 768px breakpoint
- Layout: max-width container (1200px), centered content

## JavaScript

- Mobile menu toggle (hamburger click → show/hide nav)
- Smooth scroll on nav link click
- Active section highlighting in nav bar on scroll

## Error Handling

- No dynamic data — no error states needed
- Graceful degradation: if JS disabled, nav links still work as anchor jumps