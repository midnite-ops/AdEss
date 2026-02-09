"use client"
import { SidebarTrigger } from "./ui/sidebar"
import { MenuIcon } from 'lucide-react'

export default function Navbar() {
  const navLinks = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }, { name: "Services", href: "/services" }]
  return (
    <nav  className="py-5 px-10 md:px-20 flex justify-between items-center shadow-md">
      <div>AdEss</div>
      <SidebarTrigger className='bg-transparent  lg:hidden '>
        <MenuIcon className='h-4 w-4'/>
      </SidebarTrigger>
      <ul className="lg:flex gap-10 hidden">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="font-roboto">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
