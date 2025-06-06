"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info and Mobile */}
          <div className="relative">
            <div className="bg-green-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-2">✨</span>
                  <span className="text-2xl mr-2">⭐</span>
                </div>
                <h1 className="text-4xl font-bold mb-4">Just Contact</h1>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-0.5 bg-white mr-4"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
                <div className="w-64 h-96 bg-black rounded-3xl p-2">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    {/* Phone Header */}
                    <div className="bg-gray-100 p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Львів, Україна</span>
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full">
                        <Image
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                          alt="User"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                    </div>

                    {/* Discount Banner */}
                    <div className="bg-green-500 text-white p-4 m-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold">50%</div>
                          <div className="text-sm">ЗНИЖКА</div>
                          <div className="text-xs">Перший заказ</div>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🍽️</span>
                        </div>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="px-3 mb-3">
                      <div className="flex space-x-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">Піца</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Азія</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Салати</span>
                      </div>
                    </div>

                    {/* Restaurant Section */}
                    <div className="px-3">
                      <h3 className="font-semibold mb-2">Поряд Ресторани</h3>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <Image
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=120&fit=crop&crop=center"
                          alt="Шашлик"
                          width={200}
                          height={120}
                          className="w-full h-20 object-cover rounded-lg mb-2"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-sm">Шашлик</h4>
                            <div className="flex items-center">
                              <span className="text-yellow-400 text-xs">⭐⭐⭐⭐⭐</span>
                              <span className="text-xs text-gray-600 ml-1">16 км</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-3">
                      <div className="flex justify-around">
                        <div className="w-6 h-6 bg-green-500 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Arrow */}
              <div className="absolute bottom-4 right-4 text-white">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M10 30 L30 10 M30 10 L30 25 M30 10 L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Customer <span className="text-green-500">Support</span>
              </h2>
              <p className="text-gray-600">Have a question or need help? We're here to assist you 24/7.</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="FULL NAME"
                      className="mt-2 border-green-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ENTER YOUR EMAIL"
                      className="mt-2 border-green-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="ENTER THE PROBLEM OR QUERY"
                      rows={6}
                      className="mt-2 border-green-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600 py-3 text-lg">Send Now</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+380 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">support@elsse.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">Львів, Україна</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-600">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Arrow */}
      <div className="fixed bottom-8 right-8">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-green-500">
          <path
            d="M15 45 L45 15 M45 15 L45 35 M45 15 L25 15"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
