"use client";

import Image from "next/image";

export default function ProductPreview() {
  return (
    <div className="w-full max-w-6xl overflow-hidden shadow-2xl translate-y-[15%] z-10 md:-mt-5 mt-5">
      <Image
        src="/images/product-preview.png"
        alt="Storeforge Product Preview"
        width={1280}
        height={800}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
