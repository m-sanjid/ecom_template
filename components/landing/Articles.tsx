import React from 'react'
import Image from 'next/image'
import { Badge } from '../ui/badge' 

const Articles = () => {
  return (
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
  )
}

export default Articles