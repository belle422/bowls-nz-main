import type { Metadata } from "next";
import { Inter, Volkhov } from "next/font/google";
import "/styles/globals.css";

export const metadata: Metadata = {
  title: "Bowls New Zealand",
  description: "Promoting and developing bowls at all levels.",
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
