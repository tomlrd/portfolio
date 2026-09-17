import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "../components/PageHeader";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useContent } from "../hooks/useContent";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ElectronPage() {
  const { t } = useTranslation();
  const content = useContent();
  useDocumentTitle(t("meta.electron"));

  const touch = content.electron.touch.split("\n");

  return (
    <>
      <PageHeader
        label={t("nav.electron")}
        title={t("electron.title")}
        lead={t("electron.lead")}
      />

      <section className="py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeading
            label={t("electron.benefitsLabel")}
            title={t("electron.benefitsTitle")}
          />

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.electron.benefits.map((benefit, index) => (
              <li key={benefit.title} className="h-full">
                <Reveal
                  delay={index * 60}
                  className="h-full rounded-card border border-line bg-surface p-7 transition hover:-translate-y-1 hover:border-accent/50"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div className="space-y-8">
              <SectionHeading
                label={t("electron.touchLabel")}
                title={t("electron.touchTitle")}
              />
              <div className="space-y-5 text-base leading-relaxed text-muted">
                {touch.map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="space-y-4 rounded-card border border-line bg-canvas p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {t("electron.resourcesTitle")}
              </h3>
              <ul className="space-y-3">
                {content.electron.resources.map((resource) => (
                  <li key={resource.url}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start justify-between gap-3 text-sm text-muted transition hover:text-accent"
                    >
                      {resource.label}
                      <ArrowUpRight
                        size={16}
                        className="mt-0.5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-card border border-line bg-surface px-6 py-14 text-center md:px-16">
            <div
              aria-hidden
              className="glow-backdrop pointer-events-none absolute inset-0"
            />
            <div className="relative mx-auto max-w-2xl space-y-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {t("home.ctaTitle")}
              </h2>
              <p className="text-base leading-relaxed text-muted text-pretty">
                {t("home.ctaLead")}
              </p>
              <div className="flex justify-center pt-2">
                <LinkButton to="/contact" size="lg">
                  {t("actions.getInTouch")}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
