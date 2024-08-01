import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WatchlistProvider } from "@/context/WatchlistContext";

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
      <body
        className={`${inter.className} min-h-screen bg-[#121829] text-[#666e83] flex flex-col`}
      >
        <WatchlistProvider>
          <Navbar />
          {children}
          <Footer />
        </WatchlistProvider>
      </body>
    </html>
  );
}
