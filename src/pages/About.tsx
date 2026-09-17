import { ChevronDown, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "../components/PageHeader";
import photo from "../assets/photo.webp";
import { AnchorButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatusDot } from "../components/ui/StatusDot";
import { Tag } from "../components/ui/Tag";
import { profile, resumeUrls } from "../content/site";
import { stack } from "../content/stack";
import { useContent } from "../hooks/useContent";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { resolveLanguage } from "../i18n";
import { cn } from "../lib/cn";

export default function About() {
  const { t, i18n } = useTranslation();
  const content = useContent();
  useDocumentTitle(t("meta.about"));

  const language = resolveLanguage(i18n.resolvedLanguage);
  const bio = content.about.bio.split("\n");

  return (
    <>
      <PageHeader
        label={t("nav.about")}
        title={t("about.title")}
        lead={t("about.lead")}
      >
        <StatusDot label={t("status.available")} />
      </PageHeader>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-card border border-line bg-elevated">
                <img
                  src={photo}
                  alt={profile.name}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <AnchorButton
                href={resumeUrls[language]}
                variant="secondary"
                className="w-full"
              >
                <Download size={16} />
                {t("actions.resume")}
              </AnchorButton>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-muted">
              {bio.map((paragraph) => (
                <p key={paragraph} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            label={t("about.stackLabel")}
            title={t("about.stackTitle")}
          />
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {stack.map((item, index) => (
              <li key={item.name}>
                <Reveal
                  delay={index * 40}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-canvas px-4 py-3.5 transition hover:border-accent/50"
                >
                  <img
                    src={item.icon}
                    alt=""
                    loading="lazy"
                    className={cn(
                      "size-6 shrink-0 object-contain",
                      item.monochrome && "dark:invert",
                    )}
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            label={t("about.hardLabel")}
            title={t("about.hardTitle")}
          />
          <ul className="divide-y divide-line border-y border-line">
            {content.skills.hard.map((skill) => (
              <li key={skill.title}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 transition hover:text-accent">
                    <span className="font-display text-lg font-medium tracking-tight">
                      {skill.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-faint transition group-open:rotate-180"
                    />
                  </summary>
                  <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted">
                    {skill.description}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            label={t("about.softLabel")}
            title={t("about.softTitle")}
          />
          <div className="flex flex-wrap gap-3">
            {content.skills.soft.map((skill) => (
              <Tag key={skill} className="bg-canvas px-4 py-2 text-sm">
                {skill}
              </Tag>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
