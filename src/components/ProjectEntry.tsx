import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "../content/projects";
import { ProjectGallery } from "./ProjectGallery";
import { AnchorButton } from "./ui/Button";
import { Tag } from "./ui/Tag";

export function ProjectEntry({ project }: { project: Project }) {
  const { t } = useTranslation();
  const description = t(`projects.${project.id}.description`).split("\n");

  return (
    <article
      id={project.id}
      className="scroll-mt-28 border-t border-line pt-12 first:border-none first:pt-0"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <ProjectGallery name={project.name} images={project.images} />

        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {project.name}
            </h2>
            <dl className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-faint">
              <div className="flex gap-2">
                <dt className="uppercase tracking-[0.14em]">
                  {t("work.client")}
                </dt>
                <dd className="text-muted">
                  {project.client ?? t("work.clientAnyone")}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="uppercase tracking-[0.14em]">
                  {t("work.period")}
                </dt>
                <dd className="text-muted">{project.period}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-muted">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {t("work.stack")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {project.personal ? (
                <Tag className="border-accent/40 bg-accent/10 text-accent">
                  {t("status.personal")}
                </Tag>
              ) : null}
            </div>
          </div>

          {project.url ? (
            <div className="pt-2">
              <AnchorButton href={project.url} variant="secondary">
                {t("actions.visitSite")}
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </AnchorButton>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
