import { Maximize2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/cn";
import { Lightbox } from "./Lightbox";

type ProjectGalleryProps = {
  name: string;
  images: string[];
};

export function ProjectGallery({ name, images }: ProjectGalleryProps) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("work.enlarge")}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-card border border-line bg-elevated transition hover:border-accent/50"
      >
        <img
          src={images[active]}
          alt={`${name} — ${t("work.gallery", {
            index: active + 1,
            total: images.length,
          })}`}
          loading="lazy"
          className="aspect-16/10 w-full object-contain"
        />
        <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full border border-line bg-surface/90 text-muted opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 size={16} />
        </span>
      </button>

      {images.length > 1 ? (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={t("work.gallery", {
                index: index + 1,
                total: images.length,
              })}
              aria-pressed={active === index}
              className={cn(
                "h-16 flex-1 overflow-hidden rounded-xl border bg-elevated transition",
                active === index
                  ? "border-accent"
                  : "border-line opacity-60 hover:opacity-100",
              )}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="size-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      ) : null}

      {open ? (
        <Lightbox
          name={name}
          images={images}
          index={active}
          onClose={close}
          onNavigate={setActive}
        />
      ) : null}
    </div>
  );
}
