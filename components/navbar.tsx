"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  MonitorPlay,
  ShoppingCart,
  CircleUserRound,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "Play Bowls",
      children: [
        { title: "How to Play", href: "/play-bowls/how-to-play" },
        { title: "Find a Club", href: "/play-bowls/find-a-club" },
        { title: "Twilight Bowls", href: "/play-bowls/twilight-bowls" },
        {
          title: "Join a Competition",
          href: "https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers",
        },
      ],
    },
    {
      title: "Watch",
      children: [
        { title: "Bowls TV", href: "/watch/bowls-tv" },
        { title: "Bowls TV Channels", href: "/watch/channels" },
        { title: "Livestreams", href: "/watch/livestreams" },
        { title: "Match Replays", href: "/watch/match-replays" },
      ],
    },
    {
      title: "Community",
      children: [
        { title: "Volunteers", href: "/community/volunteers" },
        { title: "Become a Coach", href: "/community/become-a-coach" },
        { title: "Stories from the Green", href: "/community/stories" },
        {
          title: "Inclusion & Diversity",
          href: "/community/inclusion-diversity",
        },
      ],
    },
    {
      title: "About",
      children: [
        { title: "About Bowls NZ", href: "/about/about-us" },
        { title: "News & Updates", href: "/about/news" },
        { title: "Contact Us", href: "/about/contact" },
      ],
    },
    {
      title: "Results & Rankings",
      children: [
        {
          title: "Results",
          href: "https://results.bowlshub.co.nz/club-group/CLUB_GROUP_ROOT#competitions",
        },
        {
          title: "Rankings",
          href: "https://bowlsnewzealand.co.nz/bowls-plus/",
        },
        { title: "Quick Results", href: "/results-rankings/quick-results" },
      ],
    },
    {
      title: "Events",
      children: [
        {
          title: "Events Calendar",
          href: "https://bowlsnewzealand.co.nz/events/",
        },
        {
          title: "Enter a Competition",
          href: "https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers",
        },
        { title: "Past Events", href: "/events/past-events" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 z-40 w-full bg-transparent backdrop-blur-sm">
      <div className="mx-auto max-w-[1440px] py-5 px-5 lg:px-10">
        <div className="flex items-start justify-between">
          <div className="flex gap-5 items-center">
            <button onClick={() => setIsOpen(true)} className="text-white">
              <Menu strokeWidth={1} className="h-10 w-10" />
            </button>
            <Link href="/watch/livestreams">
              <MonitorPlay strokeWidth={1} className="h-10 w-10 text-white" />
            </Link>
          </div>
          <Link href="/">
            <Image
              src="/images/bowls-nz-logo-white.png"
              alt="Bowls New Zealand Logo"
              width={109}
              height={96}
              priority
            />
          </Link>
          <div className="flex gap-5 items-center">
            <Link href="https://shop.bowlsnewzealand.co.nz" target="_blank">
              <ShoppingCart strokeWidth={1} className="h-10 w-10 text-white" />
            </Link>
            <Link
              href="https://www.bowlshub.co.nz/authenticate/login"
              target="_blank"
            >
              <CircleUserRound
                strokeWidth={1}
                className="h-10 w-10 text-white"
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
                <Link href="/watch/livestreams">
                  <MonitorPlay
                    strokeWidth={1}
                    className="h-10 w-10 text-brown"
                  />
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
                    className="h-10 w-10 text-brown"
                  />
                </Link>
                <Link
                  href="https://www.bowlshub.co.nz/authenticate/login"
                  target="_blank"
                >
                  <CircleUserRound
                    strokeWidth={1}
                    className="h-10 w-10 text-brown"
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
                  <h3 className="w-full font-semibold text-[18px] leading-none tracking-[1px] uppercase">
                    {section.title}
                  </h3>
                  <ul className="lg:space-y-1 w-full">
                    {section.children.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-[16px] hover:text-black leading-none"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[12px] leading-none">
              <p>
                The national governing body for lawn bowls in Aotearoa New
                Zealand, promoting and developing the sport at all levels.
              </p>
              <p>© 2025 Bowls New Zealand. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
