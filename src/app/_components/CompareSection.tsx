"use client";

import Image from "next/image";
import { compareFeatures, compareDrinks } from "./data";
import { CmpCell } from "./CmpCell";
import { ScrollReveal } from "./ScrollReveal";

export function CompareSection() {
  return (
    <section id="compare" className="section compare-section">
      <ScrollReveal variant="up" className="section-heading">
        <p className="eyebrow">How Rawsa compares</p>
        <h2>A different kind of drink.</h2>
        <p>See how Rawsa stacks up against the alternatives on the shelf.</p>
      </ScrollReveal>

      <ScrollReveal variant="scale" className="compare-wrap">
        <div className="compare-scroll">
          <table className="compare-table" role="table">
            <thead>
              <tr>
                <th scope="col" className="feat-col">Feature</th>
                {compareDrinks.map((d) => (
                  <th key={d.name} scope="col" className={`drink-col${d.highlight ? " is-rawsa" : ""}`}>
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
                    <td key={d.name} className={`drink-col${d.highlight ? " is-rawsa" : ""}`}>
                      <CmpCell value={d.values[fi]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compare-legend">
          <span className="cmp-yes"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
          <span>Present</span>
          <span className="cmp-partial"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /></svg></span>
          <span>Varies by brand</span>
          <span className="cmp-no"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></span>
          <span>Typically absent</span>
        </div>
        <p className="compare-note">Based on typical category formulations. Individual products may vary.</p>
      </ScrollReveal>
    </section>
  );
}
