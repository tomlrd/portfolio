import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/cn";

type ProjectGalleryProps = {
  name: string;
  images: string[];
};

export function ProjectGallery({ name, images }: ProjectGalleryProps) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-card border border-line bg-elevated">
        <img
          src={images[active]}
          alt={`${name} — ${t("work.gallery", {
            index: active + 1,
            total: images.length,
          })}`}
          loading="lazy"
          className="aspect-16/10 w-full object-contain"
        />
      </div>

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
    </div>
  );
}
