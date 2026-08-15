import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
  title: "WR Studio",
  description: "One studio for the full digital journey",
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
        {children}
      </body>
    </html>
  );
}
