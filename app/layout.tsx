import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Goldman } from "next/font/google";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-goldman",
});

export const metadata = {
  title: "Illusionist Axe",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${goldman.variable}`}>
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
