"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlayCircle, Trophy, BookCopy, Handshake } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function FindYourPath() {
  const router = useRouter();

  const userJourneys = [
    {
      icon: PlayCircle,
      title: "Play",
      description:
        "Find a club, learn the basics, or join a competition. Get started with lawn bowls today.",
      CTA: "Start Playing",
      href: "/play-bowls/how-to-play",
    },
    {
      icon: Trophy,
      title: "Compete",
      description:
        "Find tournaments, rankings, & competitive opportunities to level up your game.",
      CTA: "Find Competitions",
      href: "/events",
    },
    {
      icon: BookCopy,
      title: "Coach",
      description:
        "Develop your coaching skills and help others improve their game with coaching resources.",
      CTA: "Coaching Resources",
      href: "/community/become-a-coach",
    },
    {
      icon: Handshake,
      title: "Volunteer",
      description:
        "Give back to the sport by volunteering. Find opportunities to help at clubs and events.",
      CTA: "Volunteer Opportunities",
      href: "/community/volunteers",
    },
  ];

  return (
    <div className="bg-white py-[60px]">
      <div className="px-5 lg:px-10 mx-auto max-w-[1440px] flex flex-col gap-20 w-full">
        <div className="space-y-5 text-brown">
          <h2 className="uppercase">Find Your Path</h2>
          <p className="font-medium text-[16px] leading-[120%]">
            Select your journey and we'll guide you to the resources that best
            fit your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {userJourneys.map((userJourney, index) => (
            <div
              key={index}
              className="bg-cream px-8 py-5 flex flex-col items-start gap-8"
            >
              <div className="rounded-lg border-[1.5px] border-brown p-3">
                <userJourney.icon
                  strokeWidth={1}
                  className="text-brown h-9 w-9"
                />
              </div>
              <div className="text-brown space-y-2.5">
                <h4 className="uppercase">{userJourney.title}</h4>
                <p className="text-[14px] leading-[130%]">
                  {userJourney.description}
                </p>
              </div>
              <Button className="w-full" variant="secondary" size="sm">
                {userJourney.CTA}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
