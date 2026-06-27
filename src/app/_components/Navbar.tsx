"use client";

import { useRef, useEffect, useLayoutEffect } from "react";
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
    const onResize = () => place(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileMenuOpen]);

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
              {label}
            </a>
          ))}
          <a
            href="#distributor"
            className={activeNav === "distributor" ? "is-active" : ""}
            onClick={onNavClick}
          >
            Distributor Enquiry
          </a>
        </div>
        <a className="primary-button drawer-cta" href="#login" onClick={onNavClick}>
          Sign In
        </a>
      </nav>

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
          <a className="nav-signin" href="#login">Sign In</a>
          <a className="nav-cta" href="#distributor">Distributor Enquiry</a>
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
