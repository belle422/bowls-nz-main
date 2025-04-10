import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BowlsTVOldPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brown text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="mx-auto max-w-[1440px] w-full px-5 lg:px-10 pt-40 pb-20 flex flex-col ">
        <div className="flex flex-col gap-5 ">
          <h1>Bowls TV</h1>
          <p className="paragraph-lg">
            Here you can find Bowls New Zealand's latest videos, match
            highlights, tutorials, and more.
          </p>
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-auto max-w-[1440px] w-full px-5 lg:px-10 py-10 flex flex-col justify-center items-center">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=bowlsnewzealand"
              title="Bowls New Zealand YouTube Channel"
              className="w-full h-full rounded-3xl"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
