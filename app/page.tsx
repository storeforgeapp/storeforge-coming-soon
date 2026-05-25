"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative w-full min-h-dvh lg:h-dvh flex flex-col items-center bg-background overflow-hidden pb-12 lg:pb-0">
      {/* Background Dot Overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/bg_dot_overlay.png')] bg-repeat pointer-events-none z-0 opacity-100"
        aria-hidden="true"
      />

      {/* Central Soft Radial Glow (Mint) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(41, 212, 154, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content Wrapper */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center flex-1 pt-24 sm:pt-28">
        {/* Text and Form Content */}
        <div className="flex flex-col items-center gap-5 max-w-4xl">
          {/* Title */}
          <h1
            className="font-heading font-bold bg-clip-text text-transparent tracking-tight leading-[1.1] text-[clamp(2.5rem,5.5vw,4.25rem)] max-w-3xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #000000 20%, #00000090 100%)",
            }}
          >
            Build Your Dream Store <br />
            in Minutes, Not Months.
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-muted-foreground text-base sm:text-lg md:text-xl max-w-[60ch] leading-relaxed">
            Sell online effortlessly – no coding needed. Join the Storeforge
            waitlist for early access and launch updates.
          </p>

          {/* Waitlist Input Capsule */}
          <form
            className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-md p-2 sm:p-1.5 pl-4 pr-4 sm:pl-6 sm:pr-1.5 bg-white border border-border rounded-2xl sm:rounded-full shadow-[0_4px_20px_rgba(2,15,49,0.04)] focus-within:border-primary/30 focus-within:shadow-[0_4px_24px_rgba(2,15,49,0.08)] transition-all z-20 mt-[18px] gap-2 sm:gap-0"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="flex-1 bg-transparent border-0 outline-none text-sm text-primary placeholder:text-muted-foreground py-2 px-1 sm:px-0"
            />
            <Button
              type="submit"
              className="rounded-xl sm:rounded-full bg-primary text-white hover:bg-primary/90 font-sans font-medium px-5 sm:px-6 h-10 text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Product Preview Image (Clipped at the bottom of the Hero Section) */}
        <div className="w-full max-w-6xl overflow-hidden shadow-2xl translate-y-[15%] z-10 shrink-0 md:-mt-5 mt-5">
          <Image
            src="/images/product-preview.png"
            alt="Storeforge Product Preview"
            width={1280}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Full height Radial Gradient Overlay: starts 15% stop with theme background (#f5f7fb) and fades to transparent */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, #f5f7fb 15%, rgba(245, 247, 251, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom Gradient Overlay 1: #020F31/0% to #020F31/100%, 30% opacity, 370px height */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[370px] pointer-events-none z-0 opacity-30"
        style={{
          background:
            "linear-gradient(to top, #020F31 0%, rgba(2, 15, 49, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom Gradient Overlay 2: #020F31/0% to #020F31/1%, 10% opacity, 206px height */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[206px] pointer-events-none z-0 opacity-10"
        style={{
          background:
            "linear-gradient(to top, rgba(2, 15, 49, 0.01) 0%, rgba(2, 15, 49, 0) 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
