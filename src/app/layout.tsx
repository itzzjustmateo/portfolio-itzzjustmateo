import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Zalando_Sans as FontSerif } from "next/font/google";
import { JetBrains_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";
import Navbar from "@/components/ui/navbar";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = FontSerif({
  variable: "--font-serif",
  subsets: ["latin"],
});

const fontMono = FontMono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITZZMATEOs Portfolio",
  description: "Showcasing projects, and updates from ItzzMateo’s creative and development work.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
