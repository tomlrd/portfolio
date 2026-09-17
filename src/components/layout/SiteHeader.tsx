import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/cn";
import { LanguageToggle } from "../LanguageToggle";
import { ThemeToggle } from "../ThemeToggle";
import { navItems } from "./navigation";

export function SiteHeader() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-canvas/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 md:h-20">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={t("nav.home")}
        >
          <span className="flex size-9 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent transition group-hover:bg-accent group-hover:text-accent-ink">
            TL
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Thomas Laroudie
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition",
                  isActive
                    ? "text-ink"
                    : "text-muted hover:bg-elevated hover:text-ink",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {t(item.labelKey)}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px bg-accent transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? t("actions.closeMenu") : t("actions.openMenu")}
            className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-line bg-canvas lg:hidden"
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between border-b border-line/60 py-4 font-display text-lg transition last:border-none",
                  isActive ? "text-accent" : "text-ink",
                )
              }
            >
              {t(item.labelKey)}
              <span aria-hidden className="font-mono text-xs text-faint">
                {item.to === "/" ? "/" : item.to}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
