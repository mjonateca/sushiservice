import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import { getJsonLd, sushiServiceData } from "@/data/sushi-service";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: sushiServiceData.seo.title,
  description: sushiServiceData.seo.description,
  keywords: [...sushiServiceData.seo.keywords],
  openGraph: {
    title: sushiServiceData.seo.title,
    description: sushiServiceData.seo.description,
    url: siteUrl,
    type: "website",
    locale: "es_CO",
  },
};

export default function Page() {
  const jsonLd = getJsonLd(siteUrl);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
