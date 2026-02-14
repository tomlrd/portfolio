# Modernize Portfolio Skill

**Description:** Modernize portfolio codebase for React 18 with TypeScript, Tailwind CSS, and GitHub Pages. Use this skill when refactoring components, improving type safety, updating styling, or optimizing the portfolio for production deployment.

---

## What This Skill Provides

This skill includes comprehensive guidance for modernizing your portfolio project with industry best practices:

### 📚 Documentation Files

1. **SKILL.md** (Main file)
   - Component modernization patterns
   - File organization guidelines
   - i18n integration
   - GitHub Pages deployment checklist
   - Performance optimization patterns
   - Testing patterns

2. **patterns.md** (Advanced patterns)
   - Advanced component patterns (render props, HOCs, etc.)
   - State management patterns (Context + Reducer)
   - Custom hooks for complex logic
   - Tailwind CSS advanced patterns
   - Performance deep dive
   - Error handling & resilience
   - TypeScript strict mode patterns
   - Accessibility patterns

3. **migration-checklist.md** (Step-by-step plan)
   - 8-week phased migration plan
   - Specific tasks for each phase
   - Component-by-component modernization guide
   - Testing & QA checklist
   - Deployment guide

4. **tailwind-setup.md** (Styling reference)
   - Extended Tailwind configuration
   - Dark mode implementation
   - Responsive design patterns
   - Performance tips
   - Common issues & solutions
   - CSS variables for theming

5. **examples.md** (Ready-to-use code)
   - Essential custom hooks
   - Reusable components with full code
   - Context patterns
   - Utility functions
   - Complete component example
   - TypeScript type definitions

---

## Quick Start

### 1. Understanding Your Current Stack

Your portfolio currently uses:
- **React 18.3** with TypeScript
- **React Router v6** (HashRouter for GitHub Pages)
- **Tailwind CSS v3.4**
- **i18next** for EN/FR translations
- **Three.js + React Three Fiber** for 3D graphics
- **Deployed via GitHub Pages**

### 2. Recommended First Steps

1. **Review the migration checklist** (`migration-checklist.md`)
2. **Understand component patterns** (main SKILL.md)
3. **Check advanced patterns** if you encounter complex scenarios (`patterns.md`)
4. **Reference code examples** when implementing (`examples.md`)
5. **Optimize styling** using Tailwind guide (`tailwind-setup.md`)

### 3. Apply When:

- Creating or refactoring React components
- Improving TypeScript type safety
- Updating styling with Tailwind
- Optimizing for performance
- Preparing for GitHub Pages deployment
- Adding new features
- Converting class components to functional
- Extracting component logic to hooks
- Setting up forms or state management
- Implementing dark mode
- Ensuring accessibility

---

## Key Principles

### 1. Type Safety First
- Enable TypeScript strict mode
- Use explicit types for all props and state
- Leverage union types and discriminated unions
- Avoid `any` type

### 2. Component Design
- Keep components under 300 lines
- Extract logic to custom hooks
- Use composition over inheritance
- Memoize expensive computations

### 3. Styling
- Use Tailwind utilities instead of inline styles
- Extract repeated classes with `@apply`
- Apply dark mode variants throughout
- Use responsive-first approach (mobile-first)

### 4. Performance
- Lazy load pages and heavy components
- Memoize components and callbacks
- Use proper keys in lists
- Optimize images (WebP format)

### 5. Accessibility
- Use semantic HTML
- Add ARIA labels where needed
- Test keyboard navigation
- Ensure color contrast

### 6. Deployment
- Use HashRouter (already configured)
- All paths must be relative
- Build CSS before deployment
- Test on actual GitHub Pages URL

---

## File Structure

```
.cursor/skills/modernize-portfolio/
├── SKILL.md                      # Main skill (component & styling patterns)
├── patterns.md                   # Advanced patterns & techniques
├── migration-checklist.md        # Step-by-step 8-week plan
├── tailwind-setup.md            # Tailwind configuration & setup
├── examples.md                   # Ready-to-use code snippets
└── README.md                     # This file
```

---

## Common Tasks & Where to Find Help

| Task | Location |
|------|----------|
| Create new component | SKILL.md → Component Modernization Patterns |
| Convert class to functional | SKILL.md → Common Refactoring Tasks |
| Extract component logic | patterns.md → State Management Patterns |
| Create custom hook | examples.md → Essential Hooks |
| Style a component | SKILL.md → Tailwind CSS Best Practices |
| Set up forms | examples.md → FormInput Component |
| Implement dark mode | tailwind-setup.md → Dark Mode Implementation |
| Improve performance | patterns.md → Performance Deep Dive |
| Add accessibility | patterns.md → Accessibility Patterns |
| Plan refactoring | migration-checklist.md → All phases |

---

## Example Workflow

### Scenario: Modernize a Form Component

1. **Read** migration-checklist.md to understand the phase for forms
2. **Review** SKILL.md → Reusable Component section for patterns
3. **Check** examples.md → FormInput Component for ready-to-use code
4. **Reference** patterns.md → TypeScript Strict Mode for type safety
5. **Apply** Tailwind best practices from SKILL.md
6. **Test** using patterns.md → Testing Patterns

---

## Version & Updates

**Skill Name:** modernize-portfolio  
**Created:** January 2026  
**Portfolio Version:** React 18.3, TypeScript 4.9, Tailwind 3.4  

This skill is project-specific and stored in `.cursor/skills/modernize-portfolio/` within your repository.

---

## Integration with Cursor

This skill is automatically available to Cursor when working on this portfolio project. The agent will:

- Suggest this skill when you mention modernization, refactoring, or improvements
- Apply patterns and best practices from the skill
- Reference specific sections as needed
- Generate code following the patterns defined

You can also explicitly request the skill by mentioning "modernize", "portfolio", "React patterns", or "TypeScript components".

---

## Next Steps

1. **Start Phase 1** of migration-checklist.md (TypeScript strictness)
2. **Review your App.tsx** to understand current structure
3. **Pick one component** to modernize as a pilot
4. **Follow patterns** from this skill
5. **Test thoroughly** before moving to next component
6. **Iterate** through all phases

---

Good luck modernizing your portfolio! 🚀
