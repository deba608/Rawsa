"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { navLinks } from "./data";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Navbar({
  activeNav,
  mobileMenuOpen,
  onToggleMenu,
  onNavClick,
}: {
  activeNav: string;
  mobileMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavClick: () => void;
}) {
  const navSlotRef = useRef<HTMLSpanElement>(null);
  const drawerSlotRef = useRef<HTMLSpanElement>(null);
  const flyRef = useRef<HTMLImageElement>(null);
  const flyReady = useRef(false);
  const [scrolled, setScrolled] = useState(false);

  // Condense the bar once the page is scrolled past the hero top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useIsoLayoutEffect(() => {
    const fly = flyRef.current;
    const navSlot = navSlotRef.current;
    const drawerSlot = drawerSlotRef.current;
    if (!fly || !navSlot) return;

    const place = (animate: boolean) => {
      const useDrawer = mobileMenuOpen && drawerSlot && drawerSlot.offsetWidth > 0;
      const target = useDrawer ? drawerSlot : navSlot;
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

    // The topbar/brand entrance animations use translateX/Y, which skew
    // getBoundingClientRect while they run — so the first placement can land
    // off. Re-place once the entrance settles (rects are transform-free then).
    // The juice intro covers the bar during this window, so the correction
    // is invisible.
    const settle = () => place(false);
    const brand = navSlot.closest(".brand-mark");
    brand?.addEventListener("animationend", settle);
    const settleTimer = setTimeout(settle, 1000);

    const onResize = () => place(false);
    window.addEventListener("resize", onResize);
    return () => {
      brand?.removeEventListener("animationend", settle);
      clearTimeout(settleTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen, scrolled]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={flyRef}
        src="/rawsa-designs/cropped/RAWSA_logo.png"
        alt=""
        aria-hidden="true"
        className="logo-fly logo-dark"
      />

      <div className={`flying-logo-container${mobileMenuOpen ? " is-flying" : ""}`} aria-hidden="true">
        <Image
          src="/rawsa-designs/cropped/RAWSA_logo.png"
          alt="Rawsa"
          width={140}
          height={42}
          className="logo-dark"
        />
      </div>

      <div
        className={`mobile-overlay${mobileMenuOpen ? " is-open" : ""}`}
        onClick={onToggleMenu}
        aria-hidden="true"
      />

      <nav
        id="mobile-drawer"
        className={`mobile-drawer${mobileMenuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="drawer-head">
          <span className="logo-slot" ref={drawerSlotRef}>
            <Image
              src="/rawsa-designs/cropped/RAWSA_logo.png"
              alt="Rawsa"
              width={100}
              height={30}
              className="logo-dark logo-ghost drawer-logo"
            />
          </span>
          <button className="drawer-close" type="button" onClick={onToggleMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="drawer-links">
          {navLinks.filter(l => l.id !== "login").map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={activeNav === id ? "is-active" : ""}
              onClick={onNavClick}
            >
              {id === "flavours" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>
              )}
              {id === "why" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              )}
              {id === "compare" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M21 3l-7 7"/><path d="M8 21H3v-5"/><path d="M3 21l7-7"/></svg>
              )}
              {id === "ingredients" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              )}
              {label}
            </a>
          ))}
          <a
            href="#distributor"
            className={activeNav === "distributor" ? "is-active" : ""}
            onClick={onNavClick}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Distributor Enquiry
          </a>
        </div>
        <a className="primary-button drawer-cta" href="#login" onClick={onNavClick}>
          Sign In
        </a>
      </nav>

      <nav className={`topbar${scrolled ? " is-scrolled" : ""}`} aria-label="Primary navigation">
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
          <a
            href="#distributor"
            role="listitem"
            className={activeNav === "distributor" ? "is-active" : ""}
          >
            Distributor Enquiry
          </a>
        </div>
        <div className="nav-right">
          <a className="primary-button" href="#login">Sign In</a>
          <button
            className="hamburger"
            type="button"
            onClick={onToggleMenu}
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
    </>
  );
}
