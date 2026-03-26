import { NextResponse } from 'next/server'

export function middleware(request) {
  const manualCountry = request.cookies.get('preferred-country')?.value

  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // 🚫 Don't touch static files or internal routes (extra safety)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // ✅ If user explicitly chose Liberia → ALWAYS route to Liberia
  if (manualCountry === 'LR') {
    if (!pathname.startsWith('/liberia')) {
      url.pathname = `/liberia${pathname}`
      return NextResponse.rewrite(url)
    }
  }

  // ✅ If user explicitly chose US → ALWAYS stay on US (root)
  if (manualCountry === 'US') {
    if (pathname.startsWith('/liberia')) {
      url.pathname = pathname.replace('/liberia', '') || '/'
      return NextResponse.rewrite(url)
    }
  }
  console.log(manualCountry)

  // 🌍 No cookie → DO NOTHING (default = US)
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}