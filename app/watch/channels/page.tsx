"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Youtube, Play } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BowlsTVChannelsPage() {
  // Actual YouTube channel links and latest video IDs
  const channels = [
    {
      name: "International",
      description: "International lawn bowls competitions and tournaments",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "h5NxPQ8PJlw", // Actual video ID from the embed code
      latestVideo: "2024 | World Champion of Champion Singles | Day Four"
    },
    {
      name: "Summerset Nationals",
      description: "Coverage of the Summerset National Championships",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "QFEt2heEYJE", // Actual video ID
      latestVideo: "2025 | Summerset National Singles & Pairs | Finals Day"
    },
    {
      name: "Intercentre",
      description: "Intercentre competitions between regional centers",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "TNj2WZFPkWE", // Actual video ID from the embed code
      latestVideo: "2024 | National Intercentre | Finals Day"
    },
    {
      name: "Bowls5",
      description: "Bowls5 format matches and highlights",
      youtubeUrl: "https://www.youtube.com/channel/UCvpPjQCCtn3VV94USzwgClw/videos",
      videoId: "-0-26_W8aPw", // Actual video ID from the embed code
      latestVideo: "Bowls5 Singles League | Night Seven"
    },
    {
      name: "Interclub Sevens",
      description: "Interclub Sevens competition coverage",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "VmjzHD3t_i4", // Actual video ID from the embed code
      latestVideo: "Interclub Sevens | Finals Day"
    },
    {
      name: "Champion of Champions",
      description: "Champion of Champions tournament coverage",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "Zs4huIUAdkA", // Actual video ID from the embed code
      latestVideo: "Champion of Champions | Finals Day"
    },
    {
      name: "North v South",
      description: "North Island versus South Island competition",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "TOL4J2mzi2Y", // Using known working Bowls NZ video
      latestVideo: "North v South | Highlights"
    },
    {
      name: "Bowls3Five",
      description: "Bowls3Five league matches and tournaments",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "eO3Z5YttoBg", // Actual video ID from the embed code
      latestVideo: "Bowls3Five | Match Highlights"
    },
    {
      name: "Regional Events",
      description: "Coverage of regional tournaments and events",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "QFEt2heEYJE", // Using known working Bowls NZ video
      latestVideo: "Regional Tournament Highlights"
    },
    {
      name: "Blasts from the Past",
      description: "Historical matches and memorable moments",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "sRwkU9BFq4E", // Using known working Bowls NZ video
      latestVideo: "Classic Matches | 2010 National Championships"
    },
    {
      name: "Twilight Bowls League",
      description: "Twilight Bowls League matches and highlights",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLfRKPuEJMqdmIxpMpfXGIwt-xHOLT1gSd",
      videoId: "tTkCNnP4idU", // Actual video ID from the embed code
      latestVideo: "Twilight Bowls League | Week 6 Highlights"
    },
    {
      name: '"Beyond the Bias" Podcast Series',
      description: "Interviews and discussions about lawn bowls",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLYnd702kGBmnYl6Fax3eEYbu3NUvj-vBe",
      videoId: "VgIFYGNvgbE", // Video ID still needed for thumbnail
      latestVideo: "Beyond the Bias | Episode 12 - Interview with National Coach"
    },
  ]

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
  const handleThumbnailError = (e: React.SyntheticEvent<HTMLImageElement, Event>, videoId: string) => {
    const target = e.target as HTMLImageElement;
    // Try hqdefault if maxresdefault fails
    if (target.src.includes('maxresdefault')) {
      target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    } 
    // If hqdefault fails too, use a generic fallback
    else if (target.src.includes('hqdefault')) {
      target.src = "/images/video-placeholder.jpg";
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-forest py-16 text-white">
        <div className="container">
          <h1 className="text-subsection text-center mb-8">BOWLS TV CHANNELS</h1>
          <p className="text-lead text-center max-w-4xl mx-auto">
            Bowls New Zealand's Bowls TV offers a variety of channels covering national and international lawn bowls events, as well as coaching content and tutorials. Explore our YouTube content below.
          </p>
        </div>
      </section>
      
      {/* Featured Videos - Now at the top */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-subsection text-forest text-center mb-8">FEATURED VIDEO</h2>
          <div className="aspect-video w-full mb-8 max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLYnd702kGBmnYl6Fax3eEYbu3NUvj-vBe"
              title="Beyond the Bias Podcast Series"
              className="w-full h-full rounded-lg shadow-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Main YouTube Channel - Now in the middle */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <p className="text-lead text-forest-light max-w-3xl mb-6">
              Subscribe to our main YouTube channel for the latest videos, including coverage of the Summerset Nationals and international events.
            </p>
            <Button 
              size="lg"
              className="bg-forest hover:bg-forest-light text-sage"
              asChild
            >
              <a 
                href="https://www.youtube.com/user/bowlsnewzealand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                Bowls New Zealand on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Channels Grid - Now at the bottom */}
      <section className="py-16 bg-sage/5">
        <div className="container">
          <h2 className="text-subsection text-forest text-center mb-8">BROWSE CHANNELS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <Card key={index} className="bg-white shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="bg-forest p-6 text-sage">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">{channel.name}</h2>
                      <Youtube className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Video Preview */}
                  <div className="relative">
                    {activeVideo === channel.videoId ? (
                      <div className="aspect-video w-full h-auto">
                        <iframe
                          width="100%"
                          height="100%"
                          src={channel.name === '"Beyond the Bias" Podcast Series' 
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
                                          : `https://www.youtube.com/embed/${channel.videoId}?autoplay=1&rel=0`}
                          title={`${channel.name} featured video`}
                          frameBorder="0"
                          className="absolute top-0 left-0 w-full h-full"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy={channel.name === '"Beyond the Bias" Podcast Series' || 
                                        channel.name === "International" || 
                                        channel.name === "Twilight Bowls League" ||
                                        channel.name === "Intercentre" ||
                                        channel.name === "Bowls5" ||
                                        channel.name === "Interclub Sevens" ||
                                        channel.name === "Champion of Champions" ||
                                        channel.name === "Bowls3Five"
                                          ? "strict-origin-when-cross-origin" 
                                          : undefined}
                        ></iframe>
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
                          onError={(e) => handleThumbnailError(e, channel.videoId)}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-forest rounded-full p-3">
                            <Play className="h-8 w-8 text-sage" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-body text-forest-light mb-3">{channel.description}</p>
                    <p className="text-caption font-semibold text-forest mb-6">Latest: {channel.latestVideo}</p>
                    <div className="mt-auto">
                      <Button 
                        className="w-full bg-forest hover:bg-forest-light text-sage"
                        asChild
                      >
                        <a 
                          href={channel.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Watch Channel <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 