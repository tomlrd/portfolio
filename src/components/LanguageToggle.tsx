import { useTranslation } from "react-i18next";
import { cn } from "../lib/cn";
import { languages, resolveLanguage } from "../i18n";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = resolveLanguage(i18n.resolvedLanguage);

  return (
    <div
      role="group"
      aria-label={t("actions.toggleLanguage")}
      className="inline-flex items-center rounded-full border border-line bg-surface p-0.5"
    >
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => void i18n.changeLanguage(language)}
          aria-pressed={current === language}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-xs uppercase transition",
            current === language
              ? "bg-accent text-accent-ink"
              : "text-faint hover:text-ink",
          )}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
