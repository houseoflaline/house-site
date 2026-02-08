# House of Laline

> A design methodology publishing house built on structural principles, not trends.

## Overview

House of Laline is a complete knowledge system for design thinking, built around the **LALINE Doctrine**: unambiguous access to structured knowledge through permanent, hierarchical architecture.

This site demonstrates the principles it teaches through its own structure.

## What's Built (v1.0)

### Core Content
- **Doctrine** - Complete system rules (6 sections)
- **Manifesto** - Philosophical foundations (Part I: 4 principles complete)
- **7 Text Essays** - 106 min total reading on cognitive psychology & design
- **12 Plates** - Citable design maxims across 2 editions
- **5 Works** - Editorial structures (listed, detail pages pending)

### Instruments (Calibration Tools)
- **Contrast Validator** - Measures intent vs execution for contrast ratios
- **Hierarchy Checker** - Detects competing focal points
- 2 more planned (Spacing Auditor, Stillness Detector)

### Navigation & Structure
- Hierarchical left nav with connecting lines
- Breadcrumb trails throughout
- Cross-referenced content (Plates ↔ Texts)
- Paper texture design system

## Design System

**Colors:**
```
Background:    #EFEFF1
Nav:           #F6F6F8
Text:          #1a1a1a
Secondary:     #4A4035 (warm brown)
Border:        #D5D5D8
```

**Typography:**
- Body: Crimson Text (Google Fonts)
- Monospace: Courier New
- Special: "of" at 0.4em italic spacing

**Layout:**
- Left nav: 300px fixed
- Content max-width: 700-900px (varies by type)
- Paper texture: Crosshatch + SVG noise overlay

## Tech Stack

- **Astro 4.x** - Static site generator
- **No JavaScript** for content reading (Doctrine compliant)
- JavaScript only for:
  - Nav collapse functionality
  - Instrument calculation tools
  - Interactive elements

## Project Structure

```
src/
├── components/
│   └── Navigation.astro           # Hierarchical nav with nested sections
├── layouts/
│   ├── BaseLayout.astro           # Standard content pages
│   └── LandingLayout.astro        # Dramatic entry page
├── pages/
│   ├── index.astro                # Landing page
│   ├── index-page.astro           # Master directory
│   ├── doctrine.astro             # System rules
│   ├── manifesto/
│   │   ├── manifesto.astro        # Overview
│   │   ├── foundations.astro      # Part I listing
│   │   └── foundations/
│   │       ├── restraint.astro    # I.1
│   │       ├── authority.astro    # I.2
│   │       ├── pacing.astro       # I.3
│   │       └── silence.astro      # I.4
│   ├── texts/
│   │   ├── texts.astro            # Essay collection
│   │   ├── attention.astro        # T01
│   │   ├── cognitive.astro        # T02
│   │   ├── contrast.astro         # T03
│   │   ├── gestalt.astro          # T04
│   │   ├── human-patterns.astro   # T05
│   │   ├── sequence.astro         # T06
│   │   └── the-silence.astro      # T07
│   ├── plates/
│   │   ├── plates.astro           # Both editions
│   │   ├── emphasis.astro         # E02-P01
│   │   ├── balance.astro          # E02-P02
│   │   ├── contrast-principle.astro # E02-P03
│   │   ├── repetition.astro       # E02-P04
│   │   ├── proportion.astro       # E02-P05
│   │   ├── movement.astro         # E02-P06
│   │   └── white-space.astro      # E02-P07
│   ├── instruments/
│   │   ├── instruments.astro      # Tool overview
│   │   ├── contrast-validator.astro # I01 (working)
│   │   └── hierarchy-checker.astro  # I02 (working)
│   └── works.astro                # Editorial structures
└── styles/
    └── global.css                 # Design system + texture
```

## Setup & Development

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Philosophy

This site follows **LALINE Doctrine** principles:

- **Restraint** - Remove competing signals so hierarchy becomes inevitable
- **Authority** - Emerges through coherence held over time
- **Pacing** - Controls when information is revealed, shaping understanding
- **Silence** - Communicates through deliberate absence

See `/doctrine` for complete system rules and structural logic.

## Content Architecture

### Page Types (per Doctrine)
1. **Entry Point** - Landing page, single purpose
2. **Index** - Master directory with metadata
3. **Collection** - Grouped content (Texts, Plates, Works)
4. **Document** - Individual content pages

### Numbering System
- Primary sections: `1.0`, `2.0`, `3.0`
- Nested items: `3.1`, `3.2`
- Sub-items: `3.1.1`, `3.1.2`
- Plates: `E01-P01` (Edition-Plate)
- Texts: `T01`, `T02`

## Business Model

**Free Content (Thought Leadership):**
- Doctrine, Manifesto, Texts, Plates
- Basic instruments
- Methodology writing

**Paid Products (Revenue):**
- Works (editorial structures via Gumroad)
- Premium instruments
- Doctrine consultation

**Future Vision:**
- Methodology company, not template shop
- Design validation tools
- AI-proof through thinking-first approach

## Launch Status

**✅ v1.0 - LAUNCH READY**

Core complete:
- 40+ pages built
- 7 complete essays
- 12 citable plates
- 2 working instruments
- Mobile responsive
- Doctrine compliant

**Next Phase (v1.1):**
- Works detail pages
- Manifesto Parts II & III
- 2 additional instruments
- Downloadable Doctrine PDF
- Edition 03 Plates (advanced topics)

## Adding Content

### New Text Essay
1. Create `src/pages/texts/your-essay.astro`
2. Use standard Text template
3. Add to `texts.astro` collection
4. Update meta (reading time, T## number)

### New Plate
1. Create `src/pages/plates/your-plate.astro`
2. Use Plate template with citation format
3. Add to `plates.astro` in appropriate edition
4. Assign E##-P## number

### New Instrument
1. Create `src/pages/instruments/your-tool.astro`
2. Include: Purpose, Methodology, Working tool
3. Add to `instruments.astro` overview
4. Assign I## number

## Key Principles

**Doctrine Compliance:**
- Fixed navigation (always visible)
- No dark patterns
- No promotional language
- Permanent URLs
- Semantic HTML
- Minimal JavaScript

**Cross-Referencing:**
- Plates link to related Texts
- Texts reference Plates
- Manifesto connects to everything
- Creates knowledge web

**Visual Hierarchy:**
- Clear entry points
- Consistent spacing
- Monospace numbering
- Paper texture grounding

## License

Content © 2026 House of Laline. All rights reserved.

## Contact

Built with structural discipline.  
Maintained with doctrinal fidelity.

---

*This site is itself an implementation of LALINE Doctrine. The structure teaches the principles.*
