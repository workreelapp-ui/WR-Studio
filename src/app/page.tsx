import type { Metadata } from "next";
import Landing from "@/modules/landing";
import StructuredData from "@/components/StructuredData";
import { OPEN_GRAPH, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

// The canonical and og:url live here rather than in the root layout, so the
// 404 page doesn't inherit a canonical pointing at the homepage.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...OPEN_GRAPH, url: "/", title: SITE_TITLE, description: SITE_DESCRIPTION },
};

export default function Home() {
  return (
    <>
      {/* Only on the homepage: the FAQ markup must match a visible FAQ */}
      <StructuredData />
      <Landing />
    </>
  );
}
