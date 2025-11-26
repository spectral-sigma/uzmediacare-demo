import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import localFont from "next/font/local";
import DotGrid from "@/components/DotGrid";

const scienceGothic = localFont({
  src: "../public/fonts/ScienceGothic-Regular.ttf",
  variable: "--font-science-gothic",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Uzmedicare Demo",
  description: "An introduction to Uzmedicare project by the Dreamforce Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.variable} ${scienceGothic.variable} antialiased relative`}
      >
        <SmoothScroll />
        <Navbar className="fixed top-0" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
