import type { Metadata } from "next";
import { Outfit as OutfitType, Ovo as OvoType } from "next/font/google";
import "./globals.css";

const outfit = OutfitType({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = OvoType({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio - Manoshri Chattopadhyay",
  description: "This is my portfolio - Manoshri Chattopadhyay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-(--background) text-(--text-color)`}
      >
        {children}
      </body>
    </html>
  );
}
