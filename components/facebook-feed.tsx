// This file is kept but not imported or used
"use client"

import { useEffect, useRef } from "react"

export default function FacebookFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      const script = document.createElement("script")
      script.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0"
      script.async = true
      script.defer = true
      script.crossOrigin = "anonymous"
      document.body.appendChild(script)

      // Add FB root div if it doesn't exist
      if (!document.getElementById("fb-root")) {
        const fbRoot = document.createElement("div")
        fbRoot.id = "fb-root"
        document.body.insertBefore(fbRoot, document.body.firstChild)
      }
    }

    // Initialize the Facebook plugin
    if (containerRef.current && !containerRef.current.querySelector(".fb-page")) {
      loadFacebookSDK()

      const fbPage = document.createElement("div")
      fbPage.className = "fb-page"
      fbPage.setAttribute("data-href", "https://www.facebook.com/BowlsNewZealand/")
      fbPage.setAttribute("data-tabs", "timeline")
      fbPage.setAttribute("data-width", "500")
      fbPage.setAttribute("data-height", "700")
      fbPage.setAttribute("data-small-header", "false")
      fbPage.setAttribute("data-adapt-container-width", "true")
      fbPage.setAttribute("data-hide-cover", "false")
      fbPage.setAttribute("data-show-facepile", "true")

      containerRef.current.appendChild(fbPage)

      // Reinitialize FB SDK if it's already loaded
      if (window.FB) {
        window.FB.XFBML.parse()
      }
    }

    return () => {
      // Cleanup if needed
    }
  }, [])
  //crazy

  return (
    <div className="facebook-feed-container" ref={containerRef}>
      <div className="flex justify-center items-center min-h-[500px] bg-gray-100 rounded-lg">
        <p className="text-gray-500">Loading Facebook feed...</p>
      </div>
    </div>  
  )
}

