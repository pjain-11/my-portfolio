import { useEffect, useState, useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** True once the component has mounted on the client. Used to defer
 * rendering theme-dependent UI until after hydration (avoids a mismatch
 * between server and client markup). Implemented with useSyncExternalStore
 * instead of a setState-in-effect so it doesn't trigger an extra render. */
export function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/** Tracks the user's `prefers-reduced-motion` setting so animations can be
 * skipped for people who ask for that. Server render assumes "no preference"
 * and corrects on mount. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

/** Returns the id of the section currently in view, for nav highlighting.
 * Uses IntersectionObserver and picks the entry closest to the top of the
 * viewport among those intersecting. */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size > 0) {
          const [topMost] = [...visible.entries()].sort((a, b) => a[1] - b[1]);
          setActiveId(topMost[0]);
        }
      },
      // Bias the "active" band toward the upper third of the viewport.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

/** Standard "reveal on scroll" motion props for framer-motion, collapsed to
 * a no-op when the user prefers reduced motion. */
export function useReveal(delay = 0) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.4, delay },
  };
}

/** Scroll progress through the whole document, 0–1. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}
