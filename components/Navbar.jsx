"use client"

import { useState, useEffect } from "react"
import { SidebarTrigger } from "./ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const [country, setCountry] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  // Get cookie once
  useEffect(() => {
    const match = document.cookie.match(/(^| )preferred-country=([^;]+)/)
    setCountry(match ? match[2] : "US")
  }, [])

  // Prevent render until country is known
  if (!country) return null

  // Determine current location and base path
  const isOnLiberia = pathname.startsWith('/liberia')
  const basePath = isOnLiberia ? "/liberia" : ""
  const switchTo = isOnLiberia ? "US" : "LR"

  // Switch country - SIMPLIFIED
  const switchCountry = (target) => {
    // Get the clean path (without /liberia)
    let cleanPath = pathname.replace('/liberia', '') || '/'

    // Build new path
    const newPath = target === "LR" ? `/liberia${cleanPath}` : cleanPath

    // Set cookie
    document.cookie = `preferred-country=${target}; path=/; max-age=31536000`

    // Navigate
    window.location.href = newPath  // Use window.location for full reload
  }

  // Nav links
  const navLinks = [
    { name: "Home", href: basePath || "/" },
    { name: "About", href: `${basePath}/about` },
    { name: "Services", href: `${basePath}/services` },
    { name: "Contact", href: `${basePath}/contact` },
  ]

  return (
    <nav className="py-5 px-10 md:px-20 flex justify-between items-center transition-all duration-300 z-50 sticky w-full top-0 left-0 backdrop-blur-md shadow-lg text-black bg-white">
      {/* LOGO */}
      <Link href={basePath || "/"}>
        <Image 
          src="/adess-logo-colored.png" 
          width={100} 
          height={100} 
          alt="AdEss logo" 
        />
      </Link>

      {/* MOBILE */}
      <SidebarTrigger className='lg:hidden hover:bg-gray-100' />

      {/* DESKTOP */}
      <ul className="lg:flex gap-10 hidden items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="font-roboto hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* SWITCH */}
        <button
          onClick={() => switchCountry(switchTo)}
          className="border border-current px-4 py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition"
        >
          {switchTo === "LR" ? "🇱🇷 Liberia" : "🇺🇸 USA"}
        </button>
      </ul>
    </nav>
  )
}