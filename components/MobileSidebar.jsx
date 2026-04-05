"use client"
import { Anchor, BadgeCheck, Contact, Home,  X } from 'lucide-react'
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
    <Sidebar className='z-100'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='flex justify-end'>
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
