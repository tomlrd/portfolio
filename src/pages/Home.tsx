import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CallToAction } from "../components/CallToAction";
import { HeroShowcase } from "../components/HeroShowcase";
import { ProjectCard } from "../components/ProjectCard";
import { StackMarquee } from "../components/StackMarquee";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Parallax } from "../components/ui/Parallax";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatusDot } from "../components/ui/StatusDot";
import { projects } from "../content/projects";
import { stats } from "../content/site";
import { useContent } from "../hooks/useContent";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Home() {
  const { t } = useTranslation();
  const content = useContent();
  useDocumentTitle(t("meta.home"));

  const featured = projects.filter((project) => project.featured);
  const highlights = content.electron.benefits.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <Parallax
          speed={0.14}
          className="glow-backdrop pointer-events-none absolute inset-0"
        />
        <Parallax
          speed={0.05}
          className="grid-backdrop pointer-events-none absolute inset-0"
        />
        <Container className="relative pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="space-y-8">
              <Eyebrow>{t("hero.role")}</Eyebrow>

              <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl">
                <span className="block">{t("hero.firstName")}</span>
                <span className="block text-accent">{t("hero.lastName")}</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted text-pretty">
                {t("hero.lead")}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <LinkButton to="/work" size="lg">
                  {t("actions.viewWork")}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </LinkButton>
                <LinkButton to="/contact" size="lg" variant="secondary">
                  {t("actions.getInTouch")}
                </LinkButton>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <StatusDot label={t("status.available")} />
                <span className="inline-flex items-center gap-2 font-mono text-xs text-faint">
                  <MapPin size={14} />
                  {t("status.location")}
                </span>
              </div>
            </div>

            <Parallax speed={-0.07}>
              <HeroShowcase />
            </Parallax>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-7">
        <Container>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            {t("home.stackLabel")}
          </p>
        </Container>
        <StackMarquee />
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <dl className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.id}
                delay={index * 80}
                className="space-y-2 border-l-2 border-accent/40 pl-5"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  {t(`stats.${stat.id}`)}
                </dt>
                <dd className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {stat.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeading
            label={t("home.workLabel")}
            title={t("home.workTitle")}
            lead={t("home.workLead")}
            action={
              <LinkButton to="/work" variant="secondary">
                {t("actions.viewAll")}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </LinkButton>
            }
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={index * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <Eyebrow>{t("home.electronLabel")}</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {t("home.electronTitle")}
              </h2>
              <p className="text-base leading-relaxed text-muted text-pretty">
                {t("home.electronLead")}
              </p>
              <LinkButton to="/electron" variant="secondary">
                {t("actions.learnMore")}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </LinkButton>
            </div>

            <ul className="space-y-4">
              {highlights.map((benefit, index) => (
                <li key={benefit.title}>
                  <Reveal
                    delay={index * 90}
                    className="flex gap-5 rounded-card border border-line bg-canvas p-6"
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
