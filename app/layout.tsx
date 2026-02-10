import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Platform Showcase | Discover 72 Cutting-Edge Platforms",
  description: "Explore a curated collection of 72 innovative platforms across AI, crypto, design, marketing, and more. Vote, save favorites, and discover your next essential tool.",
  keywords: ["platforms", "tools", "AI", "crypto", "design", "marketing", "SaaS", "apps"],
  authors: [{ name: "Platform Showcase" }],
  openGraph: {
    title: "Platform Showcase | Discover 72 Cutting-Edge Platforms",
    description: "Explore a curated collection of 72 innovative platforms across AI, crypto, design, marketing, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Showcase",
    description: "Discover 72 cutting-edge platforms across AI, crypto, design, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
