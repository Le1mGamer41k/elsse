"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calculator, Leaf, Car, TreePine, Recycle } from "lucide-react"
import { useState } from "react"

export default function EcoCalculatorPage() {
  const [distance, setDistance] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("")
  const [packaging, setPackaging] = useState("")
  const [results, setResults] = useState(null)

  const calculateFootprint = () => {
    const dist = Number.parseFloat(distance) || 0
    let emissions = 0
    let savings = 0

    // Calculate emissions based on delivery method
    switch (deliveryMethod) {
      case "bike":
        emissions = 0 // Electric bikes are carbon neutral
        savings = dist * 0.2 // Savings compared to car
        break
      case "electric":
        emissions = dist * 0.05 // Very low emissions
        savings = dist * 0.15
        break
      case "car":
        emissions = dist * 0.2 // Standard car emissions
        savings = 0
        break
      default:
        emissions = 0
    }

    // Add packaging impact
    let packagingImpact = 0
    switch (packaging) {
      case "biodegradable":
        packagingImpact = 0.02
        break
      case "recyclable":
        packagingImpact = 0.05
        break
      case "plastic":
        packagingImpact = 0.15
        break
      default:
        packagingImpact = 0
    }

    const totalEmissions = emissions + packagingImpact
    const treesNeeded = Math.ceil(totalEmissions / 0.02) // 1 tree absorbs ~20g CO2 per day

    setResults({
      emissions: totalEmissions.toFixed(3),
      savings: savings.toFixed(3),
      treesNeeded,
      ecoScore: Math.max(0, 100 - totalEmissions * 100).toFixed(0),
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Carbon Footprint Calculator</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate the environmental impact of your food delivery and discover how ELSSE helps you reduce your carbon
            footprint.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="w-5 h-5 text-green-500 mr-2" />
                Calculate Your Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="distance">Delivery Distance (km)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Enter distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="delivery">Delivery Method</Label>
                <Select value={deliveryMethod} onValueChange={setDeliveryMethod}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select delivery method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bike">🚲 Electric Bike (ELSSE Default)</SelectItem>
                    <SelectItem value="electric">🚗 Electric Car</SelectItem>
                    <SelectItem value="car">🚙 Regular Car</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="packaging">Packaging Type</Label>
                <Select value={packaging} onValueChange={setPackaging}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select packaging type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biodegradable">🌱 Biodegradable (ELSSE Standard)</SelectItem>
                    <SelectItem value="recyclable">♻️ Recyclable</SelectItem>
                    <SelectItem value="plastic">🥤 Plastic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateFootprint} className="w-full bg-green-500 hover:bg-green-600">
                Calculate Impact
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TreePine className="w-5 h-5 text-green-500 mr-2" />
                Your Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">{results.ecoScore}%</div>
                    <Badge className="bg-green-500">Eco Score</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{results.emissions}kg</div>
                      <div className="text-sm text-gray-600">CO₂ Emissions</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{results.savings}kg</div>
                      <div className="text-sm text-gray-600">CO₂ Saved</div>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <TreePine className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold">Trees Needed to Offset</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{results.treesNeeded}</div>
                  </div>

                  <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                    <h3 className="font-semibold mb-2">🎉 Great Choice!</h3>
                    <p className="text-sm">
                      By choosing ELSSE's eco-friendly delivery, you're helping protect our planet. Every order makes a
                      difference!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your delivery details to see your environmental impact</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🌱 Eco-Friendly Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Recycle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Choose Local Restaurants</h3>
                <p className="text-sm text-gray-600">
                  Ordering from nearby restaurants reduces delivery distance and supports local businesses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Bundle Your Orders</h3>
                <p className="text-sm text-gray-600">
                  Order for multiple people or meals to reduce the number of delivery trips needed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TreePine className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Offset Your Impact</h3>
                <p className="text-sm text-gray-600">
                  Use our tree planting program to offset your carbon footprint with every order.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
