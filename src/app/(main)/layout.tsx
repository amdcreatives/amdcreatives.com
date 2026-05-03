import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amd Creatives - Scale Your Brand with Viral Short-Form Video",
  description:
    "We create scroll-stopping Reels, Shorts, and Meta Ads. Elevate your brand with professional editing and cutting edge AI driven video systems.",
  keywords: [
    "short-form video agency",
    "Instagram Reels editing",
    "YouTube Shorts production",
    "Facebook Ads creative",
    "AI video marketing",
    "UGC video production",
    "podcast highlights",
    "Amd Creatives",
  ],
  openGraph: {
    title: "Amd Creatives - High-Performance Video Content Systems",
    description:
      "Transform your brand's presence with viral-ready vertical content and high-converting video ads engineered for growth.",
    type: "website",
    locale: "en_US",
    siteName: "Amd Creatives",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amd Creatives - Professional Video Content & Ad Creatives",
    description:
      "Helping brands and podcasters stand out with eye-catching, scroll-stopping video content.",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
    // You can also add specific sizes
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
