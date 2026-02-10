import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
