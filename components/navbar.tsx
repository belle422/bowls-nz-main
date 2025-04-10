"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  MonitorPlay,
  ShoppingCart,
  CircleUserRound,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type navItem = {
    title: string;
    children: { title: string; href?: string; target?: "_blank" | "_self" }[];
  };

  const navItems: navItem[] = [
    {
      title: "Play Bowls",
      children: [
        { title: "How to Play" },
        { title: "Find a Club" },
        { title: "Twilight Bowls" },
        {
          title: "Join a Competition",
          href: "https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers",
          target: "_blank",
        },
      ],
    },
    {
      title: "Watch",
      children: [
        { title: "Bowls TV", href: "/bowls-tv", target: "_self" },
        { title: "Livestreams", href: "/bowls-tv/livestreams" },
        { title: "Match Replays", href: "/bowls-tv/match-replays" },
      ],
    },
    {
      title: "Community",
      children: [
        { title: "Volunteers" },
        { title: "Become a Coach" },
        { title: "Stories from the Green" },
        {
          title: "Inclusion & Diversity",
        },
      ],
    },
    {
      title: "About",
      children: [
        { title: "About Bowls NZ" },
        { title: "News & Updates" },
        { title: "Contact Us" },
      ],
    },
    {
      title: "Results & Rankings",
      children: [
        {
          title: "Results",
          href: "https://results.bowlshub.co.nz/club-group/CLUB_GROUP_ROOT#competitions",
          target: "_blank",
        },
        {
          title: "Rankings",
          href: "https://bowlsnewzealand.co.nz/bowls-plus/",
          target: "_blank",
        },
        { title: "Quick Results" },
      ],
    },
    {
      title: "Events",
      children: [
        {
          title: "Events Calendar",
          href: "https://bowlsnewzealand.co.nz/events/",
          target: "_blank",
        },
        {
          title: "Enter a Competition",
          href: "https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers",
          target: "_blank",
        },
        { title: "Past Events" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white/60 py-1" : "bg-transparent py-5"
      } backdrop-blur-sm`}
    >
      <div className="mx-auto max-w-[1440px] py-5 px-5 lg:px-10">
        <div className="flex items-start justify-between">
          <div className="flex gap-5 items-center">
            <button
              onClick={() => setIsOpen(true)}
              className={scrolled ? "text-black" : "text-white"}
            >
              <Menu strokeWidth={1} className="h-10 w-10 lg:h-7 lg:w-7" />
            </button>
            <Link
              href="/bowls-tv"
              className={scrolled ? "hidden md:flex" : "hidden md:flex"}
            >
              <Button
                variant="outline"
                size="sm"
                className={
                  scrolled
                    ? "text-black border-black"
                    : "text-white border-white"
                }
              >
                Bowls TV
              </Button>
            </Link>
          </div>
          {/* Logo */}
          <Link href="/">
            <Image
              src={
                scrolled
                  ? "/images/bowls-nz-logo.png"
                  : "/images/bowls-nz-logo-white.png"
              }
              alt="Bowls New Zealand Logo"
              width={68}
              height={60}
              priority
            />
          </Link>
          <div className="flex gap-5 items-center">
            <Link
              href="https://shop.bowlsnewzealand.co.nz"
              target="_blank"
              className={scrolled ? "hidden md:block" : "hidden md:block"}
            >
              <Button
                variant="outline"
                size="sm"
                className={
                  scrolled
                    ? "text-black border-black"
                    : "text-white border-white"
                }
              >
                Shop
              </Button>
            </Link>
            <Link
              href="https://www.bowlshub.co.nz/authenticate/login"
              target="_blank"
              className={
                scrolled
                  ? "hidden md:block text-black"
                  : "hidden md:block text-white"
              }
            >
              <CircleUserRound
                strokeWidth={1}
                className="h-10 w-10 lg:w-7 lg:h-7"
              />
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 z-50 w-full bg-white h-screen text-brown">
          <div className="px-5 lg:px-10 pt-2.5 pb-5 lg:pt-5 lg:pb-10 mx-auto max-w-[1440px] flex flex-col gap-5 lg:justify-between h-full overflow-y-auto">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-5">
                <button onClick={() => setIsOpen(false)} className="text-brown">
                  <X strokeWidth={1} className="h-10 w-10" />
                </button>
                <Link href="/bowls-tv">
                  <MonitorPlay
                    strokeWidth={1}
                    className=" text-brown h-10 w-10 md:hidden"
                  />
                  <Button
                    className="hidden md:flex border-black text-black"
                    variant="outline"
                    size="sm"
                  >
                    Bowls TV
                  </Button>
                </Link>
              </div>
              <Link href="/">
                <Image
                  src="/images/bowls-nz-logo.png"
                  alt="Bowls New Zealand Logo"
                  width={109}
                  height={96}
                  priority
                />
              </Link>
              <div className="flex gap-5 items-center">
                <Link href="https://shop.bowlsnewzealand.co.nz" target="_blank">
                  <ShoppingCart
                    strokeWidth={1}
                    className=" text-brown h-10 w-10 md:hidden"
                  />
                  <Button
                    className="hidden md:flex border-black text-black"
                    variant="outline"
                    size="sm"
                  >
                    Shop
                  </Button>
                </Link>
                <Link
                  href="https://www.bowlshub.co.nz/authenticate/login"
                  target="_blank"
                >
                  <CircleUserRound
                    strokeWidth={1}
                    className=" text-brown h-10 w-10"
                  />
                </Link>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-5 lg:gap-x-2.5 lg:gap-y-10">
              {navItems.map((section) => (
                <div
                  key={section.title}
                  className="flex pb-2.5 lg:pb-0 border-b border-brown lg:border-none lg:flex-col gap-2.5 w-full"
                >
                  <h3 className="w-full nav-title">{section.title}</h3>
                  <ul className="lg:space-y-1 w-full">
                    {section.children.map((item) => (
                      <li key={item.title}>
                        {item.href ? (
                          <Link
                            href={item.href}
                            target={item.target}
                            onClick={() => setIsOpen(false)}
                            className="paragraph-base hover:underline leading-none"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <p className="paragraph-base opacity-50 leading-none">
                            {item.title}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between paragraph-xs md:paragraph-sm">
              <p>
                The national governing body for lawn bowls in Aotearoa New
                Zealand, promoting and developing the sport at all levels.
              </p>
              <p>© {currentYear} Bowls New Zealand. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
