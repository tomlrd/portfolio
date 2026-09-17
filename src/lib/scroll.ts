export function onScrollFrame(apply: () => void): () => void {
  let frame = 0;

  const run = () => {
    frame = 0;
    apply();
  };

  const schedule = () => {
    if (frame === 0) {
      frame = requestAnimationFrame(run);
    }
  };

  apply();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });

  return () => {
    if (frame !== 0) {
      cancelAnimationFrame(frame);
    }
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}
