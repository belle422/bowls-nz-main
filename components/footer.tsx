"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription attempted")
  }

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/bowls-nz-logo-white.png"
                alt="Bowls New Zealand Logo"
                width={140}
                height={46}
                className="brightness-0 invert"
                priority
              />
            </div>
            <p className="mb-4 text-sm">
              The national governing body for lawn bowls in New Zealand, promoting and developing the sport at all
              levels.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-gt-super text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers"
                  className="hover:text-green-400 transition-colors"
                >
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-green-400 transition-colors">
                  Admin Portal
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-400 transition-colors">
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-green-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-gt-super text-white mb-4 text-sm uppercase tracking-wider">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>105a Jervois Road, Herne Bay, Auckland, New Zealand</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+64 (09) 579 5853</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>info@bowlsnewzealand.co.nz</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-gt-super text-white mb-4 text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter for the latest news and updates.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-600 focus:border-green-500 text-white"
                required 
              />
              <Button 
                type="submit" 
                size="lg"
                variant="outline"
                className="w-full border-white bg-white/10 hover:bg-white/20 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center px-8">
          <p className="text-sm">&copy; {currentYear} Bowls New Zealand. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers"
              className="text-xs hover:text-green-400 transition-colors"
            >
              Login / Register
            </Link>
            <Link href="/admin" className="text-xs hover:text-green-400 transition-colors">
              Admin Portal
            </Link>
            <Link href="/privacy" className="text-xs hover:text-green-400 transition-colors">
              Privacy & Terms
            </Link>
            <Link href="/sitemap" className="text-xs hover:text-green-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

