"use client";

import Image from "next/image";
import type { CSSProperties, FormEvent } from "react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Product = {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  front: string;
  back: string;
  accent: string;
  soft: string;
  fruit: string;
  notes: string[];
};

const products: Product[] = [
  {
    id: "mango",
    name: "Mango",
    shortName: "Mango",
    tagline: "Golden, pulpy and sun-rich",
    front: "/rawsa-designs/cropped/Mango.png",
    back: "/rawsa-designs/cropped/MangoBack.png",
    accent: "#f59e0b",
    soft: "#fff4c8",
    fruit: "Alphonso-style fruit richness",
    notes: ["Higher pulp feel", "No added sugar", "No added colour"],
  },
  {
    id: "orange",
    name: "Orange",
    shortName: "Orange",
    tagline: "Bright citrus with clean refreshment",
    front: "/rawsa-designs/cropped/Orange.png",
    back: "/rawsa-designs/cropped/OrangeBack.png",
    accent: "#f97316",
    soft: "#ffedd5",
    fruit: "Juicy citrus brightness",
    notes: ["Zesty flavour", "Light refreshment", "Fruit-forward taste"],
  },
  {
    id: "pink-guava",
    name: "Pink Guava",
    shortName: "Guava",
    tagline: "Tropical, floral and smooth",
    front: "/rawsa-designs/cropped/PinkGuava.png",
    back: "/rawsa-designs/cropped/PinkGuavaBack.png",
    accent: "#ec4899",
    soft: "#fce7f3",
    fruit: "Pink guava pulp character",
    notes: ["Tropical aroma", "Smooth mouthfeel", "Modern fruit drink"],
  },
  {
    id: "sweet-tamarinda",
    name: "Sweet Tamarinda",
    shortName: "Tamarinda",
    tagline: "Indian tang with a sweet finish",
    front: "/rawsa-designs/cropped/SweetTamarinda.png",
    back: "/rawsa-designs/cropped/SweetTamarindaBack.png",
    accent: "#b45309",
    soft: "#fef3c7",
    fruit: "Heritage tamarind flavour",
    notes: ["Tangy profile", "Indian taste memory", "Balanced finish"],
  },
  {
    id: "appyrush",
    name: "AppyRush",
    shortName: "AppyRush",
    tagline: "Crisp apple energy",
    front: "/rawsa-designs/cropped/AppyRush.png",
    back: "/rawsa-designs/cropped/AppyRush%20Back.png",
    accent: "#dc2626",
    soft: "#fee2e2",
    fruit: "Apple-led refreshment",
    notes: ["Crisp taste", "Lively sip", "Shelf-ready design"],
  },
];

const ingredientCards = [
  {
    label: "Fruit Pulp",
    title: "More body in every sip",
    copy: "Rawsa is built around a fuller fruit experience, giving each flavour a richer, more satisfying mouthfeel.",
  },
  {
    label: "Herbal Touch",
    title: "Botanical inspiration",
    copy: "Ashwagandha, brahmi and Indian herbal ideas guide the wellness tone without turning the drink into medicine.",
  },
  {
    label: "Modern Choice",
    title: "Refreshment with restraint",
    copy: "No added colour and no artificial sweetener messaging stays close to the packaging and keeps the promise clear.",
  },
];

type CmpVal = true | false | "partial";

const compareFeatures = [
  "Higher Pulp Feel",
  "No Added Sugar",
  "No Added Colour",
  "No Artificial Sweetener",
  "Herbal Inspiration",
  "Lower Calorie Direction",
  "Real Fruit Character",
];

const compareDrinks: { name: string; highlight: boolean; values: CmpVal[] }[] = [
  {
    name: "Rawsa",
    highlight: true,
    values: [true, true, true, true, true, true, true],
  },
  {
    name: "Regular Juice",
    highlight: false,
    values: ["partial", false, false, false, false, false, "partial"],
  },
  {
    name: "Energy Drinks",
    highlight: false,
    values: [false, false, false, "partial", false, "partial", false],
  },
  {
    name: "Carbonated Soda",
    highlight: false,
    values: [false, false, false, false, false, false, false],
  },
];

