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
import { FilterBar } from "@/components/store/FilterBar"
import { SearchBar } from "@/components/store/SearchBar"
import { ProductGrid } from "@/components/store/ProductGrid"

// This would be replaced with actual product data from your backend
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/products/headphones.jpg",
    tag: "Audio",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/products/watch.jpg",
    tag: "Wearables",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Laptop",
    price: 999.99,
    image: "/products/laptop.jpg",
    tag: "Computers",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Smartphone",
    price: 699.99,
    image: "/products/phone.jpg",
    tag: "Mobile",
    rating: 4.6,
  },
]

const categories = ["All", "Audio", "Wearables", "Computers", "Mobile"]

export default function StorePage() {
  const [selectedtag, setSelectedtag] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [searchQuery, setSearchQuery] = useState("")
  const { dispatch } = useCart()
  const { toast } = useToast()

  const filteredProducts = products.filter((product) => {
    const matchestag = selectedtag === "All" || product.tag === selectedtag
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchestag && matchesPrice && matchesSearch
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

    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Store</h1>
      <div className="flex justify-between items-center mb-6">
        <FilterBar />
        <SearchBar />
      </div>
        <ProductGrid />
    </main>
  )
}

