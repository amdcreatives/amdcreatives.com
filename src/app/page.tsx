import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vidora — Get More Leads with Pro Video Content",
  description:
    "We help entrepreneurs and businesses grow with done-for-you, organic video content systems built to generate leads on autopilot.",
  keywords: [
    "video content",
    "lead generation",
    "video marketing",
    "organic growth",
    "business video",
    "pro video production",
  ],
  openGraph: {
    title: "Vidora — Get More Leads with Pro Video Content",
    description:
      "Done-for-you video content systems that generate leads on autopilot for entrepreneurs and businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Vidora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidora — Get More Leads with Pro Video Content",
    description:
      "Done-for-you video content systems that generate leads on autopilot.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
