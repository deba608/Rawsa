"use client";

import { useEffect, useState } from "react";

export function PageWipe() {
  const [phase, setPhase] = useState<"cover" | "slide" | "done">("cover");

  useEffect(() => {
    // Small delay so the element mounts fully before animating
    const t1 = setTimeout(() => setPhase("slide"), 120);
    // Once slid off, remove from DOM entirely
    const t2 = setTimeout(() => setPhase("done"), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`page-wipe${phase === "slide" ? " page-wipe--slide" : ""}`}
    />
  );
}
