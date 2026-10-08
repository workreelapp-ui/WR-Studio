import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
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
        <StructuredData />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