const whyItems = [
  {
    title: "Higher Pulp Feel",
    copy: "Fuller fruit texture and a richer sip experience than ordinary thin refreshers.",
    icon: "drop",
  },
  {
    title: "No Added Sugar",
    copy: "A front-label promise that makes the range feel lighter, clearer and easier to trust.",
    icon: "leaf",
  },
  {
    title: "No Added Colour",
    copy: "A clean, direct packaging promise that helps Rawsa feel honest on the shelf.",
    icon: "eye",
  },
  {
    title: "No Artificial Sweetener",
    copy: "Sweetness positioning stays clear, modern and aligned with the bottle design.",
    icon: "shield",
  },
  {
    title: "Lower-Calorie Direction",
    copy: "A lighter refreshment idea for everyday moments and wellness-aware consumers.",
    icon: "spark",
  },
  {
    title: "Herbal Inspiration",
    copy: "Ashwagandha, brahmi and botanical thinking add a differentiated Indian wellness layer.",
    icon: "herb",
  },
];

function WhyIcon({ name }: { name: string }) {
  return (
    <span className="why-icon" aria-hidden="true">
      {name === "drop" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      )}
      {name === "leaf" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )}
      {name === "eye" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
      {name === "shield" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )}
      {name === "spark" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )}
      {name === "herb" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12" />
          <path d="M12 12C12 6 17 4 17 4s1 6-5 8z" />
          <path d="M12 12C12 6 7 4 7 4s-1 6 5 8z" />
        </svg>
      )}
    </span>
  );
}

