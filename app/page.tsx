"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PlayCircle,
  Award,
  BellIcon as Whistle,
  Users2,
  ShoppingBag,
  CalendarDays,
} from "lucide-react";
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

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="flex relative h-[90vh] py-20 px-5 lg:px-10 flex-col gap-10 justify-end items-start bg-brown">
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
            <p className="text-[20px]">
              Promoting and developing bowls at all levels.
            </p>
          </div>
          <div className="flex gap-2.5">
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
          <h3 className="text-white w-[80%] leading-[130%]">
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
          <div className="flex pl-5 lg:pl-10 content-center justify-center w-full">
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
          <div className="pl-2.5 pr-5 lg:pl-5 lg:pr-10 w-full ">
            <div className="lg:p-10 p-5 flex bg-cream h-full flex-col gap-5 lg:justify-between">
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
                    className="w-full border-[1.5px] flex border-brown rounded-lg"
                  >
                    <div className="w-24 p-4 flex flex-col justify-center items-start gap-1">
                      <p className="text-[10px] uppercase font-medium leading-none tracking-[1.5px]">
                        {event.month}
                      </p>
                      <p className="text-[20px] leading-none tracking-[1px]">
                        {event.date}
                      </p>
                    </div>
                    <div className="bg-brown w-[1.5px] h-full" />
                    <div className="p-4 flex flex-col justify-center items-start gap-1">
                      <p className="text-[10px] uppercase font-medium leading-none tracking-[1.5px]">
                        {event.place}
                      </p>
                      <p className="text-[20px] leading-none tracking-[1px]">
                        {event.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 overflow-hidden shadow-md">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed?listType=user_uploads&list=bowlsnewzealand&index=0"
                  title="Latest Bowls New Zealand Video"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="bg-sage/5 p-4">
                <h3 className="text-lead font-bold mb-2">
                  Latest from Bowls TV
                </h3>
                <p className="text-body text-forest-light mb-4">
                  Watch the latest videos from Bowls New Zealand's official
                  YouTube channel.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="overflow-hidden shadow-md h-full bg-white p-4">
                <h3 className="text-xl font-bold mb-3">
                  Follow Us on Facebook
                </h3>

                {/* Facebook embed using iframe */}
                <div
                  className="relative overflow-hidden"
                  style={{ minHeight: "500px" }}
                >
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBowlsNewZealand&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                    width="100%"
                    height="500"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>

                {/* Link to Facebook */}
                <div className="mt-4">
                  <a
                    href="https://www.facebook.com/BowlsNewZealand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:text-forest-light font-medium inline-flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Visit our Facebook page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <Link
              href="https://shop.bowlsnewzealand.co.nz/collections/clothing/products/womens-bowls-new-zealand-polo-1"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white border border-gray-100 rounded-md overflow-hidden hover:shadow-sm transition">
                <img
                  src="/images/womens-polo-1.png"
                  alt="Product"
                  className="w-full"
                />
                {/* <div className="p-4 space-y-1">
                  <h3 style={normalTextBoldStyle} className="text-sm">
                    Women's Bowls New Zealand Polo
                  </h3>
                  <p style={normalTextStyle} className="text-sm text-gray-600">
                    $69.95
                  </p>
                </div> */}
              </div>
            </Link>

            {/* Product 2 */}
            <Link
              href="https://shop.bowlsnewzealand.co.nz/collections/clothing/products/womens-bowls-new-zealand-polo-1"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white border border-gray-100 rounded-md overflow-hidden hover:shadow-sm transition">
                <img
                  src="/images/womens-polo-2.png"
                  alt="Product"
                  className="w-full"
                />
                {/* <div className="p-4 space-y-1">
                  <h3 style={normalTextBoldStyle} className="text-sm">
                    Women's Bowls New Zealand Polo
                  </h3>
                  <p style={normalTextStyle} className="text-sm text-gray-600">
                    $69.95
                  </p>
                </div> */}
              </div>
            </Link>

            {/* Product 3 */}
            <Link
              href="https://shop.bowlsnewzealand.co.nz/collections/clothing/products/womens-bowls-new-zealand-polo-1"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white border border-gray-100 rounded-md overflow-hidden hover:shadow-sm transition">
                <img
                  src="/images/womens-polo-logo.png"
                  alt="Product"
                  className="w-full"
                />
                {/* <div className="p-4 space-y-1">
                  <h3 style={normalTextBoldStyle} className="text-sm">
                    Women's Bowls New Zealand Polo
                  </h3>
                  <p style={normalTextStyle} className="text-sm text-gray-600">
                    $69.95
                  </p>
                </div> */}
              </div>
            </Link>

            {/* Shop All Card */}
            <Link
              href="https://shop.bowlsnewzealand.co.nz/"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-50 border border-gray-200 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col justify-center items-center p-6">
                <div className="rounded-full bg-forest p-4 mb-6">
                  <ShoppingBag className="h-10 w-10 text-sage" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center">
                  Shop All Products
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Browse our full range of official Bowls New Zealand
                  merchandise.
                </p>
                <Button
                  className="bg-forest hover:bg-forest-light text-sage"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://shop.bowlsnewzealand.co.nz/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Visit Shop
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
