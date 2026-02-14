# Tailwind CSS Setup Guide

Guide for optimizing and extending Tailwind CSS configuration for the portfolio.

## Current Configuration

Your project uses:
- Tailwind CSS v3.4
- Build output: `public/output.css`
- Dark mode support (dark variant enabled)
- GitHub Pages deployment (CSS must be generated pre-build)

## Configuration Recommendations

### 1. Extend tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom portfolio colors
        "brand-primary": "#3b82f6",    // Blue
        "brand-secondary": "#8b5cf6",  // Purple
        "dark-bg": "#0f172a",          // Dark slate
        "dark-card": "#1e293b",        // Card dark
      },
      spacing: {
        // Custom spacing if needed
        "safe": "env(safe-area-inset-bottom)",
      },
      fontFamily: {
        // Custom fonts if added
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      animation: {
        // Custom animations
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  darkMode: "class", // Use class-based dark mode
  plugins: [],
};
```

### 2. Configure input.css

Place custom Tailwind directives and component classes:

```css
@tailwind base;

/* Base layer overrides */
@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-slate-900 dark:text-white;
  }
}

@tailwind components;

/* Component layer - reusable classes */
@layer components {
  /* Buttons */
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors duration-200 
           focus:outline-none focus:ring-2 focus:ring-offset-2
           disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700
           focus:ring-blue-500 dark:focus:ring-blue-400;
  }

  .btn-secondary {
    @apply btn bg-gray-200 text-gray-900 hover:bg-gray-300
           dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600;
  }

  .btn-danger {
    @apply btn bg-red-600 text-white hover:bg-red-700
           focus:ring-red-500;
  }

  .btn-outline {
    @apply btn border-2 border-current hover:bg-current 
           hover:text-white transition-all;
  }

  /* Cards */
  .card {
    @apply bg-white dark:bg-slate-800 rounded-lg 
           shadow-md hover:shadow-lg dark:shadow-lg dark:hover:shadow-xl
           transition-shadow duration-200 p-6;
  }

  .card-header {
    @apply mb-4 pb-4 border-b border-gray-200 dark:border-gray-700;
  }

  /* Forms */
  .input {
    @apply w-full px-3 py-2 border border-gray-300 dark:border-gray-600
           rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white
           placeholder-gray-500 dark:placeholder-gray-400
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
           transition-colors duration-200;
  }

  .label {
    @apply block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2;
  }

  /* Navigation */
  .nav-link {
    @apply px-3 py-2 rounded-md text-sm font-medium 
           hover:bg-gray-100 dark:hover:bg-gray-700 
           transition-colors duration-200;
  }

  .nav-link-active {
    @apply bg-blue-600 text-white;
  }

  /* Layout helpers */
  .container-fluid {
    @apply w-full mx-auto px-4 sm:px-6 lg:px-8;
  }

  .grid-responsive {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
  }

  /* Text utilities */
  .text-truncate {
    @apply truncate;
  }

  .text-subtitle {
    @apply text-lg font-semibold text-gray-600 dark:text-gray-400;
  }

  /* Shadows */
  .shadow-sm {
    @apply shadow;
  }

  .shadow-md {
    @apply shadow-lg;
  }

  /* Spacing helpers */
  .section {
    @apply py-12 md:py-16 lg:py-20;
  }

  .section-sm {
    @apply py-6 md:py-8;
  }
}

@tailwind utilities;

/* Utilities layer for project-specific utilities */
@layer utilities {
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 
           bg-clip-text text-transparent;
  }

  .blur-sm {
    @apply backdrop-blur-sm;
  }
}
```

## Dark Mode Implementation

### 1. Set Dark Mode Class

In your component or App entry point:

```typescript
import { useEffect } from 'react';
import { useDarkMode } from './hooks/useDarkMode';

