import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storeforge | Build Your Online Store in Minutes",
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

          <main className="relative z-10 w-full flex-1 flex flex-col">
            {children}
          </main>

          {/* Footer Component */}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
