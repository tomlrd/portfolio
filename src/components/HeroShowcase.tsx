import { useTranslation } from "react-i18next";
import onlyone from "../assets/projects/oo1.webp";
import playability from "../assets/projects/pa1.webp";
import electron from "../assets/stack/electron.svg";
import { useTilt } from "../hooks/useParallax";

export function HeroShowcase() {
  const { t } = useTranslation();
  const tiltRef = useTilt<HTMLDivElement>(6);

  return (
    <div className="relative [perspective:1600px]">
      <div
        ref={tiltRef}
        className="relative transition-transform duration-500 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]"
      >
        <figure className="overflow-hidden rounded-card border border-line bg-surface shadow-2xl shadow-black/20">
          <img
            src={onlyone}
            alt=""
            className="aspect-16/10 w-full object-cover object-top"
          />
          <figcaption className="flex items-center justify-end gap-3 border-t border-line px-5 py-3.5">
            <span className="text-sm font-medium">OnlyOne</span>
            <span className="font-mono text-xs text-faint">Electron.js</span>
          </figcaption>
        </figure>

        <figure className="absolute -bottom-14 -left-6 hidden w-48 overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/30 [transform:translateZ(80px)] sm:block lg:w-56">
          <img
            src={playability}
            alt=""
            className="aspect-16/10 w-full object-cover object-top"
          />
          <figcaption className="border-t border-line px-3.5 py-2.5 font-mono text-[0.7rem] text-faint">
            PlayAbility
          </figcaption>
        </figure>

        <div className="absolute -top-7 -right-4 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-2xl shadow-black/30 [transform:translateZ(120px)] sm:flex">
          <img src={electron} alt="" className="size-7 shrink-0" />
          <span className="text-xs leading-tight font-medium whitespace-pre-line">
            {t("hero.showcaseBadge")}
          </span>
        </div>
      </div>

      <p className="mt-5 font-mono text-xs text-faint sm:mt-24">
        {t("hero.showcaseCaption")}
      </p>
    </div>
  );
}
