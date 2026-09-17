import { useTranslation } from "react-i18next";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  const { t } = useTranslation();
  useDocumentTitle(t("meta.notFound"));

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="glow-backdrop pointer-events-none absolute inset-0"
      />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-accent">
          {t("notFound.code")}
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {t("notFound.title")}
        </h1>
        <p className="max-w-md text-base leading-relaxed text-muted text-pretty">
          {t("notFound.lead")}
        </p>
        <LinkButton to="/" size="lg" className="mt-2">
          {t("actions.backHome")}
        </LinkButton>
      </Container>
    </section>
  );
}
