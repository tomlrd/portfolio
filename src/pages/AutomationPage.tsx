import { ArrowRight, Check, Download } from "lucide-react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { CallToAction } from "../components/CallToAction";
import { LiveDemo } from "../components/LiveDemo";
import { PageHeader } from "../components/PageHeader";
import { AnchorButton, LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useContent } from "../hooks/useContent";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { cn } from "../lib/cn";

const brochureUrl = `${import.meta.env.BASE_URL}plaquette-automatisation-ia.pdf`;

export default function AutomationPage() {
  const { t } = useTranslation();
  const { automation } = useContent();
  useDocumentTitle(t("meta.automation"));

  return (
    <>
      <PageHeader
        label={t("nav.automation")}
        title={automation.title}
        lead={automation.lead}
      >
        <ul className="flex flex-wrap gap-2">
          {automation.facts.map((fact) => (
            <li
              key={fact}
              className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {fact}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          <LinkButton to="/contact" size="lg">
            {automation.bookDiagnostic}
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </LinkButton>
          <AnchorButton href={brochureUrl} size="lg" variant="secondary">
            <Download size={16} />
            {automation.downloadBrochure}
          </AnchorButton>
        </div>
      </PageHeader>

      <section className="py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeading
            label={automation.casesLabel}
            title={automation.casesTitle}
            lead={automation.casesLead}
          />

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {automation.cases.map((item, index) => (
              <li key={item.title} className="h-full">
                <Reveal
                  delay={index * 60}
                  className="flex h-full flex-col gap-4 rounded-card border border-line bg-surface p-7 transition hover:-translate-y-1 hover:border-accent/50"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted">
                    {item.flow.map((step, stepIndex) => (
                      <Fragment key={step}>
                        {stepIndex > 0 ? (
                          <ArrowRight size={12} className="text-accent" />
                        ) : null}
                        <span
                          className={cn(
                            "rounded-md border px-2 py-0.5",
                            stepIndex === 1
                              ? "border-accent/60 text-accent"
                              : "border-line bg-canvas",
                          )}
                        >
                          {step}
                        </span>
                      </Fragment>
                    ))}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="demo"
        className="scroll-mt-24 border-t border-line py-16 md:py-24"
      >
        <Container className="space-y-12">
          <SectionHeading
            label={automation.demo.label}
            title={automation.demo.title}
            lead={automation.demo.lead}
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {automation.demo.tips.map((tip, index) => (
              <li key={tip.title} className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {automation.demo.tipLabel} {index + 1}
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {tip.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {tip.description}
                </p>
              </li>
            ))}
          </ul>
          <LiveDemo />
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeading
            label={automation.tradesLabel}
            title={automation.tradesTitle}
          />
          <ul className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {automation.trades.map((trade) => (
              <li
                key={trade.title}
                className="space-y-2 border-b border-line py-6 pr-6"
              >
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {trade.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {trade.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="pricing" className="scroll-mt-24 py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeading
            label={automation.pricingLabel}
            title={automation.pricingTitle}
            lead={automation.pricingLead}
          />

          <ul className="grid gap-6 lg:grid-cols-3">
            {automation.plans.map((plan, index) => (
              <li key={plan.name} className="h-full">
                <Reveal
                  delay={index * 60}
                  className={cn(
                    "flex h-full flex-col gap-5 rounded-card border bg-surface p-7",
                    index === 1 ? "border-accent" : "border-line",
                  )}
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted">{plan.unit}</span>
                  </p>
                  <ul className="space-y-2.5">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="space-y-4">
            <div className="space-y-2 text-sm leading-relaxed text-muted">
              <p>{automation.biggerProjects}</p>
              <p>{automation.runningCosts}</p>
            </div>
            <p className="text-xs text-faint">{automation.vatNote}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeading
            label={automation.stepsLabel}
            title={automation.stepsTitle}
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {automation.steps.map((step, index) => (
              <li key={step.title} className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {automation.stepLabel} {index + 1}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="space-y-12">
          <SectionHeading
            label={automation.trustLabel}
            title={automation.trustTitle}
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {automation.trust.map((item) => (
              <li
                key={item.title}
                className="space-y-2 rounded-card border border-line bg-surface p-7"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
