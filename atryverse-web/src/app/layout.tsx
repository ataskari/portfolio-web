import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Atryverse | AI Product Engineer",
  description: "Portfolio of an AI Product Engineer — building intelligent full-stack applications with Next.js, OpenAI, and modern cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased text-[#1a1a1a] bg-[#fafafa]`}>
        {children}
      </body>
    </html>
  );
}
