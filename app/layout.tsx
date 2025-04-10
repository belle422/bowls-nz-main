import type { Metadata } from "next";
import { Inter, Volkhov } from "next/font/google";
import "/styles/globals.css";

export const metadata: Metadata = {
  title: "Bowls New Zealand | Promoting & Developing Bowls at All levels",
  description:
    "Discover the world of lawn bowls in New Zealand. Find clubs, watch live matches, and learn how to play with Bowls New Zealand.",
  openGraph: {
    title: "Bowls New Zealand | Promoting & Developing Bowls at All levels",
    description:
      "Discover the world of lawn bowls in New Zealand. Find clubs, watch live matches, and learn how to play with Bowls New Zealand.",
    url: "https://bowls-nz-main.vercel.app",
    siteName: "Bowls New Zealand",
    images: [
      {
        url: "https://bowls-nz-main.vercel.app/images/open-graph-img_home.jpg",
        width: 1200,
        height: 630,
        alt: "Close up of lawn bowls with Bowls New Zealand logo overlay",
      },
    ],
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });
const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} ${volkhov.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
