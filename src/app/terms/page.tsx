import type { Metadata } from "next";
import { LegalPage } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rawsa",
  description: "Terms and conditions for using the Rawsa website and ordering Rawsa products from Stoneman Food and Beverages Pvt Ltd.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="25 June 2026"
      intro="These terms govern your use of the Rawsa website and any orders placed with Stoneman Food and Beverages Pvt Ltd. By using the site you agree to them."
      sections={[
        {
          heading: "Use of the site",
          body: (
            <p>
              You may browse and use this site for personal, non-commercial purposes. You agree not to misuse the
              site, attempt to disrupt it, or use it in any way that breaks applicable law.
            </p>
          ),
        },
        {
          heading: "Products & information",
          body: (
            <p>
              Product details, ingredients, and imagery are provided in good faith. Packaging and formulations may
              change; the information on the physical product label always takes precedence.
            </p>
          ),
        },
        {
          heading: "Orders & distributor enquiries",
          body: (
            <p>
              Distributor and bulk enquiries submitted through the site are requests, not confirmed orders. Pricing,
              availability, and delivery terms are confirmed separately by our team before any supply.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The Rawsa name, logo, artwork, and site content are owned by Stoneman Food and Beverages Pvt Ltd and may
              not be reused without written permission.
            </p>
          ),
        },
        {
          heading: "Liability",
          body: (
            <p>
              The site is provided on an &quot;as is&quot; basis. To the extent permitted by law, we are not liable for
              indirect or incidental loss arising from use of the site.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: (
            <p>
              We may update these terms from time to time. Continued use of the site after changes means you accept the
              updated terms.
            </p>
          ),
        },
      ]}
    />
  );
}
