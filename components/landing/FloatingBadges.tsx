"use client";

import Image from "next/image";

export default function FloatingBadges() {
  return (
    <>
      {/* Floating Badges */}
      <div className="absolute hidden md:block left-4 top-[70%] lg:left-0 xl:left-[-20%] animate-float-1 pointer-events-none select-none z-30">
        <Image
          src="/icons/orders-icon.svg"
          alt="Orders Badge"
          width={76}
          height={35}
          priority
        />
      </div>
      <div className="absolute hidden md:block right-4 top-[70%] lg:right-0 xl:right-[-20%] animate-float-2 pointer-events-none select-none z-30">
        <Image
          src="/icons/analytics-icon.svg"
          alt="Analytics Badge"
          width={91}
          height={35}
          priority
        />
      </div>
      <div className="absolute hidden md:block left-8 bottom-[50%] lg:left-4 xl:left-[-10%] animate-float-3 pointer-events-none select-none z-30">
        <Image
          src="/icons/launch-icon.svg"
          alt="Launch Badge"
          width={79}
          height={35}
          priority
        />
      </div>
      <div className="absolute hidden md:block right-8 bottom-[50%] lg:right-4 xl:right-[-10%] animate-float-4 pointer-events-none select-none z-30">
        <Image
          src="/icons/payments-icon.svg"
          alt="Payments Badge"
          width={95}
          height={35}
          priority
        />
      </div>
    </>
  );
}
