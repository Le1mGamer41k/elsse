"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, User, CreditCard, Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const [orderStatus, setOrderStatus] = useState("preparing")
  const { items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart()
  const { toast } = useToast()

  const [tipAmount, setTipAmount] = useState(0)
  const [tipRecipient, setTipRecipient] = useState("both")

  const tipOptions = [
    { value: 0, label: "No Tip" },
    { value: 1, label: "$1" },
    { value: 2, label: "$2" },
    { value: 5, label: "$5" },
    { value: 10, label: "$10" },
  ]

  const delivery = 0.0
  const total = subtotal + delivery + tipAmount

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed!",
      description: "Your order has been successfully placed.",
      duration: 3000,
    })

    // In a real app, you would send the order to your backend here
    clearCart()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {items.length === 0 ? (
          <Card className="text-center p-12">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some delicious items to your cart and come back!</p>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href="/menu">Browse Menu</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Delivery Tracking */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Order Tracking</h2>
                  <Badge className="bg-green-500">In Progress</Badge>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-sm text-gray-600">Order Placed</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-green-500 mx-4"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-sm text-gray-600">Preparing</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                        <span className="text-gray-500 text-sm">3</span>
                      </div>
                      <span className="text-sm text-gray-600">On the way</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                        <span className="text-gray-500 text-sm">4</span>
                      </div>
                      <span className="text-sm text-gray-600">Delivered</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Order Details */}
              <div>
                {/* Delivery Info */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Delivery Information</h3>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-3" />
                        <span>David Smith</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                        <span>123 Main Street, City, State 12345</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-3" />
                        <span>Estimated delivery: 25-30 min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cart Items */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Your Order</h3>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 p-0 h-auto"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>${delivery.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tip</span>
                        <span>${tipAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg border-t pt-2">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment */}
              <div>
                {/* Tip Section */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Add a Tip</h3>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Who would you like to tip?</p>
                      <RadioGroup value={tipRecipient} onValueChange={setTipRecipient} className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="courier" id="courier" />
                          <Label htmlFor="courier">Courier</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="chef" id="chef" />
                          <Label htmlFor="chef">Chef</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both">Both</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-5 gap-2 mb-4">
                      {tipOptions.map((option) => (
                        <Button
                          key={option.value}
                          variant={tipAmount === option.value ? "default" : "outline"}
                          className={tipAmount === option.value ? "bg-green-500 hover:bg-green-600" : ""}
                          onClick={() => setTipAmount(option.value)}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>

                    <div className="text-sm text-gray-600">
                      {tipAmount > 0 ? (
                        <p>
                          Thank you for your generosity! Your tip will be appreciated by our{" "}
                          {tipRecipient === "courier" ? "courier" : tipRecipient === "chef" ? "chef" : "team"}.
                        </p>
                      ) : (
                        <p>Tips are optional but greatly appreciated by our team.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Payment Method</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 border rounded-lg">
                        <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
                        <div className="flex-1">
                          <p className="font-medium">Credit Card</p>
                          <p className="text-sm text-gray-600">**** **** **** 1234</p>
                        </div>
                        <Badge variant="outline">Default</Badge>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-green-500 hover:bg-green-600" onClick={handlePlaceOrder}>
                      Place Order
                    </Button>
                  </CardContent>
                </Card>

                {/* Promotion */}
                <Card className="bg-green-500 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">GET 50%</h3>
                        <p className="text-green-100">On your next order</p>
                        <Button className="mt-3 bg-white text-green-500 hover:bg-gray-100">Get Code</Button>
                      </div>
                      <div className="w-20 h-20 bg-white/20 rounded-full">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Food"
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
