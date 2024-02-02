import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActiveSectionProvider from "@/context/ActiveSectionProvider";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parminder | Personal Portfolio",
  description:
    "Parminder is a Mern Stack developer with 2.5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${inter.className} bg-gray-50 dark:bg-gray-900  dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative h-screen pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10  right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionProvider>
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
