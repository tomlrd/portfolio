import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "../components/PageHeader";
import { AnchorButton, Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatusDot } from "../components/ui/StatusDot";
import { profile, socials } from "../content/site";
import { useCopy } from "../hooks/useCopy";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Contact() {
  const { t } = useTranslation();
  const { copied, copy } = useCopy();
  useDocumentTitle(t("meta.contact"));

  return (
    <>
      <PageHeader
        label={t("nav.contact")}
        title={t("contact.title")}
        lead={t("contact.lead")}
      >
        <StatusDot label={t("status.available")} />
      </PageHeader>

      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-card border border-line bg-surface p-8 md:p-14">
            <div
              aria-hidden
              className="glow-backdrop pointer-events-none absolute inset-0"
            />
            <div className="relative space-y-7">
              <div className="max-w-xl space-y-3">
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("contact.directTitle")}
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  {t("contact.directLead")}
                </p>
              </div>

              <p className="font-display text-xl break-all sm:text-3xl">
                {profile.email}
              </p>

              <div className="flex flex-wrap gap-3">
                <AnchorButton href={`mailto:${profile.email}`} size="lg">
                  <Mail size={16} />
                  {t("actions.getInTouch")}
                </AnchorButton>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={() => void copy(profile.email, "email")}
                >
                  {copied === "email" ? (
                    <Check size={16} className="text-emerald-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                  {copied === "email" ? t("actions.copied") : t("actions.copy")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            label={t("contact.elsewhereLabel")}
            title={t("contact.elsewhereTitle")}
          />

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((social, index) => {
              const isCopy = Boolean(social.copyValue);
              const label = isCopy ? social.copyValue : social.url;

              return (
                <li key={social.id} className="h-full">
                  <Reveal delay={index * 60} className="h-full">
                    {isCopy ? (
                      <button
                        type="button"
                        onClick={() =>
                          void copy(social.copyValue ?? "", social.id)
                        }
                        className="group flex size-full items-center gap-4 rounded-card border border-line bg-canvas p-5 text-left transition hover:-translate-y-1 hover:border-accent/50"
                      >
                        <img
                          src={social.icon}
                          alt=""
                          loading="lazy"
                          className="size-9 shrink-0 object-contain"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium">
                            {social.name}
                          </span>
                          <span className="block truncate font-mono text-xs text-faint">
                            {copied === social.id
                              ? t("actions.copied")
                              : t("contact.copyHint")}
                          </span>
                        </span>
                        {copied === social.id ? (
                          <Check size={16} className="text-emerald-500" />
                        ) : (
                          <Copy
                            size={16}
                            className="text-faint transition group-hover:text-accent"
                          />
                        )}
                      </button>
                    ) : (
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex size-full items-center gap-4 rounded-card border border-line bg-canvas p-5 transition hover:-translate-y-1 hover:border-accent/50"
                      >
                        <img
                          src={social.icon}
                          alt=""
                          loading="lazy"
                          className="size-9 shrink-0 object-contain"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium">
                            {social.name}
                          </span>
                          <span className="block truncate font-mono text-xs text-faint">
                            {label?.replace(/^https?:\/\/(www\.)?/, "")}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </a>
                    )}
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
