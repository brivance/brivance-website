"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";

type CarouselItem =
  | { kind: "video"; src: string; type?: string; poster?: string }
  | {
    kind: "image";
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };

function useInterval(callback: () => void, delay: number | null) {
  const cb = useRef(callback);
  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = window.setInterval(() => cb.current(), delay);
    return () => window.clearInterval(id);
  }, [delay]);
}

// Slide width: clamp(min, vwFactor*vw, max)
function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(n, hi));
}

const easeOutCubic = [0.22, 1, 0.36, 1] as const;

export function WebsiteCarousel({
  items,
  intervalMs = 9000,
  className = "",
  // tweak these to match your aesthetic
  minSlidePx = 260,
  introDelay = 0,
  maxSlidePx = 520,
  slideVw = 0.36,
  gapPx = 24,
  activeScale = 1.06,
  sideScale = 0.92,
}: {
  items: CarouselItem[];
  intervalMs?: number;
  className?: string;
  minSlidePx?: number;
  introDelay?: number;
  maxSlidePx?: number;
  slideVw?: number;
  gapPx?: number;
  activeScale?: number;
  sideScale?: number;
}) {
  const [introDone, setIntroDone] = useState(false);
  const N = items.length;
  const tripled = useMemo(() => [...items, ...items, ...items], [items]);
  const [snapMode, setSnapMode] = useState(false);

  // index into tripled array. Start at the first element of the middle copy.
  const [idx, setIdx] = useState(N);
  const [paused, setPaused] = useState(false);
  const controls = useAnimation();

  const [vw, setVw] = useState(0);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slideWpx = useMemo(() => {
    if (!vw) return clamp(999, minSlidePx, maxSlidePx);
    return clamp(vw * slideVw, minSlidePx, maxSlidePx);
  }, [vw, minSlidePx, maxSlidePx, slideVw]);

  // Translate track so that slide idx is centered in viewport.
  const xForIndex = (i: number) => {
    if (!vw) return 0;
    return (vw - slideWpx) / 2 - i * (slideWpx + gapPx);
  };

  // initial position
  useEffect(() => {
    controls.set({ x: xForIndex(idx) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vw, slideWpx, gapPx]);

  // Auto-advance
  useInterval(() => {
    setIdx((i) => i + 1);
  }, paused ? null : intervalMs);

  // Animate on idx change; also perform the “seamless snap” when crossing boundaries.
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      // animate to idx
      await controls.start({
        x: xForIndex(idx),
        transition: { duration: 0.75, ease: easeOutCubic },
      });

      if (cancelled) return;

      // snap only once
      if (idx >= 2 * N) {
        const snapped = idx - N;

        setSnapMode(true);
        controls.set({ x: xForIndex(snapped) }); // snap track instantly
        setIdx(snapped);

        requestAnimationFrame(() => setSnapMode(false));
        return;
      }

      if (idx < N) {
        const snapped = idx + N;
        setSnapMode(true);
        controls.set({ x: xForIndex(snapped) });
        setIdx(snapped);
        requestAnimationFrame(() => setSnapMode(false));
      }
    };

    run();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, N, controls, vw, slideWpx, gapPx]);

  return (
    <div
      className={`relative w-full overflow-hidden py-8 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex items-stretch"
        style={{ gap: `${gapPx}px` }}
        animate={controls}
      >
        {tripled.map((it, i) => {
          const active = i === idx;
          const neighbor = i === idx - 1 || i === idx + 1;

          // Intro: center first, neighbors slightly after
          const introOpacity = active ? 1 : neighbor ? 0.85 : 0;
          const introY = active ? -6 : neighbor ? 0 : 10;

          return (
            <motion.div
              key={`${i}-${it.kind}-${(it as CarouselItem).src}`}
              className="shrink-0"
              style={{
                width: `clamp(${minSlidePx}px, ${slideVw * 100}vw, ${maxSlidePx}px)`,
              }}

              // Only run an entrance once (on mount)
              initial={
                introDone
                  ? false
                  : { opacity: 0, y: 12, scale: active ? activeScale : sideScale }
              }

              animate={{
                scale: active ? activeScale : sideScale,
                opacity: introDone ? (active ? 1 : 0.78) : introOpacity,
                y: introDone ? (active ? -6 : 0) : introY,
              }}

              // When the ACTIVE slide finishes its intro, mark intro as done
              onAnimationComplete={() => {
                // only finish intro on the initial center slide, not during later tick animations
                if (!introDone && i === N) setIntroDone(true);
              }}

              transition={
                snapMode
                  ? { duration: 0 }
                  : introDone
                    ? { duration: 0.55, ease: "easeOut" }
                    : {
                      duration: 1.5,
                      ease: easeOutCubic,
                      delay:
                        introDelay +
                        (active ? 0 : neighbor ? 0.25 : 0),
                    }
              }
            >
              <div className="relative rounded-xl overflow-hidden">
                {it.kind === "video" ? (
                  <video
                    className="block w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={it.poster}
                  >
                    <source src={it.src} type={it.type ?? "video/mp4"} />
                  </video>
                ) : (
                  <Image
                    src={it.src}
                    alt={it.alt}
                    width={it.width}
                    height={it.height}
                    priority={it.priority}
                    className="block w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Optional dots that map to the logical index (0..N-1) */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => {
          const logical = ((idx - N) % N + N) % N; // idx in middle copy -> 0..N-1
          return (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition ${i === logical ? "bg-black/70" : "bg-black/20"
                }`}
              onClick={() => setIdx(N + i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div> */}
    </div>
  );
}