"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type Article = {
  title: string;
  image: string;
  date: string;
  tag: string;
};

const articles: Article[] = [
  {
    title: "Lachie and Jordie McEwan: the new Dunedin bowls weapons",
    image: "/images/news/mcewan-family.png",
    date: "09 March 2025",
    tag: "Player Spotlight",
  },
  {
    title: "Julie Blake: performing highly in High Performance",
    image: "/images/news/julie-blake.png",
    date: "07 March 2025",
    tag: "Staff Spotlight",
  },
  {
    title: "Colin Dennis: 65 years of bowls",
    image: "/images/news/colin-dennis.png",
    date: "03 March 2025",
    tag: "Player Spotlight",
  },
];

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevArticle = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const nextArticle = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const article = articles[currentIndex];

  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row w-full">
        <div className="flex pl-5 lg:pl-10 content-center justify-center w-full">
          <div className="relative">
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={508}
              className="object-cover"
            />
          </div>
        </div>
        <div className="pl-2.5 pr-5 lg:pl-5 lg:pr-10 w-full ">
          <div className="lg:p-10 p-5 flex flex-col gap-5 lg:gap-20">
            <div className="flex justify-between w-full">
              <p className="subheading">Latest News</p>
              <div className="flex items-center gap-5">
                <button onClick={prevArticle} className="hover:opacity-90">
                  <ArrowLeft strokeWidth={1} className="text-brown h-10 w-10" />
                </button>
                <button onClick={nextArticle} className="hover:opacity-90">
                  <ArrowRight
                    strokeWidth={1}
                    className="text-brown h-10 w-10"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-start flex-col gap-5 text-brown w-full">
              <div className="flex flex-col gap-2.5">
                <p className="subheading">{article.tag}</p>
                <h2 className="leading-[110%]">{article.title}</h2>
                <p className="paragraph-base font-medium">
                  Publish date: {article.date}
                </p>
              </div>
              <Button variant="outline" className="text-brown border-brown">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
