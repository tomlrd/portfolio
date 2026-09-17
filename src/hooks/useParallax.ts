import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";
import { onScrollFrame } from "../lib/scroll";

export function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) {
      return;
    }

    return onScrollFrame(() => {
      const rect = node.getBoundingClientRect();
      const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
      node.style.setProperty("--parallax-y", `${(distance * speed).toFixed(2)}px`);
    });
  }, [speed]);

  return ref;
}

export function useTilt<T extends HTMLElement>(strength = 7) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) {
      return;
    }

    const reset = () => {
      node.style.setProperty("--tilt-x", "0deg");
      node.style.setProperty("--tilt-y", "0deg");
      node.style.setProperty("--tilt-shift", "0px");
    };

    const move = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--tilt-x", `${(-y * strength).toFixed(2)}deg`);
      node.style.setProperty("--tilt-y", `${(x * strength).toFixed(2)}deg`);
      node.style.setProperty("--tilt-shift", `${(x * 10).toFixed(2)}px`);
    };

    reset();
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", reset);

    return () => {
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", reset);
    };
  }, [strength]);

  return ref;
}
