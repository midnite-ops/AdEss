"use client"
import { X } from 'lucide-react'
import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, } from './ui/sidebar'



const menu = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About Us',
    url: '/about',
    
  },
  {
    title: 'Our Services',
    url: '/services'
  },
  {
    title: 'Contact Us',
    url: '/contact',
  }
]

export default function MobileSidebar() {
  const { toggleSidebar } = useSidebar()
  const [country, setCountry] = useState(null)
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
  return (
    <Sidebar className='z-100 '>
      <SidebarContent>
        <SidebarGroup className="pt-5">
          <SidebarGroupLabel className='flex justify-between mb-5'>
            <Link href="/" >
              <Image 
                
                src="/adess-logo-colored.png" 
                width={80} 
                height={80} 
                alt="AdEss logo" 
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className='hover:bg-transparent hover:text-inherit focus-visible:ring-0 active:bg-transparent bg-transparent'
            >
              <X className="h-5 w-5" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title} onClick={toggleSidebar}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span className='text-base'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => switchCountry(switchTo)} className="mt-5 py-2 px-5 bg-primary text-white w-fit">
                  Switch to {switchTo === "LR" ? "Liberia" : "US"}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
