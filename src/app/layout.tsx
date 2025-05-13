import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sobit Prasad",
  description:
    "Sobit Prasad is a software engineer and a tech enthusiast. He loves to write about software development, technology, and life. He is passionate about building products that make a difference. He is currently working as a full-stack developer at Woxsen University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} antialiased`}>
        {/* <LoadingScreen /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
