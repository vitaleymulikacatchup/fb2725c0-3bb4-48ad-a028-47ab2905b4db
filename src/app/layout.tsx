import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemNova — Futuristic Memecoin Landing",
  description: "MemNova merges bold memecoin energy with a sleek sci-fi aesthetic. Clear steps to buy, transparent tokenomics, and a community-first vibe.",
  keywords: ["memecoin","crypto","landing page","tokenomics","buy memecoin","futuristic design","crypto community","neon visuals","memecoin UI"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MemNova — Futuristic Memecoin Landing",
    description: "MemNova merges bold memecoin energy with a sleek sci-fi aesthetic. Clear steps to buy, transparent tokenomics, and a community-first vibe.",
    type: "website",
    url: "/",
    siteName: "MemNova",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/sleek-futuristic-background-in-16-9-prem-1759145783968-bcb13b2e.jpg",
      width: 1200,
      height: 630,
      alt: "Neon memecoin logo on dark gradient with particle glow"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemNova — Futuristic Memecoin Landing",
    description: "MemNova merges bold memecoin energy with a sleek sci-fi aesthetic. Clear steps to buy, transparent tokenomics, and a community-first vibe.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/sleek-futuristic-background-in-16-9-prem-1759145783968-bcb13b2e.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}> {children} </body>
    </html>
  );
}
