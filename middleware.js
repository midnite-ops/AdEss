import { NextResponse } from 'next/server'

export function middleware(request) {
  const manualCountry = request.cookies.get('preferred-country')?.value
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // Skip static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Already on correct path - do nothing
  if (pathname.startsWith('/liberia') && manualCountry === 'LR') {
    return NextResponse.next()
  }
  
  if (!pathname.startsWith('/liberia') && (!manualCountry || manualCountry === 'US')) {
    return NextResponse.next()
  }

  // Need to switch
  if (manualCountry === 'LR' && !pathname.startsWith('/liberia')) {
    url.pathname = `/liberia${pathname}`
    return NextResponse.redirect(url)
  }

  if (manualCountry === 'US' && pathname.startsWith('/liberia')) {
    url.pathname = pathname.replace('/liberia', '') || '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}