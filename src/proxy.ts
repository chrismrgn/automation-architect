import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')

  const validUser = process.env.BASIC_AUTH_USER || 'architect'
  const validPwd = process.env.BASIC_AUTH_PASSWORD || ''

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    try {
      const decoded = Buffer.from(authValue, 'base64').toString('utf-8')
      const colonIndex = decoded.indexOf(':')
      const user = decoded.substring(0, colonIndex)
      const pwd = decoded.substring(colonIndex + 1)

      if (user === validUser && pwd === validPwd && pwd !== '') {
        return NextResponse.next()
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Automation Architects Preview"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
