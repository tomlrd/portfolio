import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "../components/PageHeader";
import { ProjectEntry } from "../components/ProjectEntry";
import { Container } from "../components/ui/Container";
import { projects, sharedTags } from "../content/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { cn } from "../lib/cn";

const ALL = "all";

export default function Work() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState(ALL);
  useDocumentTitle(t("meta.work"));

  const visible = projects.filter(
    (project) => filter === ALL || project.tags.includes(filter),
  );

  return (
    <>
      <PageHeader
        label={t("nav.work")}
        title={t("work.title")}
        lead={t("work.lead")}
      />

      <section className="py-14 md:py-20">
        <Container className="space-y-12">
          <div
            role="group"
            aria-label={t("work.filterLabel")}
            className="flex flex-wrap gap-2"
          >
            {[ALL, ...sharedTags].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                aria-pressed={filter === tag}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-xs transition",
                  filter === tag
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-line bg-surface text-muted hover:border-accent hover:text-accent",
                )}
              >
                {tag === ALL ? t("work.filterAll") : tag}
              </button>
            ))}
          </div>

          {visible.length > 0 ? (
            <div className="space-y-16 md:space-y-20">
              {visible.map((project) => (
                <ProjectEntry key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">{t("work.empty")}</p>
          )}
        </Container>
      </section>
    </>
  );
}
