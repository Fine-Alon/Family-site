import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'

// This middleware/proxy function can be marked `async` if using `await` inside
export const proxy = async (request: NextRequest) => {

  // authjs.session-token
  const sessionToken = await getToken({ req: request, secret: process.env.AUTH_SECRET })


  console.log('sessionToken :  ', sessionToken)


  if (!sessionToken) {
    return NextResponse.redirect(new URL('/no-access', request.url))
  }

  // if OK pass req forward to app
  return NextResponse.next()
}

export const config = {
  matcher: '/tasks/:path*',
}