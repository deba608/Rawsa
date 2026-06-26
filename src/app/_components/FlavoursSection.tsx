"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { Product } from "./types";
import { products, ORDER_WHATSAPP } from "./data";
import { ScrollReveal } from "./ScrollReveal";

export function FlavoursSection({
  activeProduct,
  flipped,
  onFlip,
  onSelectProduct,
}: {
  activeProduct: Product;
  flipped: boolean;
  onFlip: () => void;
  onSelectProduct: (p: Product) => void;
}) {
  return (
    <section id="flavours" className="section flavour-section">
      <ScrollReveal variant="up" className="section-heading">
        <p className="eyebrow">The Rawsa range</p>
        <h2>Five shelf-ready flavours, one fresh family.</h2>
        <p>
          Tap a flavour, then tap the bottle to see front and back packaging
          without losing the clean product focus.
        </p>
      </ScrollReveal>

      <div className="flavour-grid">
        <div
          className="flavour-panel"
          style={{ "--accent": activeProduct.accent, "--soft": activeProduct.soft } as CSSProperties}
        >
          <div className="flavour-copy">
            <p className="product-kicker">{activeProduct.fruit}</p>
            <h3>{activeProduct.name}</h3>
            <p>{activeProduct.tagline}</p>
            <div className="note-list">
              <div className="note-track">
                {activeProduct.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
                {activeProduct.notes.map((note) => (
                  <span key={`${note}-dup`} aria-hidden="true">{note}</span>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`flip-product${flipped ? " is-flipped" : ""}`}
            onClick={onFlip}
            aria-label={`Flip ${activeProduct.name} bottle to see ${flipped ? "front" : "back"}`}
          >
            <span className="flip-face flip-front">
              <Image
                src={activeProduct.front}
                alt={`Rawsa ${activeProduct.name} front label`}
                width={420}
                height={1181}
                priority
                className="flip-img"
              />
            </span>
            <span className="flip-face flip-back">
              <Image
                src={activeProduct.back}
                alt={`Rawsa ${activeProduct.name} back label`}
                width={420}
                height={1181}
                className="flip-img"
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
              onClick={() => onSelectProduct(product)}
              style={{ "--accent": product.accent, "--soft": product.soft } as CSSProperties}
              aria-pressed={product.id === activeProduct.id}
            >
              <span className="selector-thumb">
                <Image src={product.front} alt="" width={76} height={214} />
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
  );
}
