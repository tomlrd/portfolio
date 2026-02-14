# Code Examples for Portfolio Modernization

Ready-to-use code snippets that follow React 18, TypeScript, and Tailwind CSS best practices.

## Essential Hooks

### useLocalStorage

```typescript
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
```

### useDarkMode

```typescript
// hooks/useDarkMode.ts
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage<boolean>('darkMode', false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return { isDark, setIsDark, toggle };
};
```

### useAsync

```typescript
// hooks/useAsync.ts
import { useEffect, useState, useCallback } from 'react';

interface UseAsyncState<T> {
  status: 'idle' | 'pending' | 'success' | 'error';
  data: T | null;
  error: Error | null;
}

type AsyncFunction<T> = () => Promise<T>;

export const useAsync = <T,>(
  asyncFunction: AsyncFunction<T>,
  immediate = true
): UseAsyncState<T> & { execute: () => Promise<void> } => {
  const [state, setState] = useState<UseAsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ status: 'pending', data: null, error: null });
    try {
      const response = await asyncFunction();
      setState({ status: 'success', data: response, error: null });
    } catch (error) {
      setState({
        status: 'error',
        data: null,
        error: error instanceof Error ? error : new Error(String(error)),
      });
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
};
```

### useDebounce

```typescript
// hooks/useDebounce.ts
import { useEffect, useState } from 'react';

export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
```

## Reusable Components

### Button Component

```typescript
// components/common/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  outline: 'border-2 border-current hover:bg-current hover:text-white',
};

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          rounded-lg font-medium transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
```

### Card Component

```typescript
// components/common/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
}

export const Card: React.FC<CardProps> = React.forwardRef<
  HTMLDivElement,
  CardProps
>(({ children, className = '', clickable = false }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-slate-800
        rounded-lg shadow-md hover:shadow-lg
        dark:shadow-lg dark:hover:shadow-xl
        transition-shadow duration-200
        ${clickable ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
```

### FormInput Component

```typescript
// components/common/FormInput.tsx
import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const FormInput: React.FC<FormInputProps> = React.forwardRef<
  HTMLInputElement,
  FormInputProps
>(({ label, error, helperText, className = '', ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-3 py-2 border rounded-lg
          bg-white dark:bg-slate-700 text-slate-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          border-gray-300 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && <p className="text-gray-500 text-sm mt-1">{helperText}</p>}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
```

## Context Patterns

### ThemeContext

```typescript
// context/ThemeContext.tsx
import React, { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

interface ThemeContextType {
  isDark: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDark, toggle } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

## Utility Functions

### formatDate

```typescript
// utils/formatDate.ts
export const formatDate = (
  date: Date | string,
  locale: string = 'en-US'
): string => {
  const d = new Date(date);
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
```

### cn (class name merger)

```typescript
// utils/cn.ts
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter((c) => c && typeof c === 'string').join(' ');
};

// Usage:
// className={cn('px-4 py-2', isActive && 'bg-blue-500')}
```

### getInitials

```typescript
// utils/getInitials.ts
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
```

## Complete Example: ProjectCard Component

```typescript
// components/sections/ProjectCard.tsx
import React, { memo } from 'react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = memo(
  ({ project, onSelect }) => {
    return (
      <Card className="overflow-hidden hover:scale-105 transition-transform duration-200">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            {project.liveUrl && (
              <Button
                size="sm"
                variant="primary"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                View Live
              </Button>
            )}
            {project.repoUrl && (
              <Button
                size="sm"
                variant="secondary"
                onClick={() => window.open(project.repoUrl, '_blank')}
              >
                View Code
              </Button>
            )}
          </div>

          {onSelect && (
            <button
              onClick={() => onSelect(project)}
              className="w-full mt-4 py-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Learn More →
            </button>
          )}
        </div>
      </Card>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
```

## TypeScript Type Definitions

```typescript
// types/index.ts

// Common types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: number;
}

// Component props base
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'auto';

// Status types
export type Status = 'idle' | 'loading' | 'success' | 'error';
```

---

All examples follow:
- ✅ React 18+ best practices
- ✅ TypeScript strict mode
- ✅ Tailwind CSS patterns
- ✅ Accessibility considerations
- ✅ Performance optimization (memo, useCallback, useMemo)
- ✅ Proper error handling
