# House of Laline - Astro Site

A structured knowledge system built with Astro following the LALINE Doctrine.

## Project Structure

```
laline-astro/
├── src/
│   ├── components/
│   │   └── Navigation.astro       # Left navigation component
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Standard page layout
│   │   └── LandingLayout.astro    # Landing page layout
│   ├── pages/
│   │   ├── index.astro            # Landing/home page (Option 4)
│   │   ├── index-page.astro       # Index page (Option 2)
│   │   └── collections.astro      # Collections listing page
│   └── styles/
│       └── global.css             # Global styles & paper texture
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Design System

### Colors
- Background: `#EFEFF1` (cool grey)
- Nav Background: `#F6F6F8` 
- Text: `#1a1a1a`
- Secondary Text: `#4A4035` (warm brown)
- Tertiary Text: `#6a6a6a`
- Border: `#D5D5D8`

### Typography
- Font: Crimson Text (Google Fonts)
- Fallback: Georgia, Times New Roman, serif

### Key Features
- Paper texture background (crosshatch + noise)
- Left navigation with collapsible sections
- Section numbering system (1.0, 2.1, etc.)
- Hierarchical visual connections
- Warm brown secondary text
- Responsive mobile layout

## Page Types

### Landing Page (`index.astro`)
- Uses LandingLayout
- Typographic statement layout (Option 4)
- "House of Laline" with small italic "of"
- Centered content

### Index Page (`index-page.astro`)
- Uses BaseLayout
- Editorial layout (Option 2)
- Breadcrumb navigation
- Section descriptions

### Collections Page (`collections.astro`)
- Uses BaseLayout
- Numbered list of collections
- Metadata for each entry
- Breadcrumb navigation

## Adding New Pages

1. Create new `.astro` file in `src/pages/`
2. Import `BaseLayout` or `LandingLayout`
3. Pass `currentPath` prop for nav highlighting
4. Follow existing patterns for consistency

Example:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Your Page" currentPath="/your-page">
  <!-- Your content here -->
</BaseLayout>
```

## Navigation Structure

Edit navigation items in `src/components/Navigation.astro`:
- Update `navigationSections` array
- Add/remove items as needed
- Nested items supported with `nested` array

## Doctrine Compliance

This implementation follows the LALINE Doctrine:
- Fixed, predictable navigation
- Hierarchical structure
- No promotional language
- Consistent page templates
- Permanent, stable URLs
- Minimal interactivity (collapsible sections only)
