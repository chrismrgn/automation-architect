export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json({
    user_set: !!process.env.BASIC_AUTH_USER,
    pass_set: !!process.env.BASIC_AUTH_PASSWORD,
    user_val: process.env.BASIC_AUTH_USER?.substring(0, 3) + '***',
  })
}
