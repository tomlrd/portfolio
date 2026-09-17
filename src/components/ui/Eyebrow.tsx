import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-faint",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-accent" />
      {children}
    </span>
  );
}
