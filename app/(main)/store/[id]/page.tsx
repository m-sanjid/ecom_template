"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/app/context/cart-context"
import { motion, useTransform, useScroll } from "framer-motion"
import { StoreProduct } from "@/lib/constants"
import Breadcrumb from "@/components/store/Breadcrumb"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { dispatch } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: StoreProduct.id,
        name: StoreProduct.name,
        price: StoreProduct.price,
        image: StoreProduct.images[0],
        quantity: quantity,
      },
    })

    toast({
      title: "Added to cart",
      description: `${StoreProduct.name} has been added to your cart.`,
    })
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % StoreProduct.images.length)
  }

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + StoreProduct.images.length) % StoreProduct.images.length)
  }

  // Use global scrolling instead of containerRef
  const { scrollYProgress } = useScroll()
  const leftScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) // Adjust based on content length

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb />

      <div className="flex gap-x-12">
        {/* Left: Animated Scrolling Image Gallery */}
        <motion.div
          style={{ y: leftScrollY }}
          className="w-1/2 space-y-6 pr-4"
        >
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTitle className="hidden">Image Preview</DialogTitle>
            <DialogTrigger asChild>
              <div>
                {/* Main Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={StoreProduct.mainImage}
                    alt={StoreProduct.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {StoreProduct.images.map((image, index) => (
                    <button
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden"
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image}
                        alt={`${StoreProduct.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </DialogTrigger>
          </Dialog>
        </motion.div>

        {/* Right: Fixed Product Info Until Content Finishes */}
        <div className="w-1/2 sticky top-0 h-fit self-start space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{StoreProduct.name}</h1>
            <p className="text-2xl font-semibold mb-6">${StoreProduct.price} USD</p>
            <p className="text-muted-foreground mb-6">{StoreProduct.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <Label>Quantity</Label>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center"
              />
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
          </div>

          {/* Buy Button */}
          <Button size="lg" className="w-full" onClick={handleAddToCart}>
            Buy Now
          </Button>

          {/* Features Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Features</h2>
            <ul className="space-y-2">
              {StoreProduct.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Accepted payment methods</p>
            <div className="flex items-center gap-2">
              <Image src="/path/to/paypal.png" alt="PayPal" width={40} height={40} />
              <Image src="/path/to/stripe.png" alt="Stripe" width={40} height={40} />
              <Image src="/path/to/mastercard.png" alt="Mastercard" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">What customers are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {StoreProduct.reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg bg-muted/50"
            >
              <p className="text-muted-foreground mb-6">{review.comment}</p>
              <p className="font-medium">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Related Products</h2>
          <Link href="/store" className="text-sm hover:text-primary">
            Browse all products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {StoreProduct.relatedProducts.map((item) => (
            <Link key={item.id} href={`/store/${item.id}`}>
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{item.category}</p>
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <p className="font-semibold">${item.price} USD</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
