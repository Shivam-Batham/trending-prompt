import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trending AI Image Prompts | ChatGPT, Gemini, Grok",
  description:
    "Discover trending AI image prompts for ChatGPT, Gemini, Grok and more.",
  keywords: [
    "AI prompts",
    "image generation prompts",
    "ChatGPT prompts",
    "Top trending prompt",
    "Gemini trending image prompt"
  ],
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://trending-prompts.vercel.app",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
