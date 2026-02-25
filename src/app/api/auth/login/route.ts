import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    // In a real application, you would validate against a database
    // For this simple implementation, we use environment variables or hardcoded values
    const adminUser = process.env.ADMIN_USERNAME || "admin"
    const adminPass = process.env.ADMIN_PASSWORD || "password123"

    if (username === adminUser && password === adminPass) {
      // Create a response
      const response = NextResponse.json(
        { success: true, message: "Login successful" },
        { status: 200 }
      )

      // Set a cookie
      // Note: In production, ensure secure: true is set (requires HTTPS)
      // We set httpOnly to true so client-side JS can't access it
      const cookieStore = await cookies()
      cookieStore.set("admin_session", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      })

      return response
    }

    return NextResponse.json(
      { success: false, message: "Invalid username or password" },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    )
  }
}
