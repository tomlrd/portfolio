import type { ReactNode } from "react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Parallax } from "./ui/Parallax";

type PageHeaderProps = {
  label: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

export function PageHeader({ label, title, lead, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Parallax
        speed={0.16}
        className="glow-backdrop pointer-events-none absolute inset-0"
      />
      <Container className="relative py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <Eyebrow>{label}</Eyebrow>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {lead}
          </p>
          {children}
        </div>
      </Container>
    </section>
  );
}
