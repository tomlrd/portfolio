# Advanced Patterns for Portfolio Modernization

## Advanced Component Patterns

### Render Props Pattern (for flexible composition)
```typescript
interface RenderPropsProps {
  data: any[];
  render: (item: any, index: number) => React.ReactNode;
}

export const DataRenderer: React.FC<RenderPropsProps> = ({ data, render }) => (
  <div className="grid gap-4">
    {data.map((item, idx) => (
      <div key={idx}>{render(item, idx)}</div>
    ))}
  </div>
);

// Usage:
<DataRenderer
  data={projects}
  render={(project) => <ProjectCard project={project} />}
/>
```

### Higher-Order Component Pattern (wrapping for shared logic)
```typescript
const withDarkMode = <P extends object>(
  Component: React.ComponentType<P & { isDark: boolean }>
) => {
  return (props: P) => {
    const { isDark } = useDarkMode();
    return <Component {...props} isDark={isDark} />;
  };
};

// Usage:
export default withDarkMode(MyComponent);
```

### Controlled vs Uncontrolled Components
```typescript
// Controlled - parent manages state
export const ControlledInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border rounded p-2"
  />
);

// Uncontrolled - component manages state
export const UncontrolledInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <>
      <input ref={inputRef} className="border rounded p-2" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
```

## State Management Patterns

### Context + Reducer for Complex State
```typescript
type ThemeState = { mode: 'light' | 'dark'; primary: string };
type ThemeAction = { type: 'TOGGLE_MODE' } | { type: 'SET_PRIMARY'; color: string };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    case 'SET_PRIMARY':
      return { ...state, primary: action.color };
    default:
      return state;
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { mode: 'light', primary: 'blue' });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Custom Hook for API Calls
```typescript
interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useAsync = <T,>(fn: () => Promise<T>): UseAsyncState<T> => {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await fn();
        if (mounted) setState({ data, loading: false, error: null });
      } catch (error) {
        if (mounted) setState({ data: null, loading: false, error: error as Error });
      }
    })();

    return () => {
      mounted = false;
    };
  }, [fn]);

  return state;
};

// Usage:
const { data: projects, loading, error } = useAsync(() => fetchProjects());
```

## Tailwind CSS Advanced Patterns

### Dynamic Class Generation (avoid!)
```typescript
// BAD - Tailwind can't scan these dynamically
const bgColor = isDark ? 'bg-slate-900' : 'bg-white';
return <div className={bgColor} />;

// GOOD - Use explicit classes or CSS variables
return (
  <div
    className={isDark ? 'bg-slate-900' : 'bg-white'}
  />
);

// BETTER - Use CSS variables in Tailwind config
// tailwind.config.js:
// {
//   theme: {
//     extend: {
//       colors: {
//         'bg-primary': 'var(--bg-primary)',
//       }
//     }
//   }
// }
// Then: <div className="bg-bg-primary" />
```

### Creating Reusable Component Classes
```css
/* input.css */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors 
           duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700
           focus:ring-blue-500;
  }

  .btn-secondary {
    @apply btn bg-gray-200 text-gray-900 hover:bg-gray-300
           focus:ring-gray-500 dark:bg-gray-700 dark:text-white;
  }

  .card {
    @apply bg-white dark:bg-slate-800 rounded-lg shadow-md 
           p-6 transition-shadow hover:shadow-lg;
  }
}
```

### Responsive Design Patterns
```typescript
// Mobile-first approach (recommended)
export const ResponsiveGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  // 1 column on mobile, 2 on tablet, 3 on desktop
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {children}
  </div>
);

// Container queries (modern approach)
export const FlexibleLayout: React.FC = () => (
  <div className="@container">
    <div className="grid @sm:grid-cols-2 @lg:grid-cols-3">
      {/* Content */}
    </div>
  </div>
);
```

## Performance Deep Dive

### Avoiding Re-renders
```typescript
// Problem: Parent re-render causes unnecessary child re-render
const Parent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ExpensiveChild data={someData} />
    </>
  );
};

// Solution 1: memo
const ExpensiveChild = memo(({ data }) => {
  return <div>{data}</div>;
});

// Solution 2: move state down
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>+</button>;
};

const Parent2 = () => (
  <>
    <Counter />
    <ExpensiveChild />
  </>
);
```

### Key Prop Importance
```typescript
// BAD - using array index as key (causes re-renders on reorder)
{items.map((item, index) => (
  <Item key={index} item={item} />
))}

// GOOD - use stable, unique identifier
{items.map((item) => (
  <Item key={item.id} item={item} />
))}
```

### Lazy Loading for Large Lists
```typescript
import { Virtuoso } from 'react-virtuoso'; // or react-window

export const LargeList: React.FC<{ items: Item[] }> = ({ items }) => (
  <Virtuoso
    style={{ height: '600px' }}
    data={items}
    itemContent={(index, item) => <ListItem item={item} index={index} />}
  />
);
```

## Error Handling & Resilience

### Error Boundary Pattern
```typescript
interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 bg-red-50 text-red-700 rounded">
            Something went wrong. Please refresh the page.
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

### Fallback UI Pattern
```typescript
export const SafeComponent: React.FC<Props> = (props) => {
  try {
    return <RiskyComponent {...props} />;
  } catch (error) {
    return <ErrorMessage error={error} />;
  }
};
```

## TypeScript Strict Mode Patterns

### Utility Types for DRY Code
```typescript
// Extract props type from component
type ButtonProps = React.ComponentProps<typeof Button>;

// Extract return type
type ReactNode = React.ReactNode;

// Required by pattern
type Required<T> = { [K in keyof T]-?: T[K] };

// Make properties optional
type Partial<T> = { [K in keyof T]?: T[K] };

// Pick specific properties
type ButtonPropsSmall = Pick<ButtonProps, 'onClick' | 'children'>;

// Omit specific properties
type ButtonPropsLarge = Omit<ButtonProps, 'disabled'>;
```

### Discriminated Unions for Type Safety
```typescript
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: Project[] };
type ErrorState = { status: 'error'; error: string };

type ProjectState = LoadingState | SuccessState | ErrorState;

const renderProjects = (state: ProjectState) => {
  switch (state.status) {
    case 'loading':
      return <div>Loading...</div>;
    case 'success':
      return (
        <ul>
          {state.data.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
      );
    case 'error':
      return <div className="text-red-600">{state.error}</div>;
  }
};
```

## Accessibility (a11y) Patterns

### ARIA Attributes
```typescript
export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div role="region" aria-label="Accordion">
      {items.map((item) => (
        <div key={item.id}>
          <button
            aria-expanded={activeId === item.id}
            aria-controls={`panel-${item.id}`}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            {item.title}
          </button>
          <div
            id={`panel-${item.id}`}
            role="region"
            hidden={activeId !== item.id}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
```

### Keyboard Navigation
```typescript
export const SearchInput: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const results = ['Option 1', 'Option 2', 'Option 3'];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        if (selectedIndex >= 0) {
          // Handle selection
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <input
      onKeyDown={handleKeyDown}
      role="combobox"
      aria-expanded={isOpen}
      aria-autocomplete="list"
    />
  );
};
```
