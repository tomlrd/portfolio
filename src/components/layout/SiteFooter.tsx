import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { profile, socials } from "../../content/site";
import { navItems } from "./navigation";

export function SiteFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const externalSocials = socials.filter((social) => social.url);

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent">
                TL
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                {profile.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {t("footer.tagline")}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block font-mono text-sm text-accent underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </div>

          <nav className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {t("footer.navTitle")}
            </h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {t(item.labelKey)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {t("footer.socialTitle")}
            </h2>
            <ul className="space-y-2">
              {externalSocials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. {t("footer.rights")}
          </p>
          <p>{t("footer.builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
