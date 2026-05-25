"use client";

import FloatingBadges from "./FloatingBadges";
import ProductPreview from "./ProductPreview";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh lg:h-dvh flex flex-col items-center bg-background overflow-hidden pb-12 lg:pb-0">
      {/* Background Dot Overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/bg_dot_overlay.png')] bg-repeat pointer-events-none z-0 opacity-100"
        aria-hidden="true"
      />

      {/* Hero Content Wrapper */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center flex-1 pt-24 sm:pt-28">
        <div className="flex flex-col items-center gap-5 max-w-4xl">
          {/* Title */}
          <h1
            className="font-heading font-bold bg-clip-text text-transparent tracking-tight leading-[1.1] text-[clamp(2.5rem,5.5vw,4.25rem)] max-w-3xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #000000 20%, #00000090 100%)",
            }}
          >
            Build Your Dream Store in Minutes, Not Months.
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-muted-foreground text-base sm:text-lg md:text-xl max-w-[60ch] leading-relaxed">
            Sell online effortlessly – no coding needed. Join the Storeforge
            waitlist for early access and launch updates.
          </p>

          {/* Waitlist Input Capsule */}
          <WaitlistForm />
        </div>

        {/* Floating Badges */}
        <FloatingBadges />

        {/* Product Preview Image */}
        <ProductPreview />
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
