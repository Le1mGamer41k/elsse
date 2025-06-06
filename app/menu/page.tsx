"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, Search, Filter } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { DishCard } from "@/components/dish-card"
import { Toaster } from "@/components/ui/toaster"
import { Badge } from "@/components/ui/badge"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "🍕 Pizza", "🍔 Burgers", "🍜 Asian", "🥗 Salads", "🍰 Desserts", "🌱 Eco-Friendly"]

  const restaurants = [
    {
      name: "The Chicken King",
      rating: 4.8,
      time: "25-30 min",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop&crop=center",
      ecoFriendly: true,
    },
    {
      name: "The Burger King",
      rating: 4.6,
      time: "20-25 min",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center",
      ecoFriendly: false,
    },
    {
      name: "Green Garden Cafe",
      rating: 4.8,
      time: "25-30 min",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop&crop=center",
      ecoFriendly: true,
    },
  ]

  const dishes = [
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

  const faqs = [
    "How long does delivery take?",
    "How Does It Work ?",
    "How does your food delivery service work?",
    "What payment options do you accept?",
    "Do you offer discounts or promotions?",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster />

      {/* Promotion Banner */}
      <section className="bg-green-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-green-500 mb-2">50% OFF</h2>
              <h3 className="text-xl font-semibold mb-1">WEEKEND</h3>
              <p className="text-gray-600">Special weekend discount</p>
            </div>
            <div className="w-32 h-32 bg-gray-200 rounded-full">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Food"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories and Search */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        selectedCategory === category ? "bg-green-500 text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3 className="font-semibold mb-4 mt-8">Sort By</h3>
                <select className="w-full p-2 border rounded-lg">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>

                <h3 className="font-semibold mb-4 mt-8">Price</h3>
                <div className="space-y-2">
                  <input type="range" className="w-full" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>$50</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-green-500 hover:bg-green-600">Apply Filter</Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-3/4">
            {/* Search Bar */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search for restaurants or dishes..." className="pl-10" />
              </div>
              <Button variant="outline" className="px-6">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Top Restaurants */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Our Top Restaurants</h2>
                <Button variant="outline">View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {restaurants.map((restaurant, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gray-200">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{restaurant.name}</h3>
                        {restaurant.ecoFriendly && <Badge className="bg-green-500 text-xs">🌱 Eco</Badge>}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm">{restaurant.rating}</span>
                        </div>
                        <span className="text-sm text-gray-600">{restaurant.time}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Top Dishes */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Our Top Dishes</h2>
                <Button variant="outline">View All</Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {dishes.map((dish) => (
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
            </div>
          </div>
        </div>

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
