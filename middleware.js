import { NextResponse } from 'next/server'

export function middleware(request) {
  const country = request.geo?.country || 'US'
  const manualCountry = request.cookies.get('preferred-country')?.value
  const resolvedCountry = manualCountry || country

  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // Don't redirect if user is already on a /liberia page
  if (pathname.startsWith('/liberia')) {
    return NextResponse.next()
  }

  if (resolvedCountry === 'US') {
    url.pathname = `/${pathname}`
    // url.pathname = `/liberia${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}