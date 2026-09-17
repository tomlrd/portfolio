import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { useScrollLock } from "../hooks/useScrollLock";

type LightboxProps = {
  name: string;
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const controlStyles =
  "flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20";

export function Lightbox({
  name,
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const { t } = useTranslation();
  const total = images.length;
  const label = `${name} — ${t("work.gallery", { index: index + 1, total })}`;
  useScrollLock(true);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && total > 1) {
        onNavigate((index - 1 + total) % total);
      } else if (event.key === "ArrowRight" && total > 1) {
        onNavigate((index + 1) % total);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [index, total, onClose, onNavigate]);

  const closeOnBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={closeOnBackdrop}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
    >
      <button
        type="button"
        autoFocus
        onClick={onClose}
        aria-label={t("actions.close")}
        className={`${controlStyles} absolute top-4 right-4`}
      >
        <X size={20} />
      </button>

      {total > 1 ? (
        <>
          <button
            type="button"
            onClick={() => onNavigate((index - 1 + total) % total)}
            aria-label={t("work.previous")}
            className={`${controlStyles} absolute top-1/2 left-4 -translate-y-1/2`}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => onNavigate((index + 1) % total)}
            aria-label={t("work.next")}
            className={`${controlStyles} absolute top-1/2 right-4 -translate-y-1/2`}
          >
            <ChevronRight size={22} />
          </button>
        </>
      ) : null}

      <figure className="flex max-h-full max-w-6xl flex-col items-center gap-3">
        <img
          src={images[index]}
          alt={label}
          className="max-h-[82vh] max-w-full rounded-card border border-white/10 object-contain shadow-2xl"
        />
        <figcaption className="font-mono text-xs text-white/60">
          {label}
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}
