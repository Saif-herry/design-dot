import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HLS Global Group – Empowered Workplaces",
  description:
    "International accounting and business advisory firm with a focus on accounting, tax, audit, advisory, and consulting between India, Japan, and the World.",
  keywords: [
    "accounting",
    "business advisory",
    "taxation",
    "audit",
    "India",
    "Japan",
    "HLS Global Group",
  ],
  openGraph: {
    title: "HLS Global Group – Empowered Workplaces",
    description:
      "Accounting, Taxation, & Business Advisory between India, Japan, and the World.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
