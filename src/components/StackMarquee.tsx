import { aiTools, stack } from "../content/stack";
import { cn } from "../lib/cn";

export function StackMarquee() {
  const items = [...stack, ...aiTools];
  const loop = [...items, ...items];

  return (
    <div className="edge-fade overflow-hidden">
      <ul className="flex w-max animate-marquee items-center gap-12 py-2 hover:[animation-play-state:paused]">
        {loop.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="flex shrink-0 items-center gap-3 opacity-75 transition hover:opacity-100"
          >
            <img
              src={item.icon}
              alt=""
              loading="lazy"
              className={cn(
                "size-8 object-contain",
                item.monochrome && "dark:invert",
              )}
            />
            <span className="font-mono text-sm whitespace-nowrap text-muted">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
