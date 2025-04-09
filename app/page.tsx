"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import PartnerCarousel from "@/components/PartnerCarousel";
import LatestNews from "@/components/LatestNews";
import FindYourPath from "@/components/FindYourPath";
import CommercialPartnerCarousel from "@/components/CommercialPartnerCarousel";

export default function Home() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  // Generic navigation handler with error handling and debouncing
  const handleNavigation = useCallback(
    (path: string) => (e: React.MouseEvent) => {
      e.preventDefault();

      if (isNavigating) return;

      try {
        setIsNavigating(true);
        router.push(path);
      } catch (error) {
        console.error("Navigation error:", error);
      } finally {
        // Reset after a short delay to prevent double-clicks
        setTimeout(() => setIsNavigating(false), 500);
      }
    },
    [router, isNavigating]
  );

  // External link handler
  const handleExternalLink = useCallback(
    (url: string) => (e: React.MouseEvent) => {
      e.preventDefault();

      try {
        window.open(url, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Error opening external link:", error);
      }
    },
    []
  );

  const events = [
    {
      month: "Apr",
      date: "18-21",
      place: "Wellington",
      name: "Kittyhawk National U21 Singles",
    },
    {
      month: "May",
      date: "03-04",
      place: "HQ Royal Oak",
      name: "National Bowls 3Five Finals",
    },
    {
      month: "July",
      date: "18-20",
      place: "New Lynn + Royal Oak",
      name: "Champ of Champs Singles",
    },
  ];

  const products = [
    {
      title: "Women's Bowls New Zealand Polo",
      src: "/images/womens-polo-1.png",
      alt: "Women's Bowls New Zealand Polo",
      href: "https://shop.bowlsnewzealand.co.nz/collections/clothing/products/womens-bowls-new-zealand-polo-1",
      price: "$59.95",
    },
    {
      title: "Women's Bowls New Zealand Polo",
      src: "/images/womens-polo-2.png",
      alt: "Women's Bowls New Zealand Polo",
      href: "https://shop.bowlsnewzealand.co.nz/collections/clothing/products/womens-bowls-new-zealand-polo-1",
      price: "$69.95",
    },
    {
      title: "Women's Bowls New Zealand Polo",
      src: "/images/womens-polo-logo.png",
      alt: "Women's Bowls New Zealand Polo",
      href: "https://shop.bowlsnewzealand.co.nz/collections/clothing/products/womens-bowls-new-zealand-polo-1",
      price: "$49.95",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="flex relative h-[596px]  py-20 px-5 lg:px-10 flex-col gap-10 justify-end items-start bg-brown">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.png"
            alt="Lawn bowls on a green with black bowls and white jack"
            className="object-cover opacity-60"
            fill
            priority
          />
        </div>
        <div className="z-10 mx-auto max-w-[1440px] space-y-10 w-full">
          <div className="space-y-5 text-white leading-none">
            <h1>Welcome to Bowls New Zealand</h1>
            <p className="paragraph-lg font-medium">
              Promoting and developing bowls at all levels.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2.5">
            <Button
              onClick={() => router.push("/play-bowls/find-a-club")}
              disabled={isNavigating}
            >
              Find a Club Near You
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/play-bowls/how-to-play")}
              disabled={isNavigating}
            >
              Learn to Play
            </Button>
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="py-10 bg-white flex flex-col gap-5 items-center border-b border-brown/30">
        <p className="subheading text-brown">Commercial Partners</p>
        <CommercialPartnerCarousel />
      </div>

      <LatestNews />

      <div className="flex relative h-[596px] py-20 px-5 lg:px-10 flex-col gap-10 justify-end items-start bg-brown">
        <div className="absolute inset-0 z-0 bg-blend-darken">
          <Image
            src="/images/ponsonby-bowls.png"
            alt="Lawn bowls on a green with black bowls and white jack"
            className="object-cover opacity-60"
            fill
            priority
          />
        </div>
        <div className="z-10 mx-auto max-w-[1440px] space-y-10 w-full">
          <h3 className="text-white lg:w-[80%] leading-[130%]">
            <span className="italic">
              Rooted in tradition but focused on the future, Bowls New Zealand
              is{" "}
            </span>
            championing new ways to play, opening the sport to more people, and
            celebrating the community at its heart.
          </h3>
        </div>
      </div>

      <FindYourPath />

      {/* Logo Carousel */}
      <div className="py-10 bg-white flex flex-col gap-5 items-center border-b border-brown/30">
        <p className="subheading text-brown">Funding Partners</p>
        <PartnerCarousel />
      </div>

      {/* Upcoming Events */}

      <div className="bg-white py-5">
        <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row w-full">
          <div className="flex px-5 lg:pl-10 content-center justify-center w-full">
            <div className="relative">
              <Image
                src="/images/events.png"
                alt="Ponsonby Bowls Score Board "
                width={600}
                height={508}
                className="object-cover"
              />
            </div>
          </div>
          <div className="px-5 lg:pl-5 lg:pr-10 w-full">
            <div className="mt-5 lg:mt-0 lg:p-10 p-5 flex bg-cream h-full flex-col gap-5 lg:justify-between">
              <div className="flex justify-between w-full">
                <p className="subheading">Upcoming Events</p>
                <Link href="https://bowlsnewzealand.co.nz/events/">
                  <CalendarDays
                    strokeWidth={1}
                    className="text-brown h-10 w-10"
                  />
                </Link>
              </div>
              <div className="flex items-start flex-col gap-4 text-brown w-full">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="w-full overflow-hidden border-[1.5px] flex flex-col border-brown rounded-lg lg:flex-row"
                  >
                    <div className="lg:w-28 p-4 flex flex-col justify-center items-start gap-1 bg-brown text-white lg:bg-transparent lg:text-brown w-full border-r-[1.5px] border-brown">
                      <p className="label">{event.month}</p>
                      <p className="paragraph-lg">{event.date}</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-start gap-1">
                      <p className="label">{event.place}</p>
                      <p className="paragraph-lg lg:truncate">{event.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop */}
      <div className="bg-white py-[60px] border-b-[1.5px] border-brown/30">
        <div className="mx-auto max-w-[1440px] flex flex-col  w-full gap-20 px-5 lg:px-10 text-brown">
          <div className="w-full flex flex-col md:flex-row gap-10 items-start">
            <div className="space-y-2.5 w-full">
              <p className="subheading">Shop Our Collection</p>
              <p className="paragraph-base">
                Free shipping on all orders across New Zealand when you spend
                $20 or more!
              </p>
            </div>
            <Link href="https://shop.bowlsnewzealand.co.nz" target="_blank">
              <Button variant="secondary">View Full Collection</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {products.map((products, index) => (
              <Link
                href={products.href}
                target="_blank"
                key={index}
                className="flex flex-col gap-5 items-start hover:scale-105"
              >
                <Image
                  src={products.src}
                  alt={products.alt}
                  width={412}
                  height={412}
                />
                <div className="flex flex-col items-center w-full gap-2.5">
                  <p className="paragraph-base font-medium">{products.title}</p>
                  <p className="paragraph-xl font-medium">{products.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bowls TV */}
      <div className="bg-white py-5">
        <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row w-full">
          <div className="px-5 lg:pl-10 w-full">
            <div className="lg:p-10 p-5 flex bg-cream h-full flex-col gap-5 lg:justify-between mb-5 lg:mb-0">
              <div className="flex justify-between items-start">
                <p className="subheading">Latest from Bowls TV</p>
              </div>
              <div className="w-full flex flex-col gap-5">
                <p>
                  Watch the latest videos from Bowls New Zealand's official
                  YouTube channel.
                </p>
                <Link
                  href="https://www.youtube.com/user/bowlsnewzealand"
                  target="_blank"
                >
                  <Button variant="outline" className="text-brown border-brown">
                    See More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:pl-5 px-5 lg:pr-10 w-full h-full">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=bowlsnewzealand&index=0"
                title="Latest Bowls New Zealand Video"
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
