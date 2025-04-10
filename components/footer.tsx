"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription attempted");
  };

  type QuickLink = {
    title: string;
    href?: string;
  };

  const quickLinks: QuickLink[] = [
    {
      title: "Sign Up",
      href: "https://www.bowlshub.co.nz/authenticate/login",
    },
    {
      title: "Log In",
      href: "https://v0-lawn-bowls-prototype-rap3jt.vercel.app/my-overview",
    },
    {
      title: "Shop",
      href: "https://shop.bowlsnewzealand.co.nzhttps://shop.bowlsnewzealand.co.nz/?_gl=1*ksmikx*_ga*MTkxNDE2MDE3OC4xNzQzNjMxNjI5*_ga_D9S0MEXCWG*MTc0NDI1NDMxMi44LjEuMTc0NDI1NDUxOC4wLjAuMA.",
    },
    {
      title: "Find a Club",
    },
    {
      title: "Prviacy & Terms",
    },
    {
      title: "Admin Portal",
    },
  ];

  return (
    <footer className="bg-brown relative w-full overflow-clip lg:h-[512px]">
      <div className="hidden lg:block lg:absolute z-0 w-full h-full">
        <Image
          src="/images/grass-bg.png"
          alt="Grass texture background"
          width={2560}
          height={512}
        />
      </div>
      <div className="flex flex-col items-start w-full gap-10 lg:gap-20 mx-auto max-w-[1440px] px-5 lg:px-10 py-10 z-10 text-white">
        <div className="grid md:grid-cols-2 z-10 lg:grid-cols-12 gap-10 md:gap-2.5 w-full">
          <div className="flex md:flex-col gap-10 lg:col-span-3">
            <Link href="/">
              <Image
                src="/images/bowls-nz-logo-white.png"
                alt="White Bowls New Zealand Logo"
                width={100}
                height={80}
              />
            </Link>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  {link.href ? (
                    <Link href={link.href} className="hover:underline">
                      <p className="paragraph-sm">{link.title}</p>
                    </Link>
                  ) : (
                    <p className="paragraph-sm text-white/70">{link.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-10 paragraph-sm w-full lg:col-span-3">
            <div className="md:h-20">
              <h6 className="footer-title">Contact</h6>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex gap-2.5 items-start ">
                <MapPin strokeWidth={1.5} className="text-white h-3.5 w-3.5" />
                <p>
                  105A Jervois Road, Herne Bay, <br /> Auckland, <br />
                  New Zealand
                </p>
              </div>
              <div className="flex gap-2.5 items-start">
                <Phone strokeWidth={1.5} className="text-white h-3.5 w-3.5" />
                <Link className="hover:underline" href="tel:+6495975853">
                  +64 (09) 597 5853
                </Link>
              </div>
              <div className="flex gap-2.5 items-start">
                <Mail strokeWidth={1.5} className="text-white h-3.5 w-3.5" />
                <Link
                  className="hover:underline"
                  href="mailto:info@bowlsnewzealand.co.nz"
                >
                  info@bowlsnewzealand.co.nz
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:flex" />
          <div className="flex flex-col gap-5 lg:gap-10 paragraph-sm w-full lg:col-span-4">
            <div className="md:h-20">
              <Link href="/contact">
                <h6 className="footer-title">Newsletter</h6>
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="paragraph-sm">
                Subscribe to our newsletter for the latest news and updates.
              </p>
              <form onSubmit={handleSubmit} className="space-y-2.5 w-full">
                <Input
                  type="name"
                  placeholder="Name"
                  className="bg-transparent  w-fullborder-[1.5px] border-white rounded-lg px-2.5 py-4 placeholder:text-white/80"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent w-full border-[1.5px] border-white rounded-lg px-2.5 py-4 placeholder:text-white/80"
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 items-center justify-between paragraph-xs z-10 text-white w-full">
          <p>
            The national governing body for lawn bowls in Aotearoa New Zealand,
            promoting and developing the sport at all levels.
          </p>
          <p>© {currentYear} Bowls New Zealand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
