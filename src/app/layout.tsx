import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rawsa | Real Fruit Refreshment by Stoneman Foodtech",
  description:
    "Rawsa by Stoneman Foodtech is a fruit-rich refreshment range with higher pulp feel, herbal inspiration, no added colour, and shelf-ready packaging.",
  keywords: ["Rawsa", "fruit drink", "Stoneman Foodtech", "higher pulp drink", "Indian beverage", "distributor enquiry"],
  openGraph: {
    title: "Rawsa | Real Fruit Refreshment",
    description: "Fruit-rich Rawsa drinks by Stoneman Foodtech, made for modern Indian refreshment and distributor conversations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
