import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FilmFlix",
  description:
    "Find all the movies you want to watch with ease. FilmFlix helps you organize and manage your watchlist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121829] text-[#666e83]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
