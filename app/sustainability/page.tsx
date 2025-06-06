"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Truck, Users, Heart, TreePine, Package, Utensils } from "lucide-react"

export default function SustainabilityPage() {
  const ecoInitiatives = [
    {
      icon: Package,
      title: "100% Biodegradable Packaging",
      description:
        "All our food containers, bags, and utensils are made from compostable materials that break down naturally within 90 days.",
      impact: "Reduced 2.5 tons of plastic waste this year",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Truck,
      title: "Carbon-Neutral Delivery",
      description:
        "Our delivery fleet uses electric bikes and vehicles, offsetting any remaining emissions through verified carbon credits.",
      impact: "Zero net carbon emissions since 2023",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Utensils,
      title: "Local Restaurant Partners",
      description:
        "We prioritize partnerships with local restaurants within 5km radius to minimize transportation and support community businesses.",
      impact: "85% of orders from local partners",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Recycle,
      title: "Food Waste Reduction",
      description:
        "Smart inventory management and surplus food donation programs help restaurants minimize waste while feeding those in need.",
      impact: "Donated 1,200 meals to local shelters",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const stats = [
    { number: "2.5T", label: "Plastic Waste Prevented", icon: Recycle },
    { number: "1,200", label: "Meals Donated", icon: Heart },
    { number: "85%", label: "Local Partners", icon: Users },
    { number: "100%", label: "Carbon Neutral", icon: Leaf },
  ]

  const certifications = [
    {
      name: "Green Business Certified",
      description: "Certified by the Green Business Program for environmental leadership",
      year: "2023",
    },
    {
      name: "B Corp Pending",
      description: "Currently undergoing B Corporation certification process",
      year: "2024",
    },
    {
      name: "Carbon Neutral Verified",
      description: "Third-party verified carbon neutral operations",
      year: "2023",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <Badge className="bg-green-500 text-white px-4 py-2 text-lg">Eco-Friendly Delivery</Badge>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Delivering Food,
              <br />
              <span className="text-green-600">Protecting Planet</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              At ELSSE, we believe great food shouldn't cost the Earth. Our commitment to sustainability drives every
              decision we make, from packaging to partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 px-8 py-3 text-lg">Join Our Green Mission</Button>
              <Button variant="outline" className="px-8 py-3 text-lg border-green-500 text-green-600">
                Download Impact Report
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eco Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Green Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every order you place contributes to a more sustainable future. Here's how we're making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecoInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${initiative.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                        <p className="text-gray-600 mb-4">{initiative.description}</p>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {initiative.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Measuring Our
                <br />
                <span className="text-green-600">Environmental Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transparency is key to accountability. We track and report our environmental metrics monthly, always
                striving to do better.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <TreePine className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Carbon Footprint Tracking</h4>
                    <p className="text-gray-600">Real-time monitoring of all delivery emissions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Packaging Lifecycle Analysis</h4>
                    <p className="text-gray-600">From production to decomposition tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Recycle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Waste Reduction Metrics</h4>
                    <p className="text-gray-600">Measuring food waste prevention and recycling rates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">This Month's Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>CO₂ Emissions Saved</span>
                    <span className="font-bold">1.2 tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Plastic Packaging Avoided</span>
                    <span className="font-bold">450 kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Local Businesses Supported</span>
                    <span className="font-bold">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Meals Rescued from Waste</span>
                    <span className="font-bold">89</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-green-500 hover:bg-gray-100">View Full Report</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognized for Excellence</h2>
            <p className="text-xl text-gray-600">
              Our commitment to sustainability has been recognized by leading environmental organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <Badge className="bg-green-500">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Green Food Revolution</h2>
          <p className="text-xl text-green-100 mb-8">
            Every order you place helps build a more sustainable food delivery ecosystem. Together, we can make a
            difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 text-lg">
              Order Sustainably Today
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-500 px-8 py-3 text-lg"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
