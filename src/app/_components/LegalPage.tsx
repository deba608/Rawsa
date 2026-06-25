import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="legal-page">
      <header className="legal-bar">
        <Link href="/" className="legal-back" aria-label="Back to Rawsa home">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to home</span>
        </Link>
        <Link href="/" aria-label="Rawsa home">
          <Image
            src="/rawsa-designs/cropped/RAWSA_logo.png"
            alt="Rawsa"
            width={110}
            height={33}
            className="legal-logo"
          />
        </Link>
      </header>

      <article className="legal-body">
        <p className="legal-eyebrow">Legal</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        <p className="legal-intro">{intro}</p>

        {sections.map((s) => (
          <section key={s.heading} className="legal-section">
            <h2>{s.heading}</h2>
            <div className="legal-text">{s.body}</div>
          </section>
        ))}

        <section className="legal-section">
          <h2>Contact</h2>
          <div className="legal-text">
            <p>
              Questions about this policy? Reach Stoneman Food and Beverages Pvt Ltd at{" "}
              <a href="mailto:info@stonemanfoodtech.com">info@stonemanfoodtech.com</a> or{" "}
              <a href="tel:+918018353597">+91 8018-353-597</a>.
            </p>
            <p>
              Ground Floor, Plot No. 946/2999, Prasanti Vihar, Barmunda, Bhubaneswar – 751003, Odisha, India.
            </p>
          </div>
        </section>

        <Link href="/" className="legal-home-link">
          Return to Rawsa
        </Link>
      </article>
    </main>
  );
}
