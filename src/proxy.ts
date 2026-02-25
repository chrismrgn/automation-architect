import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const VALID_USER = 'architect'
  const VALID_PASS = 'e4vEkCy37L2ck0gRjIfXIw'

  const authHeader = request.headers.get('authorization')

  if (authHeader && authHeader.startsWith('Basic ')) {
    try {
      const encoded = authHeader.substring(6)
      // Use atob for edge compat, then split on first colon only
      const decoded = atob(encoded)
      const sep = decoded.indexOf(':')
      const user = decoded.slice(0, sep)
      const pass = decoded.slice(sep + 1)

      if (user === VALID_USER && pass === VALID_PASS) {
        return NextResponse.next()
      }
    } catch {
      // fall through
    }
  }

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Automation Architects Preview"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
