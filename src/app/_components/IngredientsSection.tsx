"use client";

import Image from "next/image";
import type { Product } from "./types";
import { ingredientCards } from "./data";
import { ScrollReveal } from "./ScrollReveal";

export function IngredientsSection({ activeProduct }: { activeProduct: Product }) {
  return (
    <section id="ingredients" className="section ingredients-section">
      <ScrollReveal variant="up" className="ingredient-content">
        <p className="eyebrow">Ingredient story</p>
        <h2>Fruit first, then a thoughtful herbal signature.</h2>
        <p>
          Rawsa should feel bright and familiar at first sip, then leave a
          subtle botanical impression that makes it different from everyday
          juice drinks.
        </p>
        <div className="ingredient-cards reveal-stagger">
          {ingredientCards.map((card) => (
            <article key={card.label}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
