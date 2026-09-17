import { cn } from "../../lib/cn";

type StatusDotProps = {
  label: string;
  className?: string;
};

export function StatusDot({ label, className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-muted",
        className,
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-2 rounded-full bg-emerald-500 animate-pulse-ring" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {label}
    </span>
  );
}