export const App: React.FC = () => {
  const { isDark } = useDarkMode();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // ... rest of app
};
```

### 2. Tailwind Dark Mode Variants

```typescript
// Component using dark mode
export const ThemeAwareCard: React.FC = () => (
  <div className="
    bg-white dark:bg-slate-800
    text-slate-900 dark:text-white
    border border-gray-200 dark:border-gray-700
    shadow-md dark:shadow-lg
    p-6 rounded-lg
  ">
    <h3 className="text-xl font-bold mb-2">Title</h3>
    <p className="text-gray-600 dark:text-gray-400">Description</p>
  </div>
);
```

## Responsive Design Patterns

### Mobile-First Approach

Always design for mobile first, then add larger breakpoints:

```typescript
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items */}
</div>
```

### Tailwind Breakpoints

| Breakpoint | CSS | Min-Width |
|-----------|-----|-----------|
| `sm` | @media (min-width: 640px) | 640px |
| `md` | @media (min-width: 768px) | 768px |
| `lg` | @media (min-width: 1024px) | 1024px |
| `xl` | @media (min-width: 1280px) | 1280px |
| `2xl` | @media (min-width: 1536px) | 1536px |

## Performance Tips

### 1. Purge Unused CSS

Ensure your `content` config in `tailwind.config.js` is correct:

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",  // All source files
  "!./src/**/*.test.{js,ts,jsx,tsx}", // Exclude tests
],
```

### 2. Use CSS Variables for Dynamic Values

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    }
  }
}
```

```css
/* input.css */
@layer base {
  :root {
    --color-primary: #3b82f6;
    --color-secondary: #8b5cf6;
  }

  :root.dark {
    --color-primary: #60a5fa;
    --color-secondary: #a78bfa;
  }
}
```

### 3. Avoid Dynamic Class Names

```typescript
// ❌ BAD - Tailwind can't scan this
const bgClass = isDark ? 'bg-slate-900' : 'bg-white';
<div className={bgClass} />

// ✅ GOOD - Explicitly use both classes
<div className={isDark ? 'bg-slate-900' : 'bg-white'} />

// ✅ BETTER - Use conditional rendering
{isDark ? (
  <div className="bg-slate-900">...</div>
) : (
  <div className="bg-white">...</div>
)}
```

## Common Issues & Solutions

### Issue: CSS not updating

**Solution:**
1. Rebuild CSS: `npm run build:css`
2. Clear browser cache
3. Check that files are in `content` config
4. Verify `public/output.css` is loaded in HTML

### Issue: Dark mode not working

**Solution:**
1. Ensure `darkMode: "class"` is in `tailwind.config.js`
2. Verify `dark` class is added to `<html>` element
3. Check that color utilities have `dark:` variants
4. Use DevTools to inspect the element

### Issue: Build CSS too large

**Solution:**
1. Check `content` paths - exclude unnecessary files
2. Remove unused plugins
3. Use PurgeCSS more aggressively
4. Review custom utilities for duplicates

## Development Workflow

### Watch Mode (optional setup)

```bash
# Rebuild CSS when input.css changes
npx tailwindcss -i ./src/input.css -o ./public/output.css --watch
```

### Building for Production

```bash
# Minify CSS automatically
npm run build:css  # With NODE_ENV=production
```

## Extending Tailwind with Plugins

### Example: Custom Plugin for Glass Morphism

```javascript
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  // ... other config
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
      })
    })
  ]
};
```

Usage: `<div className="glass p-4 rounded-lg">`

---

## Audit Checklist

Before deployment:

- [ ] All custom colors defined in theme
- [ ] Dark mode variants applied throughout
- [ ] Responsive breakpoints tested on all screen sizes
- [ ] No hardcoded hex colors in JSX (use Tailwind)
- [ ] No inline styles except for dynamic values
- [ ] CSS purge working (build size < 150KB)
- [ ] All components tested with dark mode
- [ ] Performance good (Lighthouse > 90)
- [ ] No console CSS warnings
