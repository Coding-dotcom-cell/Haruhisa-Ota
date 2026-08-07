import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.clinicName}｜${site.department}`,
    template: `%s｜${site.clinicName}`,
  },
  description: `${site.clinicName}の公式ホームページ。${site.tagline}`,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: site.url,
    siteName: site.clinicName,
    title: `${site.clinicName}｜${site.department}`,
    description: `${site.clinicName}の公式ホームページ。${site.tagline}`,
  },
  twitter: {
    card: "summary",
    title: `${site.clinicName}｜${site.department}`,
    description: `${site.clinicName}の公式ホームページ。${site.tagline}`,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: site.clinicName,
  jobTitle: site.department,
  description: site.tagline,
  url: site.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
