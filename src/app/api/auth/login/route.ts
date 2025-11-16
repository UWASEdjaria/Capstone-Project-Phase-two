import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body || {}

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // NOTE: Placeholder auth logic. Replace with real verification.
    // For demo, accept any credentials and return a token.
    const token = 'login-token-' + Date.now()
    return NextResponse.json({ token }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
