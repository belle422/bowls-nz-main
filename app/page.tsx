"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  MapPin,
  PlayCircle,
  Award,
  BellIcon as Whistle,
  Users2,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import PartnerCarousel from "@/components/PartnerCarousel";
import LatestNews from "@/components/LatestNews";
import FindYourPath from "@/components/FindYourPath";

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
        <p className="subheading text-brown">Funding Partners</p>
        <PartnerCarousel />
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

      {/* Upcoming Events */}
      <section className="py-16 bg-sage/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-subsection text-forest uppercase mb-4">
              UPCOMING EVENTS
            </h2>
            <Link
              href="https://bowlsnewzealand.co.nz/events/"
              className="float-right text-forest hover:text-forest-light flex items-center gap-1 mt-2 mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Calendar <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="flex border shadow-md">
                <div className="bg-forest text-sage p-4 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">2{item}</span>
                  <span className="text-sm">JUN</span>
                </div>
                <CardContent className="p-5 flex-1">
                  <h3 className="text-lead font-bold mb-1">
                    Regional Tournament
                  </h3>
                  <div className="text-caption text-forest-light mb-2 flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> Auckland Bowling Club
                  </div>
                  <p className="text-body text-forest-light">
                    Annual regional tournament with teams from across the North
                    Island.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      {/* Journey Selector */}
      <section className="py-16 bg-forest">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-subsection text-white mb-4">FIND YOUR PATH</h2>
            <p className="text-xl text-sage max-w-3xl mx-auto mt-4">
              Select your journey and we'll guide you to the resources that best
              fit your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-md bg-white rounded-none">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-forest/10 p-4 mb-6">
                  <PlayCircle className="h-10 w-10 text-forest" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-forest">
                  I Want to Play
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Find a club, learn the basics, or join a competition. Get
                  started with lawn bowls today.
                </p>
                <Button
                  className="w-full bg-forest hover:bg-forest-light text-sage"
                  onClick={() => router.push("/play-bowls")}
                  disabled={isNavigating}
                >
                  Start Playing
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white rounded-none">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-forest/10 p-4 mb-6">
                  <Award className="h-10 w-10 text-forest" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-forest">
                  I Want to Compete
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Take your game to the next level. Find tournaments, rankings,
                  and competitive opportunities.
                </p>
                <Button
                  className="w-full bg-forest hover:bg-forest-light text-sage"
                  onClick={() => router.push("/events")}
                  disabled={isNavigating}
                >
                  Find Competitions
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white rounded-none">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-forest/10 p-4 mb-6">
                  <Whistle className="h-10 w-10 text-forest" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-forest">
                  I Want to Coach
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Develop your coaching skills and help others improve their
                  game with our coaching resources.
                </p>
                <Button
                  className="w-full bg-forest hover:bg-forest-light text-sage"
                  onClick={() => router.push("/community/become-coach")}
                  disabled={isNavigating}
                >
                  Coaching Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white rounded-none">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-forest/10 p-4 mb-6">
                  <Users2 className="h-10 w-10 text-forest" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-forest">
                  I Want to Volunteer
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Give back to the sport by volunteering. Find opportunities to
                  help at clubs and events.
                </p>
                <Button
                  className="w-full bg-forest hover:bg-forest-light text-sage"
                  onClick={() => router.push("/community/volunteers")}
                  disabled={isNavigating}
                >
                  Volunteer Opportunities
                </Button>
              </CardContent>
            </Card>
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
