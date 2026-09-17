import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("actions.toggleTheme")}
      title={t("actions.toggleTheme")}
      className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
