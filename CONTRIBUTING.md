# Contributing to House of Laline

Guidelines for maintaining doctrinal fidelity while developing.

## Philosophy First

Every change must honor LALINE Doctrine. If a feature would violate doctrine, the feature is wrong—not the doctrine.

## Content Guidelines

### Adding New Content

**Text Essays:**
1. Use existing essay structure as template
2. Assign sequential T## number
3. Calculate reading time (250 words/min average)
4. Add to Texts collection page
5. Cross-reference with related Plates

**Plates:**
1. Choose appropriate Edition
2. Assign E##-P## number sequentially
3. Follow plate format: Statement, Context, Application, Citation
4. Maximum 500 words
5. Add to Plates collection under correct edition

**Works:**
1. Define single expression slot
2. Create preview page
3. Link to purchase (Gumroad)
4. Add to Works collection

### Writing Style

- **Declarative**, not conversational
- **Precise** language, no hedging
- **Evidence-based** claims only
- **No promotional** language
- **Citable** statements (Plates especially)

## Code Guidelines

### Structure
- Keep components minimal
- Follow existing file naming
- Maintain nav hierarchy
- Preserve breadcrumb patterns

### JavaScript
- Only when necessary (instruments, interactivity)
- Never for content reading
- Document why JS is needed
- Provide no-JS fallback where possible

### Styling
- Use global CSS variables
- Follow existing spacing system
- Maintain paper texture
- Test mobile responsiveness

### Performance
- Keep pages < 500KB total
- Optimize images
- Minimize dependencies
- Static generation preferred

## Doctrine Compliance Checklist

Before committing changes, verify:

- [ ] Fixed navigation remains visible
- [ ] Hierarchy is clear (single entry point)
- [ ] No promotional language added
- [ ] No dark patterns introduced
- [ ] URLs are permanent/semantic
- [ ] Mobile responsive
- [ ] Accessible (semantic HTML)
- [ ] Consistent spacing
- [ ] Paper texture intact

## Instrument Development

New instruments must:

1. **Ask one clear question** - Binary or ternary answer
2. **Measure intent vs execution** - Not taste
3. **Issue verdict** - PASS / CAUTION / BREACH
4. **Provide rationale** - Evidence-based explanation
5. **Be immediately useful** - No learning curve

### Instrument Template

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout title="[Tool Name]" currentPath="/instruments/[slug]">
  <div class="breadcrumb">...</div>
  
  <article class="instrument-page">
    <header>
      <div class="instrument-meta">
        <span class="instrument-number">I##</span>
      </div>
      <h1>[Tool Name]</h1>
      <p class="abstract">[One-line purpose]</p>
    </header>

    <section class="instrument-explanation">
      <h2>Purpose</h2>
      <p>[Why this matters]</p>

      <h2>Methodology</h2>
      <p>[How it works]</p>
    </section>

    <div class="tool-container">
      <h2>[Tool Name]</h2>
      <!-- Interactive tool here -->
    </div>
  </article>
</BaseLayout>
```

## Git Workflow

### Branches
- `main` - Production ready
- `develop` - Active development
- `feature/[name]` - New features
- `fix/[name]` - Bug fixes

### Commits
Format: `[type]: [description]`

Types:
- `content:` - New essays, plates, doctrine
- `feature:` - New functionality
- `fix:` - Bug fixes
- `docs:` - Documentation only
- `style:` - Design system changes
- `refactor:` - Code restructure
- `instrument:` - New calibration tools

Examples:
```
content: Add T08 Typography essay
feature: Add Spacing Auditor instrument
fix: Mobile nav collapse on iOS
docs: Update README with v1.1 roadmap
instrument: Improve Contrast Validator algorithm
```

### Pull Requests
- Clear description of change
- Rationale for why
- Screenshots for visual changes
- Checklist completion
- Link to relevant TODO items

## Testing

Before merging:

1. **Build succeeds** - `npm run build`
2. **Dev server works** - `npm run dev`
3. **Mobile tested** - Responsive design intact
4. **Links work** - No 404s
5. **Cross-references** - Plates ↔ Texts connected
6. **Breadcrumbs** - All pages have correct trails
7. **Numbering** - Sequential, no gaps

## Versioning

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (2.0.0) - Doctrine changes, breaking structure
- **MINOR** (1.1.0) - New content, features, instruments
- **PATCH** (1.0.1) - Bug fixes, copy edits, refinements

Update:
1. `package.json` version
2. `CHANGELOG.md` with changes
3. Git tag with version

## Questions?

When in doubt:
1. Check existing patterns
2. Consult Doctrine
3. Ask: "Does this honor stated intent?"
4. Refer to Manifesto principles

---

**Remember:** This site is itself an implementation of LALINE Doctrine. Every change should demonstrate the principles, not just describe them.
