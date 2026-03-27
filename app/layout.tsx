import type { Metadata } from "next";
import { Inter, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontBarlow = Barlow_Condensed({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const fontMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Magic Center | Premium Auto Detailing",
  description: "Especialistas en Detailing, Mecánica de Precisión, y Tratamientos Cerámicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontInter.variable} ${fontBarlow.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-0">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
