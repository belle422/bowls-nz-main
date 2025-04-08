"use client";

import Image from "next/image";

const logos = [
  { src: "/images/partners/sportNZL_logo.png", alt: "Sport NZL" },
  { src: "/images/partners/hpsnz_logo.png", alt: "High Performance Sport NZ" },
  { src: "/images/partners/nzct_logo.png", alt: "NZCT" },
  { src: "/images/partners/lionFoundation_logo.png", alt: "Lion Foundation" },
  {
    src: "/images/partners/aotearoaGamingTrust_logo.png",
    alt: "Aotearoa Gaming Trust",
  },
  { src: "/images/partners/foundationNorth_logo.png", alt: "Foundation North" },
  { src: "/images/partners/fourWinds_logo.png", alt: "Four Winds" },
  { src: "/images/partners/blueWaters_logo.png", alt: "Blue Waters" },
  { src: "/images/partners/pubCharity_logo.png", alt: "Pub Charity" },
];

export default function PartnerCarousel() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll gap-40 h-20 min-w-[200%] justify-center items-center whitespace-nowrap">
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
