"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Plus } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface DishCardProps {
  id: string
  name: string
  price: string
  rating: number
  image: string
}

export function DishCard({ id, name, price, rating, image }: DishCardProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Convert price string to number (remove $ sign and convert to number)
    const priceNumber = Number.parseFloat(price.replace("$", ""))

    addToCart({
      id,
      name,
      price: priceNumber,
      image,
    })

    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
      duration: 2000,
    })

    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="font-medium text-sm mb-1">{name}</h3>
        <div className="flex items-center justify-center mb-2">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs ml-1">{rating}</span>
        </div>
        <div className="font-bold text-green-500">{price}</div>
        <Button
          size="sm"
          className={`mt-2 ${isAdding ? "bg-green-500" : "bg-gray-900 hover:bg-gray-800"}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? "Added" : <Plus className="w-4 h-4" />}
        </Button>
      </CardContent>
    </Card>
  )
}
