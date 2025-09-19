import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-6 text-gray-600 max-w-md">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
