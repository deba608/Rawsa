"use client";

import { useEffect, useRef } from "react";
import type { ReactNode, CSSProperties, ElementType } from "react";

type Variant = "up" | "left" | "right" | "scale" | "stagger" | "none";

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationPlayState = "running";
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  let cls = className;
  if (variant === "stagger") cls += " reveal-stagger";
  else if (variant === "none") cls += "";
  else cls += ` reveal reveal-${variant}`;

  return (
    <Tag
      ref={ref as never}
      className={cls}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
