import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amd Creatives",
  description: "High-end video production and content strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EVYFLB827G"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EVYFLB827G');
          `}
        </Script>
      </body>
    </html>
  );
}
