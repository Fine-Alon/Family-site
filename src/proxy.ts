"use server"

import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/no-access', request.url))
}
 
export const config = {
  matcher: '/tasks/:path*',
}