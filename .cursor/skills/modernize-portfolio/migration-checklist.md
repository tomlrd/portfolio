# Migration Checklist for Portfolio Modernization

Use this checklist to systematically modernize the portfolio codebase.

## Phase 1: Foundation (Weeks 1-2)

### TypeScript Strictness
- [ ] Enable `strict: true` in `tsconfig.json`
- [ ] Run TypeScript compiler to identify all type errors
- [ ] Fix type errors:
  - [ ] Add explicit return types to all functions
  - [ ] Replace `any` with specific types
  - [ ] Fix component prop interfaces
  - [ ] Update context types

### Project Structure Refactoring
- [ ] Create `/src/types` directory for shared types
- [ ] Create `/src/hooks` directory for custom hooks
- [ ] Create `/src/utils` directory for utilities
- [ ] Create `/src/components/common` for reusable components
- [ ] Create `/src/components/sections` for feature components
- [ ] Move existing components to appropriate folders
- [ ] Update all import statements

### Linting & Code Quality
- [ ] Install ESLint and Prettier (if not already)
- [ ] Configure ESLint for React + TypeScript
- [ ] Run formatter on entire codebase
- [ ] Fix linting errors
- [ ] Set up pre-commit hooks (optional)

### Testing Setup
- [ ] Verify React Testing Library is configured
- [ ] Create `/src/components/__tests__` directory
- [ ] Write tests for 3 key components
- [ ] Ensure tests pass

## Phase 2: Components (Weeks 2-3)

### Convert to Modern Patterns
- [ ] **Header.tsx**
  - [ ] Convert to functional component (if needed)
  - [ ] Add TypeScript interface for props
  - [ ] Extract inline styles to Tailwind classes
  - [ ] Test responsive behavior
  
- [ ] **Footer.tsx**
  - [ ] Same as Header

- [ ] **Darkmode.tsx**
  - [ ] Convert to custom hook: `useDarkMode`
  - [ ] Use React Context for dark mode state
  - [ ] Update consumers to use hook

- [ ] **Project.tsx**
  - [ ] Add TypeScript types for project data
  - [ ] Extract repeated styles to `@apply` rules
  - [ ] Memoize if receives stable props

- [ ] **Gltf.tsx**
  - [ ] Review Three.js integration
  - [ ] Ensure performance optimizations (memo, suspense)
  - [ ] Add error handling

### Props & State Review
- [ ] [ ] Review all prop drilling (convert to Context if > 2 levels)
- [ ] [ ] Replace useState with useReducer for complex state
- [ ] [ ] Extract API calls to custom hooks
- [ ] [ ] Add proper TypeScript types to all state

## Phase 3: Pages (Weeks 3-4)

### Modernize Page Components
- [ ] **Main.tsx**
  - [ ] Review component structure
  - [ ] Add TypeScript types
  - [ ] Optimize renders (check React DevTools)
  - [ ] Extract sections to smaller components

- [ ] **Profile.tsx**
  - [ ] Same as Main

- [ ] **Projects.tsx**
  - [ ] Convert project list to use custom `useProjects` hook
  - [ ] Add pagination or virtualization if > 20 projects
  - [ ] Ensure accessibility (proper headings, alt text)

- [ ] **Contact.tsx**
  - [ ] Add form validation (consider `react-hook-form`)
  - [ ] Add TypeScript types for form data
  - [ ] Add error handling for submissions
  - [ ] Add success/error feedback UI

- [ ] **Electron.tsx**
  - [ ] Review and optimize

### Add Accessibility
- [ ] [ ] Add semantic HTML (proper heading hierarchy)
- [ ] [ ] Add ARIA labels where needed
- [ ] [ ] Test keyboard navigation
- [ ] [ ] Test with screen reader
- [ ] [ ] Check color contrast ratios

## Phase 4: Styling (Week 4)

### Tailwind CSS Optimization
- [ ] Review all hardcoded colors - migrate to Tailwind
- [ ] Extract component classes to `@apply` rules in `input.css`
- [ ] Review responsive breakpoints - ensure mobile-first
- [ ] Add dark mode variants throughout
- [ ] Remove any inline `<style>` tags
- [ ] Build CSS: `npm run build:css`

### CSS Files Audit
- [ ] Review `App.css` - migrate to Tailwind or remove
- [ ] Review component-level CSS files
- [ ] Consolidate duplicated styles
- [ ] Ensure no CSS conflicts

### Theming
- [ ] Create CSS variables for theme colors
- [ ] Update `tailwind.config.js` to use CSS variables
- [ ] Test dark mode thoroughly
- [ ] Test light mode thoroughly

## Phase 5: i18n & Content (Week 5)

### Translation Structure
- [ ] [ ] Review translation files structure
- [ ] [ ] Ensure all UI strings are translated
- [ ] [ ] Add missing French translations
- [ ] [ ] Test language switching

### Content Updates
- [ ] [ ] Review portfolio content accuracy
- [ ] [ ] Update project descriptions
- [ ] [ ] Add missing project details
- [ ] [ ] Verify all links are working

## Phase 6: Performance (Week 5-6)

### Bundle Analysis
- [ ] [ ] Analyze bundle size: `npm run build && npm run analyze`
- [ ] [ ] Identify large dependencies
- [ ] [ ] Consider code splitting opportunities
- [ ] [ ] Review unused imports

### Lazy Loading
- [ ] [ ] Implement lazy loading for pages (React.lazy)
- [ ] [ ] Add loading fallbacks with Suspense
- [ ] [ ] Test performance with DevTools

### Image Optimization
- [ ] [ ] Convert PNG/JPG to WebP format
- [ ] [ ] Add responsive images with `<picture>`
- [ ] [ ] Use Next.js Image component (if migrating) or similar
- [ ] [ ] Compress images further if needed

### Three.js Optimization
- [ ] [ ] Review Gltf.tsx rendering performance
- [ ] [ ] Consider reducing model complexity
- [ ] [ ] Test on mobile devices
- [ ] [ ] Add loading indicator for model

## Phase 7: Testing & QA (Week 6-7)

### Unit Tests
- [ ] [ ] Write tests for utility functions
- [ ] [ ] Write tests for custom hooks
- [ ] [ ] Write tests for critical components
- [ ] [ ] Achieve > 80% coverage for critical paths

### Integration Tests
- [ ] [ ] Test page navigation
- [ ] [ ] Test form submissions
- [ ] [ ] Test language switching
- [ ] [ ] Test dark mode toggle

### Manual Testing
- [ ] [ ] Test on Chrome
- [ ] [ ] Test on Firefox
- [ ] [ ] Test on Safari
- [ ] [ ] Test on Edge
- [ ] [ ] Test on mobile (iOS Safari, Chrome Android)

### Accessibility Testing
- [ ] [ ] Run axe DevTools
- [ ] [ ] Test with keyboard only
- [ ] [ ] Test with screen reader
- [ ] [ ] Check focus indicators

### Performance Testing
- [ ] [ ] Run Lighthouse audit
- [ ] [ ] Check Core Web Vitals
- [ ] [ ] Test on slow network (3G)
- [ ] [ ] Test on slow device (Nexus 5X)

## Phase 8: Deployment (Week 7)

### Pre-deployment Checks
- [ ] [ ] All tests passing
- [ ] [ ] No TypeScript errors
- [ ] [ ] No console warnings/errors
- [ ] [ ] Lighthouse score > 90 on mobile
- [ ] [ ] All links verified
- [ ] [ ] All images loading
- [ ] [ ] Dark mode working
- [ ] [ ] All languages working

### Build & Deploy
- [ ] [ ] Run full build: `npm run build`
- [ ] [ ] Test build locally: `npm install -g serve && serve -s build`
- [ ] [ ] Deploy to GitHub Pages: `npm run deploy`
- [ ] [ ] Verify deployed site
- [ ] [ ] Check GitHub Pages settings

### Post-deployment
- [ ] [ ] Monitor console for errors
- [ ] [ ] Check analytics (if any)
- [ ] [ ] Gather feedback
- [ ] [ ] Plan Phase 2 improvements

---

## Component Modernization Details

### Example: Converting Project.tsx

**Before (potentially):**
```typescript
function Project(props) {
  return (
    <div style={{ padding: '16px', backgroundColor: props.isDark ? '#1f2937' : '#fff' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
```

**After (modern):**
```typescript
interface ProjectProps {
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  link?: string;
}

export const Project: React.FC<ProjectProps> = memo(({
  title,
  description,
  imageUrl,
  tags = [],
  link,
}) => {
  return (
    <article className="card hover:shadow-xl">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </article>
  );
});

export default Project;
```

---

## Quick Command Reference

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Format code
npx prettier --write src/

# Build CSS
npm run build:css

# Full build
npm run build

# Deploy
npm run deploy

# Analyze bundle
npm run build && npm install -g webpack-bundle-analyzer && npx webpack-bundle-analyzer build/static/js/main.*.js
```

---

## Resources & Links

- [React Docs (Modern/18)](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/en/main)
- [React Testing Library](https://testing-library.com/react)
- [Accessibility (a11y)](https://www.a11y-project.com)
- [Web Vitals](https://web.dev/vitals/)
