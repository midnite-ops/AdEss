"use client"

import { useState, useEffect } from "react"
import { SidebarTrigger } from "./ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar({ isHero = false }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [country, setCountry] = useState(null) // 👈 important
  const router = useRouter()

  // ✅ Get cookie once
  useEffect(() => {
    const match = document.cookie.match(/(^| )preferred-country=([^;]+)/)
    setCountry(match ? match[2] : "US")
  }, [])

  // ✅ Scroll effect
  useEffect(() => {
    if (!isHero) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHero])

  // ⛔ Prevent render until country is known (fix flicker)
  if (!country) return null

  // ✅ Derived values
  const basePath = country === "LR" ? "/liberia" : ""
  const switchTo = country === "LR" ? "US" : "LR"

  // ✅ Switch country (fixed)
  const switchCountry = (target) => {
    const currentPath = window.location.pathname

    let newPath

    if (target === "LR") {
      newPath = currentPath.startsWith("/liberia")
        ? currentPath
        : `/liberia${currentPath}`
    } else {
      newPath = currentPath.replace("/liberia", "") || "/"
    }

    document.cookie = `preferred-country=${target}; path=/; max-age=31536000`

    router.push(newPath)
    router.refresh()
  }

  // ✅ Nav links
  const navLinks = [
    { name: "Home", href: `${basePath}/` },
    { name: "About", href: `${basePath}/about` },
    { name: "Services", href: `${basePath}/services` },
    { name: "Contact", href: `${basePath}/contact` },
  ]

  return (
    <nav
      className={`
        py-5 px-10 md:px-20 flex justify-between items-center transition-all duration-300 z-50
        ${
          isHero
            ? `fixed w-full top-0 left-0 ${
                isScrolled
                  ? "bg-white backdrop-blur-md shadow-lg text-black"
                  : "bg-transparent text-white"
              }`
            : "bg-white shadow-md sticky top-0 text-gray-900"
        }
      `}
    >
      {/* LOGO */}
      <Link href={basePath || "/"}>
        {isHero ? (
          isScrolled ? (
            <Image src="/adess-logo-colored.png" width={100} height={100} alt="AdEss logo" />
          ) : (
            <Image src="/adess-logo.png" width={100} height={100} alt="AdEss logo" />
          )
        ) : (
          <Image src="/adess-logo-colored.png" width={100} height={100} alt="AdEss logo" />
        )}
      </Link>

      {/* MOBILE */}
      <SidebarTrigger
        className={`lg:hidden ${
          isHero ? "hover:bg-white/20" : "hover:bg-gray-100"
        }`}
      />

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