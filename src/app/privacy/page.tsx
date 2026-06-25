import type { Metadata } from "next";
import { LegalPage } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Rawsa",
  description: "How Stoneman Food and Beverages Pvt Ltd collects, uses, and protects your information on the Rawsa website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="25 June 2026"
      intro="This policy explains what information we collect when you use the Rawsa site or contact us, and how we handle it."
      sections={[
        {
          heading: "Information we collect",
          body: (
            <p>
              We collect details you choose to share, such as your name, business name, phone number, email, and
              message when you submit a distributor or contact enquiry.
            </p>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <p>
              We use your information only to respond to your enquiry, discuss supply or distribution, and keep you
              updated about Rawsa where you have asked us to.
            </p>
          ),
        },
        {
          heading: "Sharing",
          body: (
            <p>
              We do not sell your personal information. We share it only with service providers who help us operate our
              business, and only as needed to respond to you.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We keep enquiry information for as long as needed to handle your request and meet legal or accounting
              obligations, then remove it.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can ask us to access, correct, or delete your information at any time by emailing us. We will respond
              within a reasonable period.
            </p>
          ),
        },
      ]}
    />
  );
}
