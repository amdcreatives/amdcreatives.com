import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Ensure your Tailwind styles are loaded

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
        {/* You can add your Header/Navbar here so it shows on every page */}
        {children}
        {/* You can add your Footer here */}
      </body>
    </html>
  );
}
