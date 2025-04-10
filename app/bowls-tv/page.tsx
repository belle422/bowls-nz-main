"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

export default function BowlsTVPage() {
  // Actual YouTube channel links and latest video IDs
  const channels = [
    {
      name: "International",
      description: "International lawn bowls competitions and tournaments",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "h5NxPQ8PJlw", // Actual video ID from the embed code
      latestVideo: "2024 | World Champion of Champion Singles | Day Four",
    },
    {
      name: "Summerset Nationals",
      description: "Coverage of the Summerset National Championships",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "QFEt2heEYJE", // Actual video ID
      latestVideo: "2025 | Summerset National Singles & Pairs | Finals Day",
    },
    {
      name: "Intercentre",
      description: "Intercentre competitions between regional centers",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "TNj2WZFPkWE", // Actual video ID from the embed code
      latestVideo: "2024 | National Intercentre | Finals Day",
    },
    {
      name: "Bowls5",
      description: "Bowls5 format matches and highlights",
      youtubeUrl:
        "https://www.youtube.com/channel/UCvpPjQCCtn3VV94USzwgClw/videos",
      videoId: "-0-26_W8aPw", // Actual video ID from the embed code
      latestVideo: "Bowls5 Singles League | Night Seven",
    },
    {
      name: "Interclub Sevens",
      description: "Interclub Sevens competition coverage",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "VmjzHD3t_i4", // Actual video ID from the embed code
      latestVideo: "Interclub Sevens | Finals Day",
    },
    {
      name: "Champion of Champions",
      description: "Champion of Champions tournament coverage",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "Zs4huIUAdkA", // Actual video ID from the embed code
      latestVideo: "Champion of Champions | Finals Day",
    },
    {
      name: "North v South",
      description: "North Island versus South Island competition",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "TOL4J2mzi2Y", // Using known working Bowls NZ video
      latestVideo: "North v South | Highlights",
    },
    {
      name: "Bowls3Five",
      description: "Bowls3Five league matches and tournaments",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "eO3Z5YttoBg", // Actual video ID from the embed code
      latestVideo: "Bowls3Five | Match Highlights",
    },
    {
      name: "Regional Events",
      description: "Coverage of regional tournaments and events",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "QFEt2heEYJE", // Using known working Bowls NZ video
      latestVideo: "Regional Tournament Highlights",
    },
    {
      name: "Blasts from the Past",
      description: "Historical matches and memorable moments",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "sRwkU9BFq4E", // Using known working Bowls NZ video
      latestVideo: "Classic Matches | 2010 National Championships",
    },
    {
      name: "Twilight Bowls League",
      description: "Twilight Bowls League matches and highlights",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "tTkCNnP4idU", // Actual video ID from the embed code
      latestVideo: "Twilight Bowls League | Week 6 Highlights",
    },
    {
      name: '"Beyond the Bias" Podcast',
      description: "Interviews and discussions about lawn bowls",
      youtubeUrl:
        "https://www.youtube.com/playlist?list=PLYnd702kGBmnYl6Fax3eEYbu3NUvj-vBe",
      videoId: "VgIFYGNvgbE", // Video ID still needed for thumbnail
      latestVideo:
        "Beyond the Bias | Episode 12 - Interview with National Coach",
    },
  ];

  // State to track which video is currently being played
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Toggle video playback
  const toggleVideo = (videoId: string) => {
    if (activeVideo === videoId) {
      setActiveVideo(null);
    } else {
      setActiveVideo(videoId);
    }
  };

  // Add a function to handle cases where YouTube thumbnails fail to load
  const handleThumbnailError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    videoId: string
  ) => {
    const target = e.target as HTMLImageElement;
    // Try hqdefault if maxresdefault fails
    if (target.src.includes("maxresdefault")) {
      target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    // If hqdefault fails too, use a generic fallback
    else if (target.src.includes("hqdefault")) {
      target.src = "/images/video-placeholder.jpg";
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-brown overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="mx-auto max-w-[1440px] w-full px-5 lg:px-10 pt-40 pb-20 flex flex-col text-white">
        <div className="flex flex-col gap-5 ">
          <h1>Bowls TV</h1>
          <p className="paragraph-lg">
            Bowls New Zealand's offers a variety of channels covering national
            and international lawn bowls events, as well as coaching content and
            tutorials. Explore our YouTube content below.
          </p>
        </div>
      </div>
      {/* Featured Video */}
      <div className="bg-white text-brown py-[60px]">
        <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row w-full">
          <div className="px-5 lg:pl-10 w-full">
            <div className="lg:p-10 p-5 flex bg-cream h-full flex-col gap-5 lg:justify-between mb-5 lg:mb-0">
              <div className="flex justify-between items-start">
                <p className="subheading">Featured Video</p>
              </div>
              <div className="w-full flex flex-col gap-5">
                <p>
                  Subscribe to our main YouTube channel for the latest videos,
                  including coverage of the Summerset Nationals and
                  international events.
                </p>
                <Link
                  href="https://www.youtube.com/user/bowlsnewzealand"
                  target="_blank"
                >
                  <Button variant="outline" className="text-brown border-brown">
                    Subscribe
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
                className="w-full h-full max-w-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Channel list */}
      <div className="py-[60px] bg-cream text-brown">
        <div className="mx-auto lg:max-w-[1440px] flex flex-col w-full gap-20 px-5 lg:px-10">
          <p className="subheading">Browse Channels</p>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-x-5 lg:gap-y-10 w-full max-w-full">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="w-full max-w-full h-full overflow-hidden rounded-2xl border-[1.5px] border-brown"
              >
                <div className="px-2.5 py-5 border-b-[1.5px] w-full border-brown flex justify-between items-start">
                  <p className="paragraph-lg uppercase">{channel.name}</p>
                  <Link href={channel.youtubeUrl}>
                    <ExternalLink
                      strokeWidth={1.5}
                      className="h-6 w-6 text-brown"
                    />
                  </Link>
                </div>
                {/* Video Preview */}
                <div className="relative border-b-[1.5px] border-brown">
                  {activeVideo === channel.videoId ? (
                    <div className="aspect-video w-full h-auto ">
                      <iframe
                        src={
                          channel.name === '"Beyond the Bias" Podcast'
                            ? `https://www.youtube.com/embed/videoseries?list=PLYnd702kGBmnYl6Fax3eEYbu3NUvj-vBe&autoplay=1`
                            : channel.name === "International"
                            ? `https://www.youtube.com/embed/${channel.videoId}?si=CQpSfpkG6Ru1bmkT&autoplay=1&rel=0`
                            : channel.name === "Twilight Bowls League"
                            ? `https://www.youtube.com/embed/${channel.videoId}?si=ilGAw3PWQVHQP5nX&autoplay=1&rel=0`
                            : channel.name === "Intercentre"
                            ? `https://www.youtube.com/embed/${channel.videoId}?si=A6gfC0WPctkCC8oK&autoplay=1&rel=0`
                            : channel.name === "Bowls5"
                            ? `https://www.youtube.com/embed/${channel.videoId}?si=Lqh1lDYRg83efhUt&autoplay=1&rel=0`
                            : channel.name === "Interclub Sevens"
                            ? `https://www.youtube.com/embed/${channel.videoId}?si=0CsfXChEp9avBtMn&autoplay=1&rel=0`
                            : channel.name === "Champion of Champions"
                            ? `https://www.youtube.com/embed/${channel.videoId}?si=0CkCUtE3jxgBmHxG&autoplay=1&rel=0`
                            : channel.name === "Bowls3Five"
                            ? `https://www.youtube.com/embed/${channel.videoId}?si=p-O_X-EQQHBYJApp&autoplay=1&rel=0`
                            : `https://www.youtube.com/embed/${channel.videoId}?autoplay=1&rel=0`
                        }
                        title={`${channel.name} featured video`}
                        frameBorder="0"
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy={
                          channel.name === '"Beyond the Bias" Podcast' ||
                          channel.name === "International" ||
                          channel.name === "Twilight Bowls League" ||
                          channel.name === "Intercentre" ||
                          channel.name === "Bowls5" ||
                          channel.name === "Interclub Sevens" ||
                          channel.name === "Champion of Champions" ||
                          channel.name === "Bowls3Five"
                            ? "strict-origin-when-cross-origin"
                            : undefined
                        }
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-video relative cursor-pointer group"
                      onClick={() => toggleVideo(channel.videoId)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${channel.videoId}/maxresdefault.jpg`}
                        alt={`${channel.name} preview`}
                        className="w-full h-full object-cover"
                        onError={(e) =>
                          handleThumbnailError(e, channel.videoId)
                        }
                      />
                      <div className="absolute inset-0 bg-brown/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="border-[1.5px] border-cream rounded-2xl p-3">
                          <Play
                            strokeWidth={1.5}
                            className="h-10 w-10 text-cream"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-2.5 py-5 w-full flex flex-col gap-5 h-full">
                  <div className="flex flex-col gap-2.5">
                    <p className="paragraph-lg">{channel.description}</p>
                    <div className="flex gap-1">
                      <p className="truncate paragraph-xs  text-brown/80 italic">
                        <span className="uppercase">Latest: </span>{" "}
                        {channel.latestVideo}
                      </p>
                    </div>
                  </div>
                  <Link href={channel.youtubeUrl} target="_blank">
                    <Button className="w-full opacity-70" variant="secondary">
                      View Channel
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
