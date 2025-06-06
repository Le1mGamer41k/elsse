"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Gift, Target, Zap, Crown, Medal, Leaf, TreePine } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function BlogPage() {
  const [userLevel, setUserLevel] = useState(5)
  const [userXP, setUserXP] = useState(750)
  const [nextLevelXP, setNextLevelXP] = useState(1000)

  const achievements = [
    {
      id: 1,
      title: "First Order",
      description: "Complete your first food order",
      icon: Trophy,
      completed: true,
      xp: 50,
    },
    {
      id: 2,
      title: "Food Explorer",
      description: "Try 10 different restaurants",
      icon: Star,
      completed: true,
      xp: 100,
    },
    {
      id: 3,
      title: "Weekend Warrior",
      description: "Order 5 times on weekends",
      icon: Zap,
      completed: false,
      xp: 75,
      progress: 3,
    },
    {
      id: 4,
      title: "Big Spender",
      description: "Spend $500 total",
      icon: Crown,
      completed: false,
      xp: 200,
      progress: 350,
    },
    {
      id: 5,
      title: "Eco Warrior",
      description: "Order 20 times with eco-friendly packaging",
      icon: Leaf,
      completed: false,
      xp: 150,
      progress: 12,
    },
  ]

  const challenges = [
    {
      id: 1,
      title: "Weekly Challenge",
      description: "Order from 3 different cuisines this week",
      reward: "50 XP + 10% discount",
      timeLeft: "3 days",
      progress: 2,
      total: 3,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Healthy Choice",
      description: "Order 5 salads this month",
      reward: "100 XP + Free delivery",
      timeLeft: "12 days",
      progress: 1,
      total: 5,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Green Champion",
      description: "Choose eco-friendly packaging 10 times",
      reward: "200 XP + Plant a tree in your name",
      timeLeft: "15 days",
      progress: 6,
      total: 10,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop&crop=center",
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "🌱 How ELSSE is Leading the Green Food Revolution",
      excerpt:
        "Discover how our eco-friendly initiatives are changing the food delivery landscape, one order at a time.",
      author: "ELSSE Team",
      date: "2 days ago",
      readTime: "5 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 2,
      title: "🍃 The Impact of Biodegradable Packaging",
      excerpt: "Learn about our switch to 100% compostable packaging and its environmental benefits.",
      author: "Green Team",
      date: "1 week ago",
      readTime: "3 min read",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "🚴‍♂️ Carbon-Neutral Delivery: Our Journey",
      excerpt: "From electric bikes to carbon offsets - how we achieved zero net emissions.",
      author: "Delivery Team",
      date: "2 weeks ago",
      readTime: "4 min read",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop&crop=center",
    },
  ]

  const leaderboard = [
    {
      rank: 1,
      name: "Alex Johnson",
      xp: 2450,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      rank: 2,
      name: "Sarah Wilson",
      xp: 2380,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      rank: 3,
      name: "Mike Chen",
      xp: 2200,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      rank: 4,
      name: "Emma Davis",
      xp: 1950,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      rank: 5,
      name: "You",
      xp: userXP,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
    },
  ]

  const rewards = [
    { id: 1, title: "Free Delivery", cost: 100, description: "Free delivery on your next order", icon: Gift },
    { id: 2, title: "10% Discount", cost: 150, description: "10% off any order", icon: Target },
    { id: 3, title: "Premium Badge", cost: 300, description: "Show off your foodie status", icon: Medal },
    { id: 4, title: "Plant a Tree", cost: 500, description: "We'll plant a tree in your name", icon: TreePine },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Level Up Your <span className="text-yellow-300">Food Game!</span>
              </h1>
              <p className="text-green-100 text-lg mb-6">
                Complete challenges, earn XP, unlock rewards, and become the ultimate foodie in our community!
              </p>

              {/* User Level Progress */}
              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Level {userLevel}</span>
                  <span className="text-sm">
                    {userXP}/{nextLevelXP} XP
                  </span>
                </div>
                <Progress value={(userXP / nextLevelXP) * 100} className="h-3" />
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="w-16 h-16 text-yellow-600" />
              </div>
              <Badge className="bg-yellow-400 text-yellow-900 text-lg px-4 py-2">Food Explorer Level {userLevel}</Badge>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Blog Posts Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">📝 Latest Blog Posts</h2>
                <Link href="/sustainability">
                  <Button variant="outline" className="text-green-600 border-green-600">
                    View Sustainability Page
                  </Button>
                </Link>
              </div>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className={`overflow-hidden hover:shadow-lg transition-shadow ${post.featured ? "border-green-200 bg-green-50" : ""}`}
                  >
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="aspect-video md:aspect-square">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            {post.featured && <Badge className="bg-green-500 mb-2">Featured</Badge>}
                            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {post.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Active Challenges */}
            <section>
              <h2 className="text-2xl font-bold mb-6">🎯 Active Challenges</h2>
              <div className="grid gap-6">
                {challenges.map((challenge) => (
                  <Card key={challenge.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="aspect-video md:aspect-square">
                        <Image
                          src={challenge.image || "/placeholder.svg"}
                          alt={challenge.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{challenge.title}</h3>
                            <p className="text-gray-600 text-sm">{challenge.description}</p>
                          </div>
                          <Badge variant="outline">{challenge.timeLeft}</Badge>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>
                              {challenge.progress}/{challenge.total}
                            </span>
                          </div>
                          <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <span className="font-medium text-green-600">Reward: </span>
                            <span>{challenge.reward}</span>
                          </div>
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-bold mb-6">🏆 Achievements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon
                  return (
                    <Card
                      key={achievement.id}
                      className={`p-4 ${achievement.completed ? "bg-green-50 border-green-200" : "bg-gray-50"}`}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              achievement.completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                            }`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                            <div className="flex items-center mt-1">
                              <span className="text-xs text-green-600 font-medium">+{achievement.xp} XP</span>
                              {achievement.completed && <Badge className="ml-2 bg-green-500 text-xs">Completed</Badge>}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Rewards Store */}
            <section>
              <h2 className="text-2xl font-bold mb-6">🎁 Rewards Store</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {rewards.map((reward) => {
                  const IconComponent = reward.icon
                  return (
                    <Card key={reward.id} className="p-4 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{reward.title}</h3>
                            <p className="text-sm text-gray-600">{reward.description}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-sm font-medium text-green-600">{reward.cost} XP</span>
                              <Button
                                size="sm"
                                disabled={userXP < reward.cost}
                                className="bg-yellow-500 hover:bg-yellow-600"
                              >
                                {userXP >= reward.cost ? "Redeem" : "Need More XP"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Eco Impact Widget */}
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold text-lg">Your Eco Impact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-100">CO₂ Saved</span>
                    <span className="font-semibold">2.3 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-100">Plastic Avoided</span>
                    <span className="font-semibold">15 items</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-100">Trees Planted</span>
                    <span className="font-semibold">1 🌱</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-white text-green-600 hover:bg-gray-100">View Full Impact</Button>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                  Leaderboard
                </h3>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        user.name === "You" ? "bg-green-50 border border-green-200" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            user.rank === 1
                              ? "bg-yellow-400 text-yellow-900"
                              : user.rank === 2
                                ? "bg-gray-300 text-gray-700"
                                : user.rank === 3
                                  ? "bg-orange-400 text-orange-900"
                                  : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {user.rank}
                        </span>
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.xp} XP</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Your Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Orders</span>
                    <span className="font-semibold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eco Orders</span>
                    <span className="font-semibold text-green-600">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Favorite Cuisine</span>
                    <span className="font-semibold">Italian</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Money Saved</span>
                    <span className="font-semibold text-green-600">$127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Streak Days</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Bonus */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Daily Bonus</h3>
                <p className="text-sm mb-4 text-purple-100">Come back tomorrow for your daily XP bonus!</p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">Claim Tomorrow</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
