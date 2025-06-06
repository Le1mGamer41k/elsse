"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, Plus } from "lucide-react"
import Image from "next/image"
import { DishCard } from "@/components/dish-card"
import { Toaster } from "@/components/ui/toaster"
import { useCart } from "@/context/cart-context"

export default function RestaurantPage() {
  const popularDishes = [
    {
      id: "dish1",
      name: "Chicken Hell",
      price: "$12",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=120&h=120&fit=crop&crop=center",
    },
    {
      id: "dish2",
      name: "Beef Dish",
      price: "$15",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=120&h=120&fit=crop&crop=center",
    },
    {
      id: "dish3",
      name: "Sea Dish",
      price: "$18",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=120&fit=crop&crop=center",
    },
    {
      id: "dish4",
      name: "Chicken Hell",
      price: "$12",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=120&h=120&fit=crop&crop=center",
    },
    {
      id: "dish5",
      name: "Beef Dish",
      price: "$15",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=120&h=120&fit=crop&crop=center",
    },
  ]

  const chickenVegetables = [
    {
      id: "dish6",
      name: "Chicken Hell",
      price: "$12",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=120&h=120&fit=crop&crop=center",
    },
    {
      id: "dish7",
      name: "Beef Dish",
      price: "$19",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=120&h=120&fit=crop&crop=center",
    },
  ]

  const faqs = [
    "How long does delivery take?",
    "How Does It Work ?",
    "How does your food delivery service work?",
    "What payment options do you accept?",
    "Do you offer discounts or promotions?",
  ]

  const { addToCart } = useCart()

  const handleAddToCart = (dish) => {
    const priceNumber = Number.parseFloat(dish.price.replace("$", ""))

    addToCart({
      id: dish.id,
      name: dish.name,
      price: priceNumber,
      image: dish.image,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Restaurant Header */}
        <div className="mb-8">
          <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden mb-6">
            <Image
              src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=256&fit=crop&crop=center"
              alt="The Chicken King"
              width={800}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-500">Featured</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">The Chicken King</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span>4.8 (2.1k reviews)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>25-30 min</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>2.5 km away</span>
                </div>
              </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-600">Add to Favorites</Button>
          </div>
        </div>

        {/* Popular Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold mr-2">Popular</h2>
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🔥</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {popularDishes.map((dish) => (
              <DishCard
                key={dish.id}
                id={dish.id}
                name={dish.name}
                price={dish.price}
                rating={dish.rating}
                image={dish.image}
              />
            ))}
          </div>
        </section>

        {/* Chicken Vegetables Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Chicken Vegetables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chickenVegetables.map((dish) => (
              <Card key={dish.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{dish.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{dish.rating}</span>
                    </div>
                    <div className="font-bold text-green-500 text-lg">{dish.price}</div>
                  </div>
                  <Button className="bg-gray-900 hover:bg-gray-800" onClick={() => handleAddToCart(dish)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center justify-between">
                  <span>{faq}</span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">+</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
