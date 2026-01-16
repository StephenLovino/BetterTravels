import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BetterTravel - Explore The World",
  description: "Discover new destinations and book your next adventure with BetterTravel. Experience luxury, nature, and culture with our curated tours.",
  keywords: ["travel", "tours", "vacation", "booking", "adventure", "nature", "BetterTravel"],
  authors: [{ name: "Stephen Lovino" }],
  openGraph: {
    title: "BetterTravel - Explore The World",
    description: "Discover new destinations and book your next adventure with BetterTravel.",
    url: "https://bettertravel.example.com",
    siteName: "BetterTravel",
    images: [
      {
        url: "/assets/images/why_choose_us.png", // Using one of our high-quality assets
        width: 1200,
        height: 630,
        alt: "BetterTravel - Explore the World",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterTravel - Explore The World",
    description: "Discover new destinations and book your next adventure with BetterTravel.",
    images: ["/assets/images/why_choose_us.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jakarta.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
