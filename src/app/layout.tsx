import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";


// const fraunces = Fraunces({
//   variable: "--font-fraunces",
//   subsets: ["latin"],
// });

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        {/* <LoadingScreen /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
