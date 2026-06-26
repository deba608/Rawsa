"use client";

import Image from "next/image";
import { products } from "./data";
import { ScrollReveal } from "./ScrollReveal";

export function StorySection() {
  return (
    <section id="story" className="section story-section">
      <ScrollReveal variant="left" className="story-card">
        <p className="eyebrow">Stoneman Foodtech</p>
        <h2>A modern Indian foodtech brand starting with a drink people notice.</h2>
        <p>
          Rawsa brings together fruit-rich refreshment, Indian flavour memory,
          herbal inspiration and packaging with real shelf presence. The
          result is a product family that feels ready for cafes, retail
          counters, supermarkets and distributor conversations.
        </p>
      </ScrollReveal>
      <ScrollReveal variant="right" className="story-products">
        <div className="story-track">
          {[...products, ...products].map((product, i) => (
            <Image
              key={`${product.id}-${i}`}
              src={product.front}
              alt={i < products.length ? `Rawsa ${product.name}` : ""}
              aria-hidden={i >= products.length}
              width={260}
              height={732}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
