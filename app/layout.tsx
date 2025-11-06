import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NailStudio by Hayley Clark - Handmade Press-On Nails | Rohnert Park, Santa Rosa, Petaluma",
  description: "Small batch, handcrafted press-on nails and custom nail art by Hayley Clark in Rohnert Park. Serving Santa Rosa and Petaluma with local pickup and shipping. Book your custom design session today.",
  keywords: "press-on nails Rohnert Park, custom nails Santa Rosa, nail art Petaluma, handmade press-on nails, local nail artist, Sonoma County nails, Hayley Clark nails",
  openGraph: {
    title: "NailStudio by Hayley Clark - Handmade Press-On Nails in Rohnert Park",
    description: "Small batch handcrafted press-ons and custom nail art by Hayley Clark. Serving Rohnert Park, Santa Rosa, and Petaluma.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
