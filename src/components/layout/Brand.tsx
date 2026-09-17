import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { profile } from "../../content/site";
import { cn } from "../../lib/cn";

type BrandProps = {
  nameClassName?: string;
};

export function Brand({ nameClassName }: BrandProps) {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      aria-label={t("nav.home")}
      className="group flex items-center gap-3"
    >
      <span className="flex size-9 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent transition group-hover:bg-accent group-hover:text-accent-ink">
        TL
      </span>
      <span
        className={cn(
          "font-display text-sm font-semibold tracking-tight",
          nameClassName,
        )}
      >
        {profile.name}
      </span>
    </Link>
  );
}
