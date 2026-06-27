"use client";

import { useEffect, useState } from "react";

type Phase = "fill" | "rise" | "wash" | "done";

export function PageWipe() {
  // Start hidden until the effect decides whether to play (avoids SSR flash)
  const [phase, setPhase] = useState<Phase>("done");

  useEffect(() => {
    // Play only once per tab session, and never for reduced-motion users
    const seen = sessionStorage.getItem("rawsa-intro");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      sessionStorage.setItem("rawsa-intro", "1");
      return;
    }
    sessionStorage.setItem("rawsa-intro", "1");

    setPhase("fill");
    const t1 = setTimeout(() => setPhase("rise"), 60);   // juice rises to cover
    const t2 = setTimeout(() => setPhase("wash"), 1280);  // washes off the top
    const t3 = setTimeout(() => setPhase("done"), 2480);  // unmount
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`juice-intro juice-intro--${phase}`} aria-hidden="true">
      <div className="juice-body">
        {/* Wavy liquid surface that leads the rise */}
        <svg
          className="juice-surface"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path d="M0,70 C180,10 360,10 540,55 C760,110 920,110 1140,55 C1280,20 1380,30 1440,60 L1440,140 L0,140 Z" />
        </svg>
        <span className="juice-bubble juice-bubble--1" />
        <span className="juice-bubble juice-bubble--2" />
        <span className="juice-bubble juice-bubble--3" />
      </div>
      <span className="juice-mark">RAWSA</span>
    </div>
  );
}
