import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";


const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Sobit Prasad",
  description:
    "Sobit Prasad is a software engineer and a tech enthusiast. He loves to write about software development, technology, and life. He is passionate about building products that make a difference. He is currently working as a full-stack developer at Woxsen University.",
  icons: [
    {
      rel: "icon",
      url: "/favicon_dark.svg",
      media: "(prefers-color-scheme: light)", 
    },
    {
      rel: "icon",
      url: "/favicon_light.svg",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       {/* <head/> */}
      <body className={`${geist.variable} antialiased`}>
        <main className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
         {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
