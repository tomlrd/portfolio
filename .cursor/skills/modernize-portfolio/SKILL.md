---
name: modernize-portfolio
description: Modernize portfolio codebase for React 18 with TypeScript, Tailwind CSS, and GitHub Pages. Use this skill when refactoring components, improving type safety, updating styling, or optimizing the portfolio for production deployment.
---

# Modernize Portfolio

Skill for modernizing the portfolio project with best practices in React 18, TypeScript, and Tailwind CSS while maintaining GitHub Pages compatibility.

## Quick Context

**Project Stack:**
- React 18.3 with TypeScript
- React Router v6 (HashRouter for GitHub Pages)
- Tailwind CSS v3.4 for styling
- i18next for internationalization (EN/FR)
- Three.js + React Three Fiber for 3D graphics
- Deployed via GitHub Pages

**Deployment:** GitHub Pages with gh-pages package (HashRouter for routing)

---

## Component Modernization Patterns

### 1. Functional Component with TypeScript

**Pattern:**
```typescript
import React from 'react';

interface ComponentProps {
  title: string;
  isDark?: boolean;
  onAction?: (value: string) => void;
}

export const ComponentName: React.FC<ComponentProps> = ({
  title,
  isDark = false,
  onAction,
}) => {
  return <div className="p-4">{title}</div>;
};

export default ComponentName;
```

**Key points:**
- Use `React.FC` type with explicit props interface
- Define optional props with `?` and provide defaults
- Keep components under 300 lines
- Extract complex logic to custom hooks

### 2. Custom Hooks for Logic Extraction

**Pattern for state management:**
```typescript
// hooks/useDarkMode.ts
import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return { isDark, setIsDark };
};
```

**Usage in component:**
```typescript
const { isDark, setIsDark } = useDarkMode();
```

### 3. Tailwind CSS Best Practices

**DO:**
- Use `className` with Tailwind utilities
- Extract repeated class combinations to `@apply` rules
- Use dark mode variants: `dark:bg-slate-900`
- Leverage responsive prefixes: `md:px-16`, `lg:grid-cols-3`

**Example component with Tailwind:**
```typescript
export const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="
    bg-white dark:bg-slate-800
    rounded-lg shadow-md dark:shadow-lg
    p-6 
    hover:shadow-lg dark:hover:shadow-xl
    transition-shadow duration-300
  ">
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
      {title}
    </h3>
    {children}
  </div>
);
```

**Extract reusable styles:**
```css
/* input.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 rounded-lg bg-blue-600 text-white 
           hover:bg-blue-700 transition-colors font-medium;
  }
  
  .card-container {
    @apply bg-white dark:bg-slate-800 rounded-lg 
           shadow-md dark:shadow-lg p-6;
  }
}
```

### 4. Props & TypeScript Type Patterns

**Avoid prop drilling - use compound components:**
```typescript
// Good: Compound component pattern
export const Form = ({ children }: { children: React.ReactNode }) => (
  <form className="space-y-4">{children}</form>
);

Form.Input = ({ label, ...props }) => (
  <div>
    <label>{label}</label>
    <input {...props} className="border rounded p-2" />
  </div>
);

// Usage:
<Form>
  <Form.Input label="Name" name="name" />
</Form>
```

**Union types for variants:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700',
  secondary: 'bg-gray-400 hover:bg-gray-500',
  danger: 'bg-red-600 hover:bg-red-700',
};
```

---

## File Organization Guidelines

**Recommended structure:**
```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, Card, etc.)
│   ├── layout/         # Layout components (Header, Footer)
│   └── sections/       # Feature-specific components
├── pages/              # Page components (routed)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions & helpers
├── types/              # TypeScript type definitions
├── context/            # React Context (if needed)
├── locales/            # i18n translation files
└── assets/             # Images, icons, static files
```

**Naming conventions:**
- Components: `PascalCase` - `UserProfile.tsx`
- Hooks: `camelCase` with `use` prefix - `useFetchData.ts`
- Utils: `camelCase` - `formatDate.ts`
- Constants: `UPPER_SNAKE_CASE` - `API_ENDPOINTS.ts`

---

## i18n Integration Pattern

**Usage in components:**
```typescript
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="p-4">
      <h1>{t('header.title')}</h1>
      <button onClick={() => i18n.changeLanguage('fr')}>
        {t('lang.french')}
      </button>
    </header>
  );
};
```

**Translation file structure (en/translation.json):**
```json
{
  "header": {
    "title": "Portfolio",
    "nav": { "projects": "Projects" }
  },
  "common": {
    "loading": "Loading..."
  }
}
```

---

## GitHub Pages Deployment Checklist

When preparing for deployment:

- [ ] All routes use HashRouter (already configured in App.tsx)
- [ ] `homepage` in package.json matches GitHub Pages URL
- [ ] Tailwind CSS builds to `public/output.css`
- [ ] No absolute paths - use relative paths only
- [ ] Images in `/public` or `/src/assets`
- [ ] Build succeeds: `npm run build`
- [ ] GitHub Actions workflow exists: `.github/workflows/static.yml`
- [ ] Environment variables handled (no exposed secrets)

**Build before deploy:**
```bash
npm run build:css  # Build Tailwind
npm run build      # Build React app
npm run deploy     # Deploy to GitHub Pages
```

---

## Performance Optimization Patterns

### Code Splitting
```typescript
// pages/HeavyPage.tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('../components/Heavy'));

export const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
  </Suspense>
);
```

### Memoization
```typescript
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ items }: Props) => {
  const processedItems = useMemo(() => {
    return items.map(item => transform(item));
  }, [items]);

  const handleClick = useCallback((id: string) => {
    // Handle click
  }, []);

  return <div>{processedItems.length}</div>;
});
```

### Image Optimization
```typescript
// Use WebP with fallback
<picture>
  <source srcSet="/images/photo.webp" type="image/webp" />
  <source srcSet="/images/photo.jpg" type="image/jpeg" />
  <img src="/images/photo.jpg" alt="Description" className="w-full" />
</picture>
```

---

## Common Refactoring Tasks

### Convert Class Component to Functional
If you encounter class components, convert to functional:

```typescript
// Before (class)
class OldComponent extends React.Component {
  state = { count: 0 };
  render() {
    return <div>{this.state.count}</div>;
  }
}

// After (functional)
export const ModernComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
```

### Remove prop-drilling with useContext
```typescript
// Create context
const ThemeContext = createContext<ThemeContextType>(defaultValue);

// Provider component
export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <ThemeContext.Provider value={themeValue}>
    {children}
  </ThemeContext.Provider>
);

// Use in component
const { theme } = useContext(ThemeContext);
```

---

## Testing Patterns

**Minimal testing setup with React Testing Library:**

```typescript
// components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    await userEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

---

## Additional Resources

- **Detailed patterns:** See [patterns.md](patterns.md) for advanced examples
- **Migration guide:** See [migration-checklist.md](migration-checklist.md) for step-by-step refactoring
- **Tailwind config:** See [tailwind-setup.md](tailwind-setup.md) for styling configuration

---

## When Applying This Skill

Apply this skill when:
1. Creating or refactoring React components
2. Improving TypeScript type safety
3. Updating component styling with Tailwind
4. Optimizing for performance
5. Preparing for GitHub Pages deployment
6. Adding new features to the portfolio
