"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)

    // Redirect to home page after a short delay
    const redirectTimer = setTimeout(() => {
      router.push("/")
    }, 3000)

    return () => clearTimeout(redirectTimer)
  }, [error, router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6 text-gray-600">
        We apologize for the inconvenience. You will be redirected to the home page in a few seconds.
      </p>
      <Button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 rounded-md hover:from-gold-600 hover:to-gold-700"
      >
        Go to Home Page
      </Button>
    </div>
  )
}
