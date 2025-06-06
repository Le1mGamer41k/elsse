"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, TrendingUp, Users, DollarSign } from "lucide-react"
import Image from "next/image"

export default function PricingPage() {
  const features = [
    { name: "Core features", basic: true, premium: true },
    { name: "Expert 24/7", basic: true, premium: true },
    { name: "Fast Delivery", basic: true, premium: true },
    { name: "30% Off Food Deals", basic: false, premium: true },
    { name: "Personalized Menu", basic: false, premium: true },
    { name: "Weekend Deals", basic: false, premium: true },
    { name: "Dashboard Access", basic: false, premium: true },
    { name: "Premium Menu Access", basic: false, premium: true },
  ]

  const purchases = [
    { user: "Amanda Doe", amount: "$200.00", date: "Today", avatar: "/placeholder.svg?height=40&width=40" },
    { user: "John Smith", amount: "$45.78", date: "Yesterday", avatar: "/placeholder.svg?height=40&width=40" },
    { user: "Sarah Wilson", amount: "$89.50", date: "2 days ago", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Dashboard Header */}
      <section className="bg-green-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <h1 className="text-2xl font-bold">Our Pricing</h1>
                </div>

                <div className="bg-green-500 text-white p-6 rounded-xl mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">30% ЗНИЖКА</h3>
                      <p className="text-green-100">На перші замовлення</p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Food"
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">1.2K</div>
                    <div className="text-sm text-gray-600">Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">850</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">95%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm">Orders increased by 25%</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-sm">50 new customers this week</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-sm">Revenue up 15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing</h2>
            <p className="text-gray-600">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Basic</CardTitle>
                <p className="text-gray-600 mb-4">For casual food lovers</p>
                <div className="text-4xl font-bold">
                  $0<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.basic ? (
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mr-3" />
                    )}
                    <span className={feature.basic ? "" : "text-gray-400"}>{feature.name}</span>
                  </div>
                ))}
                <Button className="w-full mt-8 bg-green-500 hover:bg-green-600">Get Started</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-green-500 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <p className="text-gray-600 mb-4">For food enthusiasts</p>
                <div className="text-4xl font-bold">
                  $5<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.premium ? (
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mr-3" />
                    )}
                    <span className={feature.premium ? "" : "text-gray-400"}>{feature.name}</span>
                  </div>
                ))}
                <Button className="w-full mt-8 bg-orange-500 hover:bg-orange-600">Upgrade Now</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dashboard Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Control <span className="text-green-500">Purchases</span>
                <br />
                Via Dashboard
              </h2>
              <p className="text-gray-600 mb-8">
                Monitor your spending, track orders, and manage your food delivery preferences all in one convenient
                dashboard.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold">Purchases</h3>
                {purchases.map((purchase, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
                        <Image
                          src={purchase.avatar || "/placeholder.svg"}
                          alt={purchase.user}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{purchase.user}</p>
                        <p className="text-sm text-gray-600">{purchase.date}</p>
                      </div>
                    </div>
                    <div className="font-semibold text-green-500">{purchase.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">This Week's</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Expenses</span>
                      <span className="font-semibold">$200.00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Weekly Budget</span>
                      <span className="font-semibold">$45.78</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              Customer <span className="text-green-500">Say</span>
            </h2>
          </div>
        </section>
      </div>
    </div>
  )
}
