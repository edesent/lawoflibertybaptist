import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lawoflibertybaptist.com"),
  title: {
    default:
      "Law of Liberty Baptist Church — Independent KJV Baptist Church in Jacksonville, FL",
    template: "%s | Law of Liberty Baptist Church",
  },
  description:
    "A warm, family-integrated Independent Baptist church in Jacksonville, FL. Join Pastor Adam Fannin for Sunday worship, Bible preaching, and fellowship. KJV preaching, traditional hymns, soul-winning — all are welcome.",
  keywords: [
    "Law of Liberty Baptist Church",
    "Baptist church Jacksonville FL",
    "Independent Baptist church Florida",
    "KJV Bible church Jacksonville",
    "Pastor Adam Fannin",
    "family integrated church Jacksonville",
    "church near me Jacksonville",
    "King James Bible church Florida",
  ],
  authors: [{ name: "Law of Liberty Baptist Church" }],
  creator: "Law of Liberty Baptist Church",
  publisher: "Law of Liberty Baptist Church",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Law of Liberty Baptist Church — Jacksonville, FL",
    description:
      "A warm Independent Baptist church in Jacksonville, FL. Family-integrated worship, traditional hymns, Bible preaching. All are welcome.",
    url: "https://www.lawoflibertybaptist.com",
    type: "website",
    locale: "en_US",
    siteName: "Law of Liberty Baptist Church",
  },
  twitter: {
    card: "summary_large_image",
    title: "Law of Liberty Baptist Church — Jacksonville, FL",
    description:
      "A warm Independent Baptist church in Jacksonville, FL. All are welcome.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
