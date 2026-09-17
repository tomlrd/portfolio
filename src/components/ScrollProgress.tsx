import { useEffect, useRef } from "react";
import { onScrollFrame } from "../lib/scroll";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    return onScrollFrame(() => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      node.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1).toFixed(4)})`;
    });
  }, []);

  return (
    <div
      aria-hidden
      ref={ref}
      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent"
    />
  );
}
