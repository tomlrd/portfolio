import { cn } from "../lib/cn";

type ProjectPlaceholderProps = {
  name: string;
  className?: string;
};

export function ProjectPlaceholder({
  name,
  className,
}: ProjectPlaceholderProps) {
  return (
    <div className={cn("relative overflow-hidden bg-elevated", className)}>
      <div aria-hidden className="grid-backdrop absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span className="text-center font-display text-2xl font-semibold tracking-tight text-faint">
          {name}
        </span>
      </div>
    </div>
  );
}
