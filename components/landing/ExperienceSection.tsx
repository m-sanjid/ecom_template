"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ExperienceSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-black text-white rounded-[56px] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 h-[30rem] flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl mb-4">The new Spacial <br/> Experience</h2>
            <p className="text-muted-foreground mb-6">
              Discover our latest innovation designed to transform the way you interact with technology.
            </p>
            <div 
              className="relative w-fit h-14"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* White button (visible by default, disappears on hover) */}
              <motion.button
                initial={{ y: 0, opacity: 1 }}
                animate={{ 
                  y: isHovered ? -10 : 0, 
                  opacity: isHovered ? 0 : 1 
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 rounded-full text-sm px-8 py-6 text-black bg-white w-fit whitespace-nowrap"
              >
                Browse products
              </motion.button>
              
              {/* Black button (hidden by default, appears on hover) */}
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ 
                  y: isHovered ? 0 : 10, 
                  opacity: isHovered ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 rounded-full text-sm px-8 py-6 text-white bg-neutral-800 w-fit whitespace-nowrap"
              >
                Browse products
              </motion.button>
            </div>
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
  )
}

export default ExperienceSection