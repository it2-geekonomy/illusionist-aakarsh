import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
const goldman = localFont({
  src: "../fonts/fonts/Goldman-Regular.ttf",
  variable: "--font-goldman",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://illusionistaxe.com'),
  title: "Aakarsh S Bhat - Professional Illusionist & Magician",
  description: "Trusted by celebrities, global brands, and elite audiences. Aakarsh S Bhat continues to redefine the art of illusion across stages and screens worldwide.",
  icons: {
    icon: "/Axe Logo copy .png",
    shortcut: "/Axe Logo copy .png",
    apple: "/Axe Logo copy .png",
  },
  openGraph: {
    title: "Aakarsh S Bhat - Professional Illusionist & Magician",
    description: "Trusted by celebrities, global brands, and elite audiences. Aakarsh S Bhat continues to redefine the art of illusion across stages and screens worldwide.",
    images: ["/Axe Logo copy .png"],
  },
  twitter: {
    card: "summary",
    title: "Aakarsh S Bhat - Professional Illusionist & Magician",
    description: "Trusted by celebrities, global brands, and elite audiences.",
    images: ["/Axe Logo copy .png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontFamily: goldman.style.fontFamily }}>
      <body
        className={`${goldman.variable} antialiased`}
        style={{ fontFamily: goldman.style.fontFamily }}
      >
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}