import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storeforge | Coming Soon",
  description:
    "Storeforge helps businesses build their online store in minutes. Join the early access list.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", rethinkSans.variable)}
    >
      <body className="min-h-full flex flex-col bg-white font-sans antialiased relative overflow-x-hidden">
        <TooltipProvider>
          {/* Sticky/Fixed Navbar */}
          <Navbar />

          {/* Main content area with left/right padding and top padding for sticky Navbar */}
          <main className="relative z-10 mx-auto w-full max-w-305 px-4 sm:px-8 lg:px-12 pt-32 pb-12 flex-1 flex flex-col justify-center">
            {children}
          </main>

          {/* Footer Component */}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
