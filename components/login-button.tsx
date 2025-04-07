"use client"

import type React from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface LoginButtonProps extends ButtonProps {
  children?: React.ReactNode
}

export function LoginButton({ children = "Login / Register", ...props }: LoginButtonProps) {
  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      const loginWindow = window.open(
        "https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers",
        "_blank",
        "noopener,noreferrer"
      )
      if (loginWindow) {
        loginWindow.focus()
      }
    } catch (error) {
      console.error('Error opening login window:', error)
    }
  }

  return (
    <Button
      className="bg-forest hover:bg-forest-light text-sage flex items-center gap-2"
      onClick={handleLogin}
      {...props}
    >
      {children} <ExternalLink className="h-4 w-4" />
    </Button>
  )
}

