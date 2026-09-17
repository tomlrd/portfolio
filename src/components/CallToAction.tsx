import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LinkButton } from "./ui/Button";
import { Container } from "./ui/Container";
import { Parallax } from "./ui/Parallax";

export function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-card border border-line bg-surface px-6 py-16 text-center md:px-16">
          <Parallax
            speed={0.12}
            className="glow-backdrop pointer-events-none absolute inset-0"
          />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="text-base leading-relaxed text-muted text-pretty">
              {t("cta.lead")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <LinkButton to="/contact" size="lg">
                {t("actions.getInTouch")}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </LinkButton>
              <LinkButton to="/about" size="lg" variant="secondary">
                {t("nav.about")}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
