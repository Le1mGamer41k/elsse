"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Leaf } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center relative">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L14.89 11.53z" />
              </svg>
            </div>
            <span className="font-bold text-xl">ELSSE</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-500">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-green-500">
              Menu
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-500">
              Blog
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-500">
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-500 flex items-center">
                <Leaf className="w-4 h-4 mr-1" />
                Eco
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/sustainability"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                >
                  🌱 Sustainability
                </Link>
                <Link
                  href="/eco-calculator"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                >
                  📊 Carbon Calculator
                </Link>
                <Link
                  href="/trees"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                >
                  🌳 Tree Planting
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-gray-700 hover:text-green-500">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-green-500">
              Login
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
