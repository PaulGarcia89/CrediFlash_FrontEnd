import { NextResponse } from 'next/server'

const PUBLIC_PATH_PREFIXES = ['/login', '/register-analista', '/authentication', '/images']

const isPublicPath = pathname =>
  PUBLIC_PATH_PREFIXES.some(prefix => pathname === prefix || pathname.startsWith(`${prefix}/`))

export function middleware(request) {
  const { pathname, search } = request.nextUrl

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isPublicPath(pathname)) {
    return NextResponse.next()
  }

  const token = request.cookies.get('cf_token')?.value

  if (!token) {
    const redirect = `${pathname}${search || ''}`
    const loginUrl = new URL('/login', request.url)

    loginUrl.searchParams.set('redirect', redirect)

    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)']
}
