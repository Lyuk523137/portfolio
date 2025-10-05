// components/PortfolioCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  title: string;
  href: string;
  image: string; // path in /public
  tech?: string[];
};

export default function PortfolioCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  // widths for different breakpoints (must match Tailwind classes below)
  const slideMinWidth = useMemo(() => {
    if (typeof window === "undefined") return 0;
    const w = window.innerWidth;
    if (w >= 1280) return Math.round(w * 0.45); // xl:min-w-[45%]
    if (w >= 1024) return Math.round(w * 0.55); // lg:min-w-[55%]
    if (w >= 640) return Math.round(w * 0.75); // sm:min-w-[75%]
    return Math.round(w * 0.9); // min-w-[90%]
  }, []);

  // Keep active dot in sync while user drags
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handler = () => {
      const slideW = slideMinWidth || (el.firstElementChild as HTMLElement)?.clientWidth || 1;
      const i = Math.round(el.scrollLeft / slideW);
      setIndex(Math.max(0, Math.min(items.length - 1, i)));
    };

    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [items.length, slideMinWidth]);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    slide.scrollIntoView({ inline: "start", behavior: "smooth" });
  };

  const prev = () => scrollToIndex(Math.max(0, index - 1));
  const next = () => scrollToIndex(Math.min(items.length - 1, index + 1));

  // Keyboard arrows (only when carousel is in view)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="
          flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
          [scrollbar-width:none] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden
          pb-6
        "
        aria-label="Project carousel"
      >
        {items.map((item, i) => (
          <a
            key={item.title + i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group snap-start shrink-0 
              min-w-[90%] sm:min-w-[75%] lg:min-w-[55%] xl:min-w-[45%]
            "
          >
            <article
              className="
                relative rounded-3xl overflow-hidden bg-neutral-800
                ring-1 ring-white/10 hover:ring-white/20 transition
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
            >
              {/* Preview image */}
              <div className="aspect-[16/9] relative">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  priority={i < 2}
                  className="object-cover transition scale-100 group-hover:scale-[1.02]"
                />
                {/* Hover veil */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </div>

              {/* Meta */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.tech && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-neutral-700/70 px-2 py-1 text-xs text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-4 text-sm text-neutral-300">Click to open ↗</p>
              </div>
            </article>
          </a>
        ))}
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          aria-label="Previous"
          onClick={prev}
          className="
            pointer-events-auto ml-1 sm:ml-2 rounded-full bg-white/10 hover:bg-white/20
            ring-1 ring-white/20 backdrop-blur p-2 transition
          "
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="
            pointer-events-auto mr-1 sm:mr-2 rounded-full bg-white/10 hover:bg-white/20
            ring-1 ring-white/20 backdrop-blur p-2 transition
          "
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition ${
              index === i ? "w-7 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* Minimal inline icons (no extra deps) */
function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
