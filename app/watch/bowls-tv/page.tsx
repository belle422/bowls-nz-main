import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BowlsTVPage() {
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

      {/* <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Bowls TV</h1>

          <div className="aspect-video w-full mb-8">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=bowlsnewzealand"
              title="Bowls New Zealand YouTube Channel"
              className="w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">
              Welcome to Bowls TV, the official YouTube channel of Bowls New
              Zealand. Here you can find the latest videos, match highlights,
              tutorials, and more.
            </p>

            <p className="mt-4">
              Subscribe to our channel to stay updated with all the latest
              content from Bowls New Zealand.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.youtube.com/@bowlsnewzealand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-sage px-4 py-2 rounded-md"
              >
                Visit Our YouTube Channel
              </a>
              <Link
                href="/watch/channels"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-sage px-4 py-2 rounded-md"
              >
                View All Bowls TV Channels
              </Link>
            </div>
          </div>
        </div>
      </main> */}

      <Footer />
    </div>
  );
}
