"use client";

import { useState, useEffect, useRef } from "react";
import { products, sectionIds } from "./_components/data";
import { Navbar } from "./_components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import { FlavoursSection } from "./_components/FlavoursSection";
import { WhySection } from "./_components/WhySection";
import { CompareSection } from "./_components/CompareSection";
import { IngredientsSection } from "./_components/IngredientsSection";
import { StorySection } from "./_components/StorySection";
import { DistributorSection } from "./_components/DistributorSection";
import { FooterSection } from "./_components/FooterSection";
import { PageWipe } from "./_components/PageWipe";
import type { Product } from "./_components/types";

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);
  const [flipped, setFlipped] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");
  const lineupRef = useRef<HTMLDivElement>(null);

  const handleProduct = (product: Product) => {
    setActiveProduct(product);
    setFlipped(false);
  };

  // Active section tracking
  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveNav(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationPlayState = "running";
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1040) setMobileMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="site-shell">
      {/* Page-load wipe animation */}
      <PageWipe />

      {/* Skip to content link for accessibility */}
      <a href="#hero" className="skip-link">
        Skip to content
      </a>

      <Navbar
        activeNav={activeNav}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((v) => !v)}
        onNavClick={() => setMobileMenuOpen(false)}
      />

      <HeroSection
        activeProduct={activeProduct}
        onSelectProduct={handleProduct}
        lineupRef={lineupRef}
      />

      <FlavoursSection
        activeProduct={activeProduct}
        flipped={flipped}
        onFlip={() => setFlipped((v) => !v)}
        onSelectProduct={handleProduct}
      />

      <WhySection />
      <CompareSection />

      <IngredientsSection />
      <StorySection />
      <DistributorSection />
      <FooterSection />
    </main>
  );
}
