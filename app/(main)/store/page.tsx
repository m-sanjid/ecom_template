"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "../../context/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

// This would be replaced with actual product data from your backend
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/products/headphones.jpg",
    category: "Audio",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/products/watch.jpg",
    category: "Wearables",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Laptop",
    price: 999.99,
    image: "/products/laptop.jpg",
    category: "Computers",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Smartphone",
    price: 699.99,
    image: "/products/phone.jpg",
    category: "Mobile",
    rating: 4.6,
  },
]

const categories = ["All", "Audio", "Wearables", "Computers", "Mobile"]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [searchQuery, setSearchQuery] = useState("")
  const { dispatch } = useCart()
  const { toast } = useToast()

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesPrice && matchesSearch
  })

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault() // Prevent the Link from triggering
    e.stopPropagation() // Stop event bubbling

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 space-y-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Filters</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Search</Label>
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Price Range</Label>
                <div className="flex items-center gap-2">
                  <span>${priceRange[0]}</span>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={1000}
                    step={10}
                    className="flex-1"
                  />
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/store/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-semibold">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full mt-4"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

