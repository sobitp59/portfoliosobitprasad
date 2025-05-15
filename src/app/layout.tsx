import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "../components/footer";
import ScrollProgressBar from "../components/progress-bar";
import AvatarNav from "../components/avatar-nav";


const geist = Bricolage_Grotesque({
  variable: "--font-bricolage-sans",
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
          <AvatarNav />

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
