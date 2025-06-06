import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, TrendingUp, Users, Shield, Leaf, TreePine } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const restaurants = [
    {
      name: "KFC",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=200&fit=crop&crop=center",
    },
    {
      name: "MACDONALDS",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=200&fit=crop&crop=center",
    },
    {
      name: "Kebab House",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=200&fit=crop&crop=center",
    },
  ]

  const dishes = [
    {
      name: "Chicken Hell",
      price: "$12",
      rating: 4.8,
      image: "/images/hero-food-bowl.jpg",
    },
    {
      name: "Beef Burger",
      price: "$15",
      rating: 4.6,
      image: "/images/delicious-burger.jpg",
    },
    {
      name: "Fresh Salad",
      price: "$18",
      rating: 4.9,
      image: "/images/fresh-salad.jpg",
    },
    {
      name: "Pasta Special",
      price: "$12",
      rating: 4.8,
      image: "/images/pasta-dish.jpg",
    },
    {
      name: "Pizza Slice",
      price: "$15",
      rating: 4.6,
      image: "/images/pizza-slice.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Смакуй страви
                <br />з усього <span className="text-green-500">World</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Замовляй улюблені страви з найкращих ресторанів твого міста. Швидка доставка та найсвіжіші інгредієнти.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-green-500 hover:bg-green-600 px-8 py-3">Замовити</Button>
                <Button variant="outline" className="px-8 py-3">
                  Меню
                </Button>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="Customer"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
                      alt="Customer"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                      alt="Customer"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
                      alt="Customer"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="ml-3 text-sm text-gray-600">⭐ Trustpilot 4.8 з 5 (2.1k)</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-full p-8 relative overflow-hidden">
                <Image
                  src="/images/pizza-slice.jpg"
                  alt="Delicious pizza"
                  width={400}
                  height={400}
                  className="rounded-full object-cover w-full h-full"
                />
                {/* Floating food elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg p-2">
                  <Image
                    src="/images/sushi-platter.jpg"
                    alt="Sushi"
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg p-2">
                  <Image
                    src="/images/dessert-cake.jpg"
                    alt="Dessert"
                    width={64}
                    height={64}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white rounded-full shadow-lg p-1">
                  <Image
                    src="/images/healthy-bowl.jpg"
                    alt="Healthy bowl"
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4M</div>
              <div className="text-green-100">Orders Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="text-green-100">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-4 w-80 mx-auto">
                <div className="bg-white rounded-2xl p-6">
                  <div className="bg-green-500 text-white p-4 rounded-xl mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">50%</div>
                      <div className="text-sm">ЗНИЖКА</div>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/fresh-salad.jpg"
                        alt="Fresh salad"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">Перша Доставка</div>
                    <div className="text-lg font-semibold">Зелений Салат</div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Преміальна Якість
                <br />
                Для Вашого Здоров'я
              </h2>
              <p className="text-gray-600 mb-6">
                Ми співпрацюємо тільки з найкращими ресторанами та кухарями, щоб забезпечити найвищу якість страв та
                швидку доставку.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  <span>Гарантія якості та свіжості</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  <span>Швидка доставка протягом 30 хвилин</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-green-500 mr-3" />
                  <span>Підтримка клієнтів 24/7</span>
                </li>
              </ul>
              <Button className="bg-green-500 hover:bg-green-600">Завантажити Додаток</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-green-500 text-white">100% Eco-Friendly</Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Delivering Food,
                <br />
                <span className="text-green-500">Protecting Planet</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Every order you place contributes to a greener future. We use 100% biodegradable packaging,
                carbon-neutral delivery, and support local restaurants to minimize our environmental impact.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-500">2.5T</div>
                  <div className="text-sm text-gray-600">Plastic Waste Prevented</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-500">100%</div>
                  <div className="text-sm text-gray-600">Carbon Neutral</div>
                </div>
              </div>
              <Link href="/sustainability">
                <Button className="bg-green-500 hover:bg-green-600">Learn About Our Impact</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Your Eco Impact</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>CO₂ Emissions Saved</span>
                    <span className="font-bold">1.2 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plastic Packaging Avoided</span>
                    <span className="font-bold">8 items</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Local Businesses Supported</span>
                    <span className="font-bold">5</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <TreePine className="w-5 h-5 mr-2" />
                    <span className="text-sm">Next order plants a tree! 🌱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Restaurants */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Top <span className="text-green-500">Restaurants</span>
            </h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{restaurant.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Dishes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Top <span className="text-green-500">Dishes</span>
            </h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {dishes.map((dish, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{dish.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs ml-1">{dish.rating}</span>
                  </div>
                  <div className="font-bold text-green-500">{dish.price}</div>
                  <Button size="sm" className="mt-2 bg-gray-900 hover:bg-gray-800">
                    +
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Amazing <span className="text-orange-500">Flavors</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From fresh salads to gourmet burgers, explore our diverse collection of mouth-watering dishes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-food-bowl.jpg"
                  alt="Gourmet Bowl"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Gourmet Bowls</span>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/delicious-burger.jpg"
                  alt="Delicious Burger"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Premium Burgers</span>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/pasta-dish.jpg"
                  alt="Pasta Dish"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Italian Pasta</span>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/sushi-platter.jpg"
                  alt="Sushi Platter"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Fresh Sushi</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg">Explore Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L14.89 11.53z" />
                  </svg>
                </div>
                <span className="font-bold text-xl">ELSSE</span>
              </div>
              <p className="text-gray-400">Найкращий сервіс доставки їжі у вашому місті</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ELSSE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
