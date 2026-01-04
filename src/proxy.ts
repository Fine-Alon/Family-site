import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'
import { siteConfigs } from './config/app.config'

// This middleware/proxy function can be marked `async` if using `await` inside
export const proxy = async (request: NextRequest) => {
  const isProd = process.env.NODE_ENV === 'production'

  // authjs.session-token JWT from cookie
  const sessionToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET, secureCookie: isProd })



  console.log('token: ', sessionToken ? 'exist' : 'token лох',
    'NEXTAUTH_SECRET?', !!process.env.NEXTAUTH_SECRET,
    'sessionToken?', sessionToken)  // возможно тут проблема нежелательного редиректа

  const url = new URL('/no-access', request.url)

  if (!sessionToken) {
    url.searchParams.set('message', `page ${siteConfigs.authorizedOnlyPages}`)
    return NextResponse.redirect(url)
  }

  // if OK pass req forward to app
  return NextResponse.next()
}

export const config = {
  matcher: '/tasks/:path*',
}