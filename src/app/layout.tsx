import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "../components/footer";
import ScrollProgressBar from "../components/progress-bar";
import BlurImage from "../components/blur-image";


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
        <main className="min-h-screen">
          <ScrollProgressBar />

          <section className="w-full flex justify-center items-center gap-5 sticky top-0 py-4 z-10 md:hidden bg-slate-900/5 backdrop-blur-lg ">
            <BlurImage
              src={"/profile2.jpeg"}
              alt="Sobit Prasad"
              width={300}
              height={300}
              blurDataURL="/profile2.jpeg"
              className="rounded-lg w-12 h-12 md:hidden object-cover rotate-6"
            />
            <section className="flex flex-col items-start">
              <h1 className="text-2xl font-bold text-slate-300">Sobit Prasad</h1>
              <p className="text-xs text-slate-400">Software Developer <a href="https://woxsen.edu.in/" rel="noopener noreferrer" target="_blank">@Woxsen University</a></p>
            </section>
          </section>

          <div className="flex flex-col items-center justify-center gap-8 p-4 md:p-8 lg:p-20">
            {children}
          </div>
        </main>

        <Analytics />

        <Footer />
      </body>
    </html>
  );
}


// p-8 pb-20 gap-16 sm:p-20
