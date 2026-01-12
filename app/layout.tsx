import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
const goldmanBold = localFont({
  src: "../fonts/fonts/fonnts.com-Goldman_Bold.ttf",
  variable: "--font-goldman-bold",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aakarsh S Bhat - Professional Illusionist & Magician",
  description: "Trusted by celebrities, global brands, and elite audiences. Aakarsh S Bhat continues to redefine the art of illusion across stages and screens worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontFamily: goldmanBold.style.fontFamily }}>
      <body
        className={`${goldmanBold.variable} antialiased`}
        style={{ fontFamily: goldmanBold.style.fontFamily }}
      >
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}