"use client"
import { X } from 'lucide-react'
import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
