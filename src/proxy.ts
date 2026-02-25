import { NextRequest, NextResponse } from 'next/server'

const VALID_USER = process.env.BASIC_AUTH_USER ?? 'architect'
const VALID_PASS = process.env.BASIC_AUTH_PASSWORD ?? 'e4vEkCy37L2ck0gRjIfXIw'

export function proxy(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth && basicAuth.startsWith('Basic ')) {
    const base64Credentials = basicAuth.slice(6)
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
    const colonIndex = credentials.indexOf(':')
    if (colonIndex > -1) {
      const username = credentials.substring(0, colonIndex)
      const password = credentials.substring(colonIndex + 1)

      if (username === VALID_USER && password === VALID_PASS) {
        return NextResponse.next()
      }
    }
  }

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Automation Architects Preview", charset="UTF-8"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
