"use client"
import { useState, useEffect } from 'react'
import { SidebarTrigger } from "./ui/sidebar"
import { MenuIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Navbar({isHero = false}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Only track scroll on hero pages
    if (!isHero) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHero])

  const navLinks = [
    { name: "Home", href: "/" }, 
    { name: "About", href: "/about" }, 
    { name: "Services", href: "/services" }, 
    { name: "Contact", href: "/contact" }
  ]

  return (
    <nav className={`
      py-5 px-10 md:px-20 flex justify-between items-center transition-all duration-300 z-50
      ${isHero 
        ? `text-white fixed w-full top-0 left-0 ${isScrolled ? 'bg-white backdrop-blur-md shadow-lg text-black!' : 'bg-transparent'}`
        : 'bg-white shadow-md sticky w-full top-0  text-gray-900'
      }
      ${isScrolled ? 'shadow-md' : ''}
    `}>
      {/* Logo - white for hero, blue for regular pages */}
      <Link href="/">
        {isHero ? (
          // Hero page logo (white)
          isScrolled ? (
            // Scrolled: Show blue logo
            <Image 
              src='/adess-logo-colored.png'  // Blue logo
              className="cursor-pointer transition-all" 
              width={100}  // Smaller on scroll
              height={100} 
              alt="AdEss logo"
            />
          ) : (
            // Not scrolled: Show white logo
            <Image 
              src='/adess-logo.png'  // White logo
              className="cursor-pointer transition-all" 
              width={100} 
              height={100} 
              alt="AdEss logo"
            />
          )
        ) : (
          // Regular page: Always show blue logo
          <Image 
            src='/adess-logo-colored.png'  // Blue logo
            className="cursor-pointer transition-all" 
            width={100} 
            height={100} 
            alt="AdEss logo"
          />
        )}
      </Link>

      {/* Mobile menu trigger */}
      <SidebarTrigger className={`lg:hidden transition ${isHero ? ' hover:bg-white/20' : 'bg-transparent hover:bg-gray-100'}`}>
      </SidebarTrigger>

      {/* Desktop nav links */}
      <ul className="lg:flex gap-10 hidden">
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
      </ul>
    </nav>
  )
}