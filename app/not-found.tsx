import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Button asChild className="bg-green-500 hover:bg-green-600">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
