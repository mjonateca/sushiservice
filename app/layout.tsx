import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { sushiServiceData } from "@/data/sushi-service";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: sushiServiceData.seo.title,
    template: `%s | ${sushiServiceData.business.name}`,
  },
  description: sushiServiceData.seo.description,
  keywords: sushiServiceData.seo.keywords,
  openGraph: {
    title: sushiServiceData.seo.title,
    description: sushiServiceData.seo.description,
    url: siteUrl,
    siteName: sushiServiceData.business.name,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: sushiServiceData.seo.title,
    description: sushiServiceData.seo.description,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06110f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-CO" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