function CmpCell({ value }: { value: CmpVal }) {
  if (value === true) {
    return (
      <span className="cmp-yes" aria-label="Yes">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="cmp-partial" aria-label="Partial">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    );
  }
  return (
    <span className="cmp-no" aria-label="No">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
}

// WhatsApp order number (consumer care). Change here if it updates.
const ORDER_WHATSAPP = "918018353597";

const navLinks = [
  { href: "#flavours", label: "Flavours", id: "flavours" },
  { href: "#why", label: "Why Rawsa", id: "why" },
  { href: "#compare", label: "Compare", id: "compare" },
  { href: "#ingredients", label: "Ingredients", id: "ingredients" },
  { href: "#login", label: "Sign In", id: "login" },
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [flipped, setFlipped] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");

  const navSlotRef = useRef<HTMLSpanElement>(null);
  const drawerSlotRef = useRef<HTMLSpanElement>(null);
  const flyRef = useRef<HTMLImageElement>(null);
  const lineupRef = useRef<HTMLDivElement>(null);
  const flyReady = useRef(false);
  const isScrollingRef = useRef(false);

  const handleProduct = (product: Product) => {
    setActiveProduct(product);
    setFlipped(false);

    // Scroll lineup to center this product on mobile
    const container = lineupRef.current;
    if (!container || window.innerWidth > 720) return;

    const index = products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const children = Array.from(container.querySelectorAll(".hero-bottle")) as HTMLElement[];
      const child = children[index];
      if (child) {
        isScrollingRef.current = true;
        const targetScroll = child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;
        container.scrollTo({ left: targetScroll, behavior: "smooth" });
        // Release lock after scroll completes
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    }
  };

  const handleLineupScroll = () => {
    if (isScrollingRef.current) return;
    const container = lineupRef.current;
    if (!container || window.innerWidth > 720) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const children = Array.from(container.querySelectorAll(".hero-bottle")) as HTMLElement[];

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (products[closestIndex] && products[closestIndex].id !== activeProduct.id) {
      setActiveProduct(products[closestIndex]);
    }
  };

  // Center initial active product on mobile mount
  useEffect(() => {
    const container = lineupRef.current;
    if (!container || window.innerWidth > 720) return;

    const index = products.findIndex((p) => p.id === activeProduct.id);
    if (index !== -1) {
      const children = Array.from(container.querySelectorAll(".hero-bottle")) as HTMLElement[];
      const child = children[index];
      if (child) {
        const targetScroll = child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;
        container.scrollLeft = targetScroll;
      }
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // Active section tracking
  useEffect(() => {
    const sectionIds = ["hero", "flavours", "why", "compare", "ingredients", "story", "distributor"];
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
    const els = document.querySelectorAll(".reveal");
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

  // Flying logo (FLIP): navbar slot <-> drawer slot
  useIsoLayoutEffect(() => {
    const fly = flyRef.current;
    const navSlot = navSlotRef.current;
    const drawerSlot = drawerSlotRef.current;
    if (!fly || !navSlot) return;

    const place = (animate: boolean) => {
      const useDrawer = mobileMenuOpen && drawerSlot && drawerSlot.offsetWidth > 0;
      const target = useDrawer ? drawerSlot! : navSlot;
      const prev = fly.getBoundingClientRect();
      const r = target.getBoundingClientRect();
      fly.style.width = `${r.width}px`;
      fly.style.top = `${r.top}px`;
      fly.style.left = `${r.left}px`;
      fly.style.opacity = "1";
      if (!animate || !flyReady.current || prev.width === 0) {
        flyReady.current = true;
        return;
      }
      const next = fly.getBoundingClientRect();
      const dx = prev.left - next.left;
      const dy = prev.top - next.top;
      const ds = prev.width / next.width || 1;
      fly.animate(
        [
          { transform: `translate(${dx}px, ${dy}px) scale(${ds})` },
          { transform: "none" },
        ],
        { duration: 560, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
      );
      flyReady.current = true;
    };

    place(true);
    const onResize = () => place(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileMenuOpen]);

  return (
    <main className="site-shell">
      {/* Flying logo — animates between navbar and drawer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={flyRef}
        src="/rawsa-designs/cropped/RAWSA_logo.png"
        alt=""
        aria-hidden="true"
        className="logo-fly logo-dark"
      />

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${mobileMenuOpen ? " is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Flying Logo for Mobile */}
      <div 
        className={`flying-logo-container${mobileMenuOpen ? " is-flying" : ""}`} 
        aria-hidden="true"
      >
        <Image
          src="/rawsa-designs/cropped/RAWSA_logo.png"
          alt="Rawsa"
          width={140}
          height={42}
          className="logo-dark"
        />
      </div>

      {/* Mobile drawer */}
      <nav
        className={`mobile-drawer${mobileMenuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="drawer-head">
          <span className="logo-slot" ref={drawerSlotRef}>
            <Image src="/rawsa-designs/cropped/RAWSA_logo.png" alt="Rawsa" width={100} height={30} className="logo-dark logo-ghost drawer-logo" />
          </span>
          <button
            className="drawer-close"
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="drawer-links">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={activeNav === id ? "is-active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="primary-button drawer-cta" href="#distributor" onClick={() => setMobileMenuOpen(false)}>
          Distributor Enquiry
        </a>
      </nav>

      {/* Top navigation */}
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand-mark" href="#hero" aria-label="Rawsa home">
          <span className="logo-slot nav-slot" ref={navSlotRef}>
            <Image
              src="/rawsa-designs/cropped/RAWSA_logo.png"
              alt="Rawsa"
              width={140}
              height={42}
              priority
              className="logo-dark logo-ghost nav-logo"
            />
          </span>
          <span className="brand-company">by Stoneman Foodtech</span>
        </a>
        <div className="nav-links" role="list">
          {navLinks.filter(l => l.id !== "login").map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              role="listitem"
              className={activeNav === id ? "is-active" : ""}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-signin" href="#login">
            Sign In
          </a>
          <a className="nav-cta" href="#distributor">
            Distributor Enquiry
          </a>
          <button
            className="hamburger"
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            <span className={`ham-line${mobileMenuOpen ? " top-open" : ""}`} />
            <span className={`ham-line${mobileMenuOpen ? " mid-open" : ""}`} />
            <span className={`ham-line${mobileMenuOpen ? " bot-open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Stoneman Foodtech presents</p>
          <h1>
            <span>Real fruit.</span>
            <span>Herbal refreshment</span>
            <span>Rawsa.</span>
          </h1>
          <div className="mobile-product-strip" aria-label="Rawsa featured products">
            {products.slice(0, 3).map((product) => (
              <Image
                key={product.id}
                src={product.front}
                alt={`Rawsa ${product.name}`}
                width={150}
                height={422}
                priority
              />
            ))}
          </div>
          <p className="hero-text">
            A colourful fruit drink collection crafted for higher pulp feel,
            clean label appeal and a modern Indian refreshment ritual.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#flavours">
              Explore Flavours
            </a>
            <a className="secondary-button" href="#distributor">
              Become a Distributor
            </a>
          </div>
          <div className="claim-row" aria-label="Rawsa product highlights">
            <div className="claim-track">
              <span>Higher pulp feel</span>
              <span>No added colour</span>
              <span>No added sugar</span>
              <span>No artificial sweetener</span>
              <span>Higher pulp feel</span>
              <span>No added colour</span>
              <span>No added sugar</span>
              <span>No artificial sweetener</span>
            </div>
          </div>
          <div className="hero-stats" aria-label="Rawsa at a glance">
            <div className="stat-item">
              <strong>5</strong>
              <span>Different<br/>Flavours</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>0</strong>
              <span>Artificial<br/>Sweeteners</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>100%</strong>
              <span>Natural<br/>Fruit</span>
            </div>
          </div>
        </div>

        <div className="hero-stage" aria-label="Rawsa product range">
          <div className="hero-burst hero-burst-one" />
          <div className="hero-burst hero-burst-two" />
          <div className="product-lineup" ref={lineupRef} onScroll={handleLineupScroll}>
            {products.map((product, index) => (
              <button
                key={product.id}
                type="button"
                className={`hero-bottle hero-bottle-${index}${activeProduct.id === product.id ? " is-active" : ""}`}
                onClick={() => handleProduct(product)}
                aria-label={`Show ${product.name}`}
              >
                <Image
                  src={product.front}
                  alt={`Rawsa ${product.name} bottle`}
                  width={380}
                  height={1071}
                  priority={index < 3}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Flavours */}
      <section id="flavours" className="section flavour-section">
        <div className="section-heading reveal">
          <p className="eyebrow">The Rawsa range</p>
          <h2>Five shelf-ready flavours, one fresh family.</h2>
          <p>
            Tap a flavour, then tap the bottle to see front and back packaging
            without losing the clean product focus.
          </p>
        </div>

        <div className="flavour-grid reveal">
          <div
            className="flavour-panel"
            style={{ "--accent": activeProduct.accent, "--soft": activeProduct.soft } as CSSProperties}
          >
            <div className="flavour-copy">
              <p className="product-kicker">{activeProduct.fruit}</p>
              <h3>{activeProduct.name}</h3>
              <p>{activeProduct.tagline}</p>
              <div className="note-list">
                {activeProduct.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`flip-product ${flipped ? "is-flipped" : ""}`}
              onClick={() => setFlipped((value) => !value)}
              aria-label={`Flip ${activeProduct.name} bottle to see ${flipped ? "front" : "back"}`}
            >
              <span className="flip-face flip-front">
                <Image
                  src={activeProduct.front}
                  alt={`Rawsa ${activeProduct.name} front label`}
                  width={420}
                  height={1181}
                  priority
                />
              </span>
              <span className="flip-face flip-back">
                <Image
                  src={activeProduct.back}
                  alt={`Rawsa ${activeProduct.name} back label`}
                  width={420}
                  height={1181}
                />
              </span>
            </button>

            <div className="flavour-buy">
              <p className="flip-hint">Tap bottle to flip</p>
              <a
                className="primary-button buy-now"
                href={`https://wa.me/${ORDER_WHATSAPP}?text=${encodeURIComponent(
                  `Hi Rawsa! I'd like to order ${activeProduct.name}. Please share price and delivery details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order Rawsa ${activeProduct.name} on WhatsApp`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.05 1.6 5.78L2 22l4.45-1.7a9.86 9.86 0 0 0 5.59 1.72h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.16c-.25.7-1.45 1.32-2 1.4-.54.08-1.18.11-1.9-.12-.43-.14-.99-.32-1.7-.63-3-1.3-4.95-4.32-5.1-4.52-.15-.2-1.22-1.62-1.22-3.1 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.25.6.84 2.07.91 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.49.22.56.35.07.12.07.72-.18 1.42z" />
                </svg>
                Buy {activeProduct.name} Now
              </a>
            </div>
          </div>

          <div className="flavour-selector" aria-label="Choose a flavour">
            {products.map((product) => (
              <button
                key={product.id}
                type="button"
                className={product.id === activeProduct.id ? "is-active" : ""}
                onClick={() => handleProduct(product)}
                style={{ "--accent": product.accent, "--soft": product.soft } as CSSProperties}
                aria-pressed={product.id === activeProduct.id}
              >
                <span className="selector-thumb">
                  <Image
                    src={product.front}
                    alt=""
                    width={76}
                    height={214}
                  />
                </span>
                <span>
                  <strong>{product.name}</strong>
                  <small>{product.tagline}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rawsa */}
      <section id="why" className="section why-section">
        <div className="section-heading align-left reveal">
          <p className="eyebrow">Why Rawsa</p>
          <h2>Built for people who want the drink to taste as good as it looks.</h2>
        </div>
        <div className="why-grid">
          {whyItems.map(({ title, copy, icon }, i) => (
            <article
              key={title}
              className="why-card reveal"
              style={{ "--reveal-delay": `${i * 60}ms` } as CSSProperties}
            >
              <div className="why-header">
                <WhyIcon name={icon} />
                <h3>{title}</h3>
              </div>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Compare Section — NEW */}
      <section id="compare" className="section compare-section">
        <div className="section-heading reveal">
          <p className="eyebrow">How Rawsa compares</p>
          <h2>A different kind of drink.</h2>
          <p>
            See how Rawsa stacks up against the alternatives on the shelf.
          </p>
        </div>

        <div className="compare-wrap reveal">
          <div className="compare-scroll">
            <table className="compare-table" role="table">
              <thead>
                <tr>
                  <th scope="col" className="feat-col">Feature</th>
                  {compareDrinks.map((d) => (
                    <th
                      key={d.name}
                      scope="col"
                      className={`drink-col${d.highlight ? " is-rawsa" : ""}`}
                    >
                      {d.highlight ? (
                        <span className="rawsa-col-head">
                          <Image
                            src="/rawsa-designs/cropped/RAWSA_logo.png"
                            alt="Rawsa"
                            width={86}
                            height={26}
                            className="logo-dark"
                          />
                          <span className="rawsa-badge">Our Pick</span>
                        </span>
                      ) : (
                        d.name
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((feat, fi) => (
                  <tr key={feat}>
                    <td className="feat-col">{feat}</td>
                    {compareDrinks.map((d) => (
                      <td
                        key={d.name}
                        className={`drink-col${d.highlight ? " is-rawsa" : ""}`}
                      >
                        <CmpCell value={d.values[fi]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="compare-legend">
            <span className="cmp-yes" aria-label="Yes">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>Present</span>
            <span className="cmp-partial" aria-label="Partial">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
            <span>Varies by brand</span>
            <span className="cmp-no" aria-label="No">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
            <span>Typically absent</span>
          </div>
          <p className="compare-note">Based on typical category formulations. Individual products may vary.</p>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="section ingredients-section">
        <div className="ingredient-visual reveal">
          <Image
            src={activeProduct.front}
            alt={`Rawsa ${activeProduct.name} bottle`}
            width={390}
            height={1098}
          />
        </div>
        <div className="ingredient-content reveal">
          <p className="eyebrow">Ingredient story</p>
          <h2>Fruit first, then a thoughtful herbal signature.</h2>
          <p>
            Rawsa should feel bright and familiar at first sip, then leave a
            subtle botanical impression that makes it different from everyday
            juice drinks.
          </p>
          <div className="ingredient-cards">
            {ingredientCards.map((card) => (
              <article key={card.label}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="section story-section">
        <div className="story-card reveal">
          <p className="eyebrow">Stoneman Foodtech</p>
          <h2>A modern Indian foodtech brand starting with a drink people notice.</h2>
          <p>
            Rawsa brings together fruit-rich refreshment, Indian flavour memory,
            herbal inspiration and packaging with real shelf presence. The
            result is a product family that feels ready for cafes, retail
            counters, supermarkets and distributor conversations.
          </p>
        </div>
        <div className="story-products reveal">
          {products.slice(0, 3).map((product) => (
            <Image
              key={product.id}
              src={product.front}
              alt={`Rawsa ${product.name}`}
              width={260}
              height={732}
            />
          ))}
        </div>
      </section>

      {/* Distributor */}
      <section id="distributor" className="section distributor-section">
        <div className="distributor-copy reveal">
          <p className="eyebrow">Distributor enquiry</p>
          <h2>Bring Rawsa to your market.</h2>
          <p>
            For retail, cafe, campus, hospitality and distribution enquiries,
            share your details and the Stoneman Foodtech team can follow up.
          </p>
        </div>
        <form className="enquiry-form reveal" onSubmit={handleSubmit} noValidate>
          {submitted ? (
            <div className="form-success">
              <strong>Thank you.</strong>
              <span>Your Rawsa distributor enquiry has been noted.</span>
            </div>
          ) : (
            <>
              <input required name="name" placeholder="Your name" autoComplete="name" />
              <input required type="email" name="email" placeholder="you@company.com" autoComplete="email" />
              <input required name="city" placeholder="City, State" autoComplete="address-level2" />
              <textarea name="message" placeholder="Tell us about your channel or requirement" />
              <button className="primary-button" type="submit">
                Send Enquiry
              </button>
            </>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-brand">
          <Image
            src="/rawsa-designs/cropped/RAWSA_logo.png"
            alt="Rawsa"
            width={130}
            height={39}
            className="footer-logo"
          />
          <p>Rawsa by Stoneman Foodtech. Fruit-rich refreshment with a modern Indian botanical spirit.</p>
        </div>
        <div className="footer-links">
          <a href="#flavours">Flavours</a>
          <a href="#why">Why Rawsa</a>
          <a href="#compare">Compare</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#distributor">Distributor Enquiry</a>
        </div>
        <address className="footer-address">
          <strong>Stoneman Food and Beverages Pvt Ltd</strong>
          <span>Ground Floor, Plot No. 946/2999</span>
          <span>Prasanti Vihar, Barmunda</span>
          <span>Bhubaneswar – 751003, Odisha</span>
          <a href="mailto:admin@stonemanfoodtech.com">admin@stonemanfoodtech.com</a>
        </address>
        <p className="copyright">© {new Date().getFullYear()} Stoneman Food and Beverages Pvt Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}
