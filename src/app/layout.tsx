import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SIP | Schema Intelligence Platform",
    template: "%s | SIP",
  },
  description:
    "Your schema passes Google's tests — but does it actually win? Get interpretive insights and recommendations that explain why schema works or fails.",
  keywords: [
    "schema optimization",
    "rich results",
    "JSON-LD",
    "structured data",
    "SEO",
    "schema.org",
  ],
  authors: [{ name: "SIP" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Schema Intelligence Platform",
    title: "SIP | Schema Intelligence Platform",
    description:
      "Your schema passes Google's tests — but does it actually win?",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIP | Schema Intelligence Platform",
    description:
      "Your schema passes Google's tests — but does it actually win?",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
