import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import { OPEN_GRAPH, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans-local",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono-local",
});

const georgia = localFont({
  src: [
    {
      path: "../fonts/georgia.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/georgiab.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/georgiai.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/georgiaz.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-georgia-local",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  // No canonical, og:url or robots here: pages set their own canonical, and
  // leaving robots unset lets the 404 page's noindex stand on its own.
  openGraph: { ...OPEN_GRAPH, title: SITE_TITLE, description: SITE_DESCRIPTION },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${ibmPlexMono.variable} ${georgia.variable}`}
    >
      <body className="bg-bg-dark text-white overflow-x-hidden">
        {/* Wrapped children with SmoothScroll */}
        <SmoothScroll>{children}</SmoothScroll>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
