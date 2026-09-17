import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  label?: string;
  title: string;
  lead?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  lead,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl space-y-4">
        {label ? <Eyebrow>{label}</Eyebrow> : null}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {lead ? (
          <p className="text-base leading-relaxed text-muted text-pretty">
            {lead}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
