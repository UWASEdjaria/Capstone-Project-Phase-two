import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body || {}

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // NOTE: This is a placeholder implementation for local testing only.
    // In production you should validate input, hash passwords, and persist users in a database.

    // Simulate user creation and return a fake token
    const token = 'test-token-' + Date.now()

    return NextResponse.json({ token }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
