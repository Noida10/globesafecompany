import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Globe Safe Company - Premium Security Solutions",
  description: "Leading manufacturer and supplier of safety lockers, security safes, vaults, and strong room doors in Ghaziabad. Established 2014.",
  keywords: "safety lockers, security safes, vaults, strong room doors, steel safes, fire resistant safes, Ghaziabad",
  authors: [{ name: "Globe Safe Company" }],
  openGraph: {
    title: "Globe Safe Company - Premium Security Solutions",
    description: "Leading manufacturer of safety and security products",
    url: "https://www.globesafecompany.in",
    siteName: "Globe Safe Company",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}