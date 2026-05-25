"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-full max-w-221.25 z-50 rounded-full border border-stroke bg-white/80 px-6 py-2.5 backdrop-blur-[18px] sm:px-8 shadow-sm flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/images/sf_logo.png"
          alt="Store Forge Logo"
          width={130}
          height={30}
        />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/pricing"
          className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/features"
          className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors"
        >
          Features
        </Link>
        <Link
          href="/blog"
          className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/faqs"
          className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors"
        >
          FAQs
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Button
          asChild
          className="hidden sm:inline-flex rounded-full bg-primary text-white hover:bg-primary/90 font-sans font-medium px-6 h-10"
        >
          <Link href="/start">Get Early Access</Link>
        </Button>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#666666] hover:bg-black/5 rounded-full md:hidden transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 mt-2 bg-white border border-stroke rounded-2xl p-6 shadow-lg flex flex-col gap-4 md:hidden">
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors py-1"
          >
            Pricing
          </Link>
          <Link
            href="/features"
            onClick={() => setIsOpen(false)}
            className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors py-1"
          >
            Features
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors py-1"
          >
            Blog
          </Link>
          <Link
            href="/faqs"
            onClick={() => setIsOpen(false)}
            className="font-sans font-medium text-sm text-[#1A1A1A] hover:text-[#000000] transition-colors py-1"
          >
            FAQs
          </Link>
          <Button
            asChild
            className="w-full rounded-full bg-primary text-white hover:bg-primary/90 font-sans font-medium h-10 mt-2"
          >
            <Link href="/start" onClick={() => setIsOpen(false)}>
              Get Early Access
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
