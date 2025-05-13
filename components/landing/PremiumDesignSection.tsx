import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const PremiumDesignSection = () => {
  return (
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
  )
}

export default PremiumDesignSection