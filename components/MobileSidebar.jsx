"use client"
import { Anchor, BadgeCheck, CircleQuestionMark, Home, HomeIcon, X } from 'lucide-react'
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
    icon: Home
  },
  {
    title: 'About Us',
    url: '/about',
    icon: BadgeCheck
  },
  {
    title: 'Our Services',
    url: '/services',
    icon: Anchor
  },
  {
    title: 'Contact Us',
    url: '/contact',
    icon: CircleQuestionMark
  }
]

export default function MobileSidebar() {
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar className='z-50'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='flex justify-between'>
            AdEss
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
                      <item.icon />
                      <span>{item.title}</span>
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
