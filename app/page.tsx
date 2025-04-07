"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Trophy,
  Users,
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

  // Custom style for shop product text
  const normalTextStyle = {
    fontFamily: "Apercu Pro, Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
  };

  const normalTextBoldStyle = {
    fontFamily: "Apercu Pro, Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      {/* Hero Section */}
      <div className="flex min-h-screen py-20 px-10 flex-col gap-10 bg-[#403B23]"></div>
      {/* <section className="relative h-[80vh] top-0 bg-cover bg-center flex items-end px-8 py-12 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/bowls-nz-homepage-banner.png"
            alt="Lawn bowls on a green with black bowls and white jack"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/fallback-banner.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-[1]" />
        </div>
        <div className="relative z-[2] w-full">
          <div className="flex items-end justify-between w-full pt-4">
            <div className="p-4 md:p-6">
              <h1 className="text-4xl md:text-5xl font-bold uppercase leading-relaxed">
                WELCOME TO
                <br />
                BOWLS
                <br />
                NEW ZEALAND
              </h1>
              <div className="w-20 h-px bg-white/40 my-3"></div>
              <p className="text-sm tracking-wide">● AOTEAROA </p>
            </div>
            <div className="hidden md:flex items-end space-x-4">
              <Button
                size="lg"
                className="bg-forest hover:bg-forest-light text-sage"
                onClick={() => router.push("/play-bowls/find-a-club")}
                disabled={isNavigating}
              >
                Find a Club Near You
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/10 hover:bg-white/20 text-white"
                onClick={() => router.push("/play-bowls/how-to-play")}
                disabled={isNavigating}
              >
                Learn to Play
              </Button>
            </div>
          </div>
          <div className="mt-8 md:hidden flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-forest hover:bg-forest-light text-sage"
              onClick={() => router.push("/play-bowls/find-a-club")}
              disabled={isNavigating}
            >
              Find a Club Near You
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 hover:bg-white/20 text-white"
              onClick={() => router.push("/play-bowls/how-to-play")}
              disabled={isNavigating}
            >
              Learn to Play
            </Button>
          </div>
        </div>
      </section> */}

      {/* Quick Links */}
      <section className="bg-forest py-6">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/play-bowls/find-a-club"
            className="flex items-center justify-center gap-2 bg-black text-white p-3 rounded-md hover:bg-gray-900"
          >
            <MapPin className="h-5 w-5" />
            <span className="font-medium">Find a Club</span>
          </Link>
          <Link
            href="https://bowlsnewzealand.co.nz/events/"
            className="flex items-center justify-center gap-2 text-sage font-medium hover:text-sage-light p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="h-5 w-5" />
            <span>Events Calendar</span>
          </Link>
          <Link
            href="/watch/livestreams"
            className="flex items-center justify-center gap-2 text-sage font-medium hover:text-sage-light p-2"
          >
            <Trophy className="h-5 w-5" />
            <span>Livestreams</span>
          </Link>
          <Link
            href="https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers"
            className="flex items-center justify-center gap-2 text-sage font-medium hover:text-sage-light p-2"
          >
            <Users className="h-5 w-5" />
            <span>Login / Register</span>
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-subsection text-forest mb-4">
              THE LATEST NEWS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/bowls-action.png"
                  alt="Player in action at the National Championships"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/fallback-news.jpg";
                  }}
                />
                <div className="absolute top-0 left-0 m-3">
                  <span className="inline-block bg-forest text-sage text-xs font-bold uppercase px-3 py-1">
                    TOURNAMENT
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-caption font-semibold text-forest-light uppercase mb-2">
                  15 JUNE 2023
                </div>
                <h3 className="text-lead font-bold mb-3">
                  National Championships Results
                </h3>
                <p className="text-body text-forest-light mb-4">
                  The National Championships concluded with exciting finals
                  across all divisions. Congratulations to all winners!
                </p>
                <Link
                  href="/news/1"
                  className="text-caption font-medium text-forest hover:text-forest-light"
                >
                  READ MORE
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/colorful-bowls.png"
                  alt="Colorful lawn bowls on the green"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/fallback-news.jpg";
                  }}
                />
                <div className="absolute top-0 left-0 m-3">
                  <span className="inline-block bg-forest text-sage text-xs font-bold uppercase px-3 py-1">
                    EQUIPMENT
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-caption font-semibold text-forest-light uppercase mb-2">
                  12 JUNE 2023
                </div>
                <h3 className="text-lead font-bold mb-3">
                  Equipment Standards Updated
                </h3>
                <p className="text-body text-forest-light mb-4">
                  Bowls New Zealand has released updated equipment standards for
                  the upcoming season. Check the new approved bowl types.
                </p>
                <Link
                  href="/news/2"
                  className="text-caption font-medium text-forest hover:text-forest-light"
                >
                  READ MORE
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/women-bowlers.png"
                  alt="Women's competition at regional tournament"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/fallback-news.jpg";
                  }}
                />
                <div className="absolute top-0 left-0 m-3">
                  <span className="inline-block bg-forest text-sage text-xs font-bold uppercase px-3 py-1">
                    COMPETITION
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-caption font-semibold text-forest-light uppercase mb-2">
                  10 JUNE 2023
                </div>
                <h3 className="text-lead font-bold mb-3">
                  Women's Regional Tournament Success
                </h3>
                <p className="text-body text-forest-light mb-4">
                  The Women's Regional Tournament saw record participation this
                  year with outstanding performances across all divisions.
                </p>
                <Link
                  href="/news/3"
                  className="text-caption font-medium text-forest hover:text-forest-light"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Banner */}
      <section className="py-12 bg-forest">
        <div className="container">
          <p className="text-white italic text-center font-gt-super text-2xl md:text-4xl lg:text-5xl leading-relaxed px-4 md:px-12 max-w-5xl mx-auto">
            "Rooted in tradition but focused on the future, Bowls New Zealand is
            championing new ways to play, opening the sport to more people, and
            celebrating the community at its heart."
          </p>
        </div>
      </section>

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
                <div className="p-4 space-y-1">
                  <h3 style={normalTextBoldStyle} className="text-sm">
                    Women's Bowls New Zealand Polo
                  </h3>
                  <p style={normalTextStyle} className="text-sm text-gray-600">
                    $69.95
                  </p>
                </div>
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
                <div className="p-4 space-y-1">
                  <h3 style={normalTextBoldStyle} className="text-sm">
                    Women's Bowls New Zealand Polo
                  </h3>
                  <p style={normalTextStyle} className="text-sm text-gray-600">
                    $69.95
                  </p>
                </div>
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
                <div className="p-4 space-y-1">
                  <h3 style={normalTextBoldStyle} className="text-sm">
                    Women's Bowls New Zealand Polo
                  </h3>
                  <p style={normalTextStyle} className="text-sm text-gray-600">
                    $69.95
                  </p>
                </div>
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
