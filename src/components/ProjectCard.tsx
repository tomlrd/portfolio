import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { Project } from "../content/projects";
import { ProjectPlaceholder } from "./ProjectPlaceholder";
import { Tag } from "./ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="relative aspect-4/3 overflow-hidden bg-elevated">
        {project.images ? (
          <img
            src={project.images[0]}
            alt={project.name}
            loading="lazy"
            className="size-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        ) : (
          <ProjectPlaceholder name={project.name} className="size-full" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              <Link
                to={`/work#${project.id}`}
                className="after:absolute after:inset-0 after:content-['']"
              >
                {project.name}
              </Link>
            </h3>
            <p className="font-mono text-xs text-faint">
              {project.period}
              {project.personal ? ` · ${t("status.personal")}` : ""}
            </p>
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted">
          {t(`projects.${project.id}.description`).split("\n")[0]}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
