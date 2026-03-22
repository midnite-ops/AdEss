'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()
  
  // Pages where navbar should NOT appear in layout (it's in the hero instead)
  const heroPages = ['/', '/services', '/about']
  
  // Don't render navbar here if it's a hero page
  if (heroPages.includes(pathname)) {
    return null
  }
  
  // Render navbar for non-hero pages (sticky at top)
  return <Navbar />
}