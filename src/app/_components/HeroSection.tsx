"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Product } from "./types";
import { products } from "./data";

export function HeroSection({
  activeProduct,
  onSelectProduct,
  lineupRef,
}: {
  activeProduct: Product;
  onSelectProduct: (p: Product) => void;
  lineupRef: React.RefObject<HTMLDivElement | null>;
}) {
  const isScrollingRef = useRef(false);

  const handleProduct = (product: Product) => {
    onSelectProduct(product);
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
        setTimeout(() => { isScrollingRef.current = false; }, 500);
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
      onSelectProduct(products[closestIndex]);
    }
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Stoneman Foodtech presents</p>
        <h1>
          <span>Real fruit.</span>
          <span>Herbal refreshment</span>
          <span>Rawsa.</span>
        </h1>
        <div className="mobile-product-strip" aria-label="Rawsa flavour range">
          {products.map((product) => (
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
          <a className="primary-button" href="#flavours">Explore Flavours</a>
          <a className="secondary-button" href="#distributor">Become a Distributor</a>
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
            <span>Different<br />Flavours</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>0</strong>
            <span>Artificial<br />Sweeteners</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>100%</strong>
            <span>Natural<br />Fruit</span>
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
  );
}
