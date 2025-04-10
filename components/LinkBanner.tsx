import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LinkBanner() {
  type CTALink = {
    title: string;
    href?: string;
  };

  const ctaLinks: CTALink[] = [
    { title: "Bowls+", href: "https://bowlsnewzealand.co.nz/bowls-plus" },
    {
      title: "BowlsHub",
      href: "https://results.bowlshub.co.nz/club-group/CLUB_GROUP_ROOT#competitions",
    },
    { title: "Event Calendar", href: "https://bowlsnewzealand.co.nz/events/" },
    { title: "Honours Board" },
  ];

  return (
    <div className="bg-cream border-b-[1.5px] border-brown text-brown md:max-h-[104px] h-full">
      <div className="h-full mx-auto max-w-[1440px] md:divide-x-[1.5px] divide-x-0 divide-y-[1.5px] md:divide-y-0 divide-brown w-full grid md:grid-cols-4">
        {ctaLinks.map((link, index) => (
          <div key={index} className="h-full">
            {link.href ? (
              <Link href={link.href} target="_blank ">
                <div className="flex items-start justify-between p-5 lg:p-10">
                  <p className="subheading hover:underline">{link.title}</p>
                  <ArrowRight
                    className="h-6 w-6 text-brown"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            ) : (
              <div className="flex items-start justify-between p-5 lg:p-10">
                <p className="subheading">{link.title}</p>
                <ArrowRight className="h-6 w-6 text-brown" strokeWidth={1.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
