import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              High-quality tech gadgets & accessories
            </h1>
            <p className="text-gray-600 text-lg">
              Browse our curated selection of premium tech products and accessories designed to enhance your digital
              lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full">Browse Products</Button>
              <Button variant="outline" className="rounded-full">
                About Us
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Phone case"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Smart watch"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Earbuds"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Water bottle"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Technology</h3>
              <p className="text-gray-600 mb-4">Cutting-edge devices to enhance your digital lifestyle.</p>
              <Link href="/store?category=technology" className="text-sm font-medium flex items-center">
                Explore category <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Gear</h3>
              <p className="text-gray-600 mb-4">Premium accessories designed for everyday use.</p>
              <Link href="/store?category=gear" className="text-sm font-medium flex items-center">
                Explore category <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Accessory</h3>
              <p className="text-gray-600 mb-4">Essential add-ons to complete your tech collection.</p>
              <Link href="/store?category=accessory" className="text-sm font-medium flex items-center">
                Explore category <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-black text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The new Special Experience</h2>
              <p className="text-gray-300 mb-6">
                Discover our latest innovation designed to transform the way you interact with technology.
              </p>
              <Button
                variant="outline"
                className="rounded-full text-white border-white hover:bg-white hover:text-black w-fit"
              >
                Learn More
              </Button>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Special experience product"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Bestsellers</h2>
          <Link href="/store" className="text-sm font-medium">
            Browse all products →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Minimal Watch",
              price: "$349.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Watch Screen Protector",
              price: "$49.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Headphone 21-Bass",
              price: "$499.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Premium Earbuds",
              price: "$389.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-sm">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="font-semibold">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Premium Design Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=600" alt="Premium design" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Premium Design and Quality</h2>
            <p className="text-gray-600">
              At Tech Wave, we believe in creating products that seamlessly blend aesthetics with functionality. Our
              design philosophy centers around minimalism, durability, and user experience.
            </p>
            <p className="text-gray-600">
              Each product undergoes rigorous testing to ensure it meets our high standards of quality and performance.
            </p>
            <Button className="rounded-full">Browse Products</Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/store" className="text-sm font-medium">
            Browse all products →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Minimal Watch",
              price: "$349.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Phone Case",
              price: "$29.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "eWatch SF 4",
              price: "$49.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Sling Bag",
              price: "$149.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Headphone 21-Bass",
              price: "$499.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "eDisplay XE",
              price: "$199.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Premium Earbuds",
              price: "$389.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Watch Screen Protector",
              price: "$49.99 USD",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-sm">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="font-semibold">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Secure Payments</h3>
                <p className="text-sm text-gray-600">100% protected transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">30 Days Free Return</h3>
                <p className="text-sm text-gray-600">Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our email newsletter and get 5% off</h2>
          <div className="flex gap-2 mt-6">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Our articles and news</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Article thumbnail"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Top 10 Must-Have Digital Accessories for Tech Enthusiasts</h3>
            <p className="text-gray-600 mb-4">
              Discover the essential gadgets that will elevate your tech experience to the next level.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded-full">
                Tech
              </Badge>
              <Badge variant="outline" className="rounded-full">
                Gadgets
              </Badge>
            </div>
          </div>
          <div className="group">
            <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Article thumbnail"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Lifestyle: Tech Products to Elevate Your Experience</h3>
            <p className="text-gray-600 mb-4">
              How the right tech accessories can transform your daily routine and boost productivity.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded-full">
                Lifestyle
              </Badge>
              <Badge variant="outline" className="rounded-full">
                Productivity
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

