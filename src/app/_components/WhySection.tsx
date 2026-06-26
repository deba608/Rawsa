"use client";

import { whyItems } from "./data";
import { WhyIcon } from "./WhyIcon";
import { ScrollReveal } from "./ScrollReveal";

export function WhySection() {
  return (
    <section id="why" className="section why-section">
      <ScrollReveal variant="up" className="section-heading align-left">
        <p className="eyebrow">Why Rawsa</p>
        <h2>Built for people who want the drink to taste as good as it looks.</h2>
      </ScrollReveal>
      <div className="why-grid">
        {whyItems.map(({ title, copy, icon }, i) => (
          <ScrollReveal key={title} variant="up" delay={i * 60} className="why-card">
            <div className="why-header">
              <WhyIcon name={icon} />
              <h3>{title}</h3>
            </div>
            <p>{copy}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
