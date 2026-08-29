"use client";

import { useScrollProgress } from "@/lib/hooks";

/** Thin reading-progress bar pinned to the very top of the viewport. */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-transparent"
    >
      <div
        className="bg-accent h-full origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
