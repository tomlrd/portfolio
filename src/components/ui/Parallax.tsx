import type { ReactNode } from "react";
import { useParallax } from "../../hooks/useParallax";
import { cn } from "../../lib/cn";

type ParallaxProps = {
  children?: ReactNode;
  speed?: number;
  className?: string;
};

export function Parallax({ children, speed = 0.08, className }: ParallaxProps) {
  const ref = useParallax<HTMLDivElement>(speed);

  return (
    <div
      ref={ref}
      className={cn(
        "translate-y-(--parallax-y) [will-change:translate]",
        className,
      )}
    >
      {children}
    </div>
  );
}
