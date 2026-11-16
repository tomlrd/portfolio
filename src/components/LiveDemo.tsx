import {
  BookOpen,
  Code,
  ExternalLink,
  LoaderCircle,
  RotateCw,
} from "lucide-react";
import { useEffect, useState } from "react";
import { assistantDemo } from "../content/site";
import { useContent } from "../hooks/useContent";
import { AnchorButton, Button } from "./ui/Button";

type Status = "waking" | "ready" | "error";

const wakeUpDeadline = 120_000;
const retryDelay = 3_000;

function pause(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    const timer = setTimeout(resolve, ms);
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      resolve();
    });
  });
}

async function waitUntilReady(signal: AbortSignal): Promise<boolean> {
  const deadline = Date.now() + wakeUpDeadline;
  while (!signal.aborted && Date.now() < deadline) {
    try {
      const response = await fetch(`${assistantDemo.url}/api/health`, {
        cache: "no-store",
        signal,
      });
      const body = (await response.json()) as { ready?: boolean };
      if (body.ready) {
        return true;
      }
    } catch {
      if (signal.aborted) {
        return false;
      }
    }
    await pause(retryDelay, signal);
  }
  return false;
}

export function LiveDemo() {
  const { automation } = useContent();
  const copy = automation.demo;
  const [status, setStatus] = useState<Status>("waking");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    void waitUntilReady(controller.signal).then((ready) => {
      if (!controller.signal.aborted) {
        setStatus(ready ? "ready" : "error");
      }
    });
    return () => controller.abort();
  }, [attempt]);

  const retry = () => {
    setStatus("waking");
    setAttempt((value) => value + 1);
  };

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-card border border-line bg-surface">
        {status === "ready" ? (
          <>
            <iframe
              src={assistantDemo.url}
              title={copy.frameTitle}
              className="hidden h-[680px] w-full bg-canvas md:block"
            />
            <div className="flex flex-col items-center gap-4 px-6 py-12 text-center md:hidden">
              <p className="font-display text-lg font-semibold tracking-tight">
                {copy.ready}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                {copy.mobileHint}
              </p>
              <AnchorButton href={assistantDemo.url}>
                <ExternalLink size={16} />
                {copy.openDemo}
              </AnchorButton>
            </div>
          </>
        ) : (
          <div
            role="status"
            className="flex h-80 flex-col items-center justify-center gap-4 px-6 text-center md:h-[680px]"
          >
            {status === "waking" ? (
              <>
                <LoaderCircle size={28} className="animate-spin text-accent" />
                <p className="font-display text-lg font-semibold tracking-tight">
                  {copy.waking}
                </p>
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  {copy.wakingHint}
                </p>
              </>
            ) : (
              <>
                <p className="font-display text-lg font-semibold tracking-tight">
                  {copy.error}
                </p>
                <Button type="button" variant="secondary" onClick={retry}>
                  <RotateCw size={16} />
                  {copy.retry}
                </Button>
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs leading-relaxed text-faint">{copy.note}</p>
        <div className="flex flex-wrap gap-3">
          <AnchorButton href={assistantDemo.url} variant="secondary">
            <ExternalLink size={16} />
            {copy.openFull}
          </AnchorButton>
          <AnchorButton href={assistantDemo.guideUrl} variant="secondary">
            <BookOpen size={16} />
            {copy.guide}
          </AnchorButton>
          <AnchorButton href={assistantDemo.codeUrl} variant="secondary">
            <Code size={16} />
            {copy.code}
          </AnchorButton>
        </div>
      </div>
    </div>
  );
}
