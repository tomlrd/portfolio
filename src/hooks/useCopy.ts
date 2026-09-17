import { useCallback, useEffect, useRef, useState } from "react";

export function useCopy(resetDelay = 2000) {
  const [copied, setCopied] = useState<string | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const copy = useCallback(
    async (value: string, id: string) => {
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        return;
      }
      setCopied(id);
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => setCopied(null), resetDelay);
    },
    [resetDelay],
  );

  return { copied, copy };
}
