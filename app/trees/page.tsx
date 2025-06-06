"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TreePine, MapPin, Award } from "lucide-react"
import Image from "next/image"

export default function TreesPage() {
  const totalTrees = 1247
  const monthlyGoal = 1500
  const progress = (totalTrees / monthlyGoal) * 100

  const recentPlantings = [
    {
      user: "Alex Johnson",
      trees: 3,
      location: "Amazon Rainforest",
      date: "2 hours ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      user: "Sarah Wilson",
      trees: 1,
      location: "Pacific Northwest",
      date: "5 hours ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      user: "Mike Chen",
      trees: 2,
      location: "European Forest",
      date: "1 day ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      user: "Emma Davis",
      trees: 1,
      location: "African Savanna",
      date: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
  ]

  const topPlanters = [
    { name: "Alex Johnson", trees: 47, rank: 1 },
    { name: "Sarah Wilson", trees: 38, rank: 2 },
    { name: "Mike Chen", trees: 32, rank: 3 },
    { name: "Emma Davis", trees: 28, rank: 4 },
    { name: "You", trees: 12, rank: 5 },
  ]

  const forestProjects = [
    {
      name: "Amazon Restoration",
      location: "Brazil",
      treesPlanted: 456,
      goal: 1000,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop&crop=center",
    },
    {
      name: "Urban Green Initiative",
      location: "Ukraine",
      treesPlanted: 234,
      goal: 500,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop&crop=center",
    },
    {
      name: "Coastal Protection",
      location: "Philippines",
      treesPlanted: 557,
      goal: 800,
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=200&fit=crop&crop=center",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                🌳 ELSSE Forest
                <br />
                <span className="text-green-200">Community Impact</span>
              </h1>
              <p className="text-green-100 text-lg mb-6">
                Every order you place helps us plant trees around the world. Together, we're creating a greener future,
                one meal at a time.
              </p>

              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Monthly Goal Progress</span>
                  <span className="text-sm">
                    {totalTrees}/{monthlyGoal} trees
                  </span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TreePine className="w-16 h-16 text-green-700" />
              </div>
              <div className="text-4xl font-bold mb-2">{totalTrees.toLocaleString()}</div>
              <div className="text-green-200">Trees Planted This Month</div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Forest Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6">🌍 Active Forest Projects</h2>
              <div className="grid gap-6">
                {forestProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="aspect-video md:aspect-square">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>
                              {project.treesPlanted}/{project.goal} trees
                            </span>
                          </div>
                          <Progress value={(project.treesPlanted / project.goal) * 100} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium text-green-600">Impact: </span>
                            <span>{project.treesPlanted} trees planted</span>
                          </div>
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">
                            Support Project
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <h2 className="text-2xl font-bold mb-6">🌱 Recent Tree Plantings</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentPlantings.map((planting, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                        <Image
                          src={planting.avatar || "/placeholder.svg"}
                          alt={planting.user}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{planting.user}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <TreePine className="w-4 h-4 mr-1 text-green-600" />
                            <span>
                              {planting.trees} trees in {planting.location}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{planting.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Impact */}
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold text-lg">Your Impact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-100">Trees Planted</span>
                    <span className="font-semibold">12 🌳</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-100">CO₂ Absorbed</span>
                    <span className="font-semibold">240 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-100">Orders Made</span>
                    <span className="font-semibold">47</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-white text-green-600 hover:bg-gray-100">Plant More Trees</Button>
              </CardContent>
            </Card>

            {/* Top Planters Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TreePine className="w-5 h-5 text-green-500 mr-2" />
                  Top Tree Planters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topPlanters.map((planter) => (
                    <div
                      key={planter.rank}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        planter.name === "You" ? "bg-green-50 border border-green-200" : ""
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          planter.rank === 1
                            ? "bg-yellow-400 text-yellow-900"
                            : planter.rank === 2
                              ? "bg-gray-300 text-gray-700"
                              : planter.rank === 3
                                ? "bg-orange-400 text-orange-900"
                                : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {planter.rank}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{planter.name}</p>
                        <p className="text-xs text-gray-600">{planter.trees} trees</p>
                      </div>
                      {planter.rank <= 3 && <TreePine className="w-4 h-4 text-green-500" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Challenge */}
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
              <CardContent className="p-6 text-center">
                <TreePine className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Monthly Challenge</h3>
                <p className="text-sm mb-4 text-yellow-100">
                  Order 10 times this month and we'll plant an extra tree in your name!
                </p>
                <div className="text-2xl font-bold mb-2">7/10</div>
                <Progress value={70} className="h-2 mb-4" />
                <Button className="bg-white text-orange-600 hover:bg-gray-100">View Progress</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
