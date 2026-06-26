"use client";

import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  return (
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
      <nav className="footer-col" aria-label="Explore">
        <h4 className="footer-heading">Explore</h4>
        <div className="footer-links">
          <a href="#flavours">Flavours</a>
          <a href="#why">Why Rawsa</a>
          <a href="#compare">Compare</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#distributor">Distributor Enquiry</a>
        </div>
      </nav>
      <nav className="footer-col" aria-label="Company">
        <h4 className="footer-heading">Company</h4>
        <div className="footer-links">
          <a href="#story">About Us</a>
          <a href="#distributor">Contact Us</a>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/shipping">Shipping &amp; Return</Link>
        </div>
      </nav>
      <address className="footer-address">
        <h4 className="footer-heading">Get in touch</h4>
        <strong>Stoneman Food and Beverages Pvt Ltd</strong>
        <span>Ground Floor, Plot No. 946/2999, Prasanti Vihar, Barmunda</span>
        <span>Bhubaneswar – 751003, Odisha, India</span>
        <div className="footer-contact">
          <a href="mailto:info@stonemanfoodtech.com">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            info@stonemanfoodtech.com
          </a>
          <a href="tel:+918018353597">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 8018-353-597
          </a>
        </div>
      </address>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Stoneman Food and Beverages Pvt Ltd.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
