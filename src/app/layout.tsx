import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nverly.com"),
  title: {
    default: "Nverly — Digital Gift Cards, Game Top-Ups & Codes",
    template: "%s | Nverly",
  },
  description:
    "Buy digital gift cards, gaming top-ups, vouchers, and digital codes with fast online delivery.",
  openGraph: {
    title: "Nverly — Digital Gift Cards, Game Top-Ups & Codes",
    description:
      "Buy digital gift cards, gaming top-ups, vouchers, and digital codes with fast online delivery.",
    url: "https://nverly.com",
    siteName: "Nverly",
    type: "website",
  },
  alternates: {
    canonical: "https://nverly.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
