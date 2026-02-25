import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define paths that are considered public (no auth needed)
  const isPublicPath = path === '/admin/login' || path === '/api/auth/login' || path === '/api/auth/logout'

  // Get the token from the cookies
  const token = request.cookies.get('admin_session')?.value || ''

  // If the path starts with /admin and is not public, check for token
  if (path.startsWith('/admin') && !isPublicPath && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.nextUrl))
  }

  // If the user is already logged in and tries to access login page, redirect to admin dashboard
  if (path === '/admin/login' && token) {
    return NextResponse.redirect(new URL('/admin', request.nextUrl))
  }

  return NextResponse.next()
}

// Matching Paths
export const config = {
  matcher: [
    '/admin/:path*',
  ],
}
