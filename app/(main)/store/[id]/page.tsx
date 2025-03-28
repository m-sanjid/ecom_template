"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/app/context/cart-context"

// This would be replaced with actual product data from your backend
const product = {
  id: 1,
  name: "Wireless Headphones",
  price: 99.99,
  description: "Experience crystal-clear sound with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
  images: [
    "/products/headphones.jpg",
    "/products/headphones-2.jpg",
    "/products/headphones-3.jpg",
  ],
  category: "Audio",
  rating: 4.5,
  reviews: [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      comment: "Great sound quality and comfortable to wear for long periods.",
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      comment: "Good battery life but could be more durable.",
    },
  ],
  specifications: {
    "Battery Life": "30 hours",
    "Noise Cancellation": "Active",
    "Bluetooth Version": "5.0",
    "Weight": "250g",
    "Color": "Black",
  },
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400">★</span>
              <span className="text-muted-foreground">{product.rating}</span>
            </div>
          </div>

          <p className="text-2xl font-semibold">${product.price}</p>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Quantity</Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            <Button className="w-full" onClick={(e) => handleAddToCart(e, product)}>Add to Cart</Button>
          </div>

          {/* Specifications */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <span className="text-sm text-muted-foreground">{key}</span>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Reviews</h2>
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <Card key={review.id} className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">{review.rating}</span>
                    <span className="text-muted-foreground">by {review.author}</span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 