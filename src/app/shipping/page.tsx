import type { Metadata } from "next";
import { LegalPage } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping & Return | Rawsa",
  description: "Shipping, delivery, and return information for Rawsa products from Stoneman Food and Beverages Pvt Ltd.",
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping & Return"
      updated="25 June 2026"
      intro="How we handle dispatch, delivery, and returns for Rawsa orders and distributor supply."
      sections={[
        {
          heading: "Dispatch & delivery",
          body: (
            <p>
              Order quantities, dispatch timelines, and delivery locations are confirmed with our team at the time of
              order. Lead times depend on volume and destination.
            </p>
          ),
        },
        {
          heading: "Shipping charges",
          body: (
            <p>
              Shipping costs, where applicable, are shared in your order confirmation before dispatch. Bulk and
              distributor terms are agreed in writing.
            </p>
          ),
        },
        {
          heading: "Damaged or incorrect items",
          body: (
            <p>
              Please check your consignment on delivery. If items arrive damaged, short, or incorrect, contact us within
              48 hours with photos so we can resolve it quickly.
            </p>
          ),
        },
        {
          heading: "Returns",
          body: (
            <p>
              As a food and beverage product, Rawsa cannot be returned once delivered unless the item is damaged or
              defective. Verified issues are replaced or credited.
            </p>
          ),
        },
        {
          heading: "Cancellations",
          body: (
            <p>
              Orders can be cancelled before dispatch by contacting us. Once an order has shipped it can no longer be
              cancelled.
            </p>
          ),
        },
      ]}
    />
  );
}
