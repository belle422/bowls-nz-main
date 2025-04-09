"use client";

import Image from "next/image";

const logos = [
  {
    src: "/images/partners/summerset_logo.png",
    alt: "Summerset Retirement Village Logo",
  },
  { src: "/images/partners/aero_logo.png", alt: "Aero Logo" },
  { src: "/images/partners/gameOnTurf_logo.png", alt: "Game On Turf Logo" },
  { src: "/images/partners/shadeSystems_logo.png", alt: "Shade Systems Logo" },
  { src: "/images/partners/howden_logo.png", alt: "Howden Logo" },
  { src: "/images/partners/tower_logo.png", alt: "Tower Insurance Logo" },
  { src: "/images/partners/dynasty_logo.png", alt: "Dynasty Logo" },
];

export default function CommercialPartnerCarousel() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll min-w-[200%] gap-20 lg:gap-40 h-20 justify-center items-center whitespace-nowrap">
        {logos.concat(logos).map((logo, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={115}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
