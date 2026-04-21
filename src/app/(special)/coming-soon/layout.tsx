import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "../../globals.css";
import "./coming-soon.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Amd Creatives - Coming Soon",
  description:
    "A creative studio built for bold brands. Visuals, strategy, and stories designed to make your audience stop scrolling.",
  keywords: ["creative studio", "video content", "branding", "visuals", "AMDCreatives"],
  openGraph: {
    title: "Amd Creatives - Coming Soon",
    description: "Something extraordinary is being crafted. Stay tuned.",
    type: "website",
    url: "https://amdcreatives.com",
    siteName: "AMDCreatives",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amd Creatives - Coming Soon",
    description: "Something extraordinary is being crafted. Stay tuned.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${dmSans.variable} grain`}>
        {children}
      </body>
    </html>
  );
}
