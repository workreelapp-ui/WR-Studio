import { categories } from "@/lib/packages";
import { SITE_DESCRIPTION, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

// schema.org description of the studio and its fixed-price packages, so
// search engines can understand the services and prices.
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#studio`,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/opengraph-image`,
    description: SITE_DESCRIPTION,
    priceRange: "$19 – $3,499",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fixed-price packages",
      itemListElement: categories.map((c) => ({
        "@type": "OfferCatalog",
        name: c.title,
        itemListElement: c.packages.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: p.name },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: Math.min(...p.prices),
            maxPrice: Math.max(...p.prices),
            priceCurrency: "USD",
          },
        })),
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
