"use client"

import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/dist/client/link'
import React from 'react'

const containerVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  tap: { scale: 0.95 }
};

const Links = [
  {
    title: "Technology",
    desc: "Cutting-edge devices to enhance your digital lifestyle",
    button: "Explore tag",
    span: "1"
  },
  {
    title: "Gear",
    desc: "Premium accessories designed for everyday use",
    button: "Explore tag",
    span: "2"
  },
  {
    title: "Accessory",
    desc: "Essential add-ons to complete your tech collection",
    button: "Explore tag",
    span:"2"
  }, {

  }
]
const Categories = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Links.map((link, index) => (
            <div key={index} className={`bg-white p-6 rounded-[44px] h-[24rem] flex flex-col justify-between shadow-sm col-span-${link.span}`}>
              <div className='mt-36'>
                <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                <p className="text-gray-600">{link.desc}</p>
              </div>
              <motion.div
                initial="initial"
                animate="animate"
                whileTap="tap"
                transition={{ duration: 0.5 }}
                variants={containerVariants}
                className="overflow-hidden perspective-[800px] inline-block"
              >
                <Link href={`/store?tag=${link.title}`} className="block">
                  <div className="relative h-8 w-full">
                    {/* 3D rotating cube effect with 4 sides */}
                    <motion.div
                      className="w-full h-full absolute preserve-3d"
                      initial={{ rotateX: 0 }}
                      whileHover={{ rotateX: -90 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="absolute w-full h-full flex items-center text-sm font-medium"
                        style={{ transform: "translateZ(16px)", backfaceVisibility: "hidden" }}
                      >
                        Explore tag <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                      <div
                        className="absolute w-full h-full flex items-center text-sm font-medium text-blue-500"
                        style={{ transform: "rotateX(90deg) translateZ(16px)", backfaceVisibility: "hidden" }}
                      >
                        View products <ArrowRight className="h-4 w-4 ml-1" />
                      </div>

                      <div
                        className="absolute w-full h-full flex items-center text-sm font-medium opacity-0"
                        style={{ transform: "rotateX(180deg) translateZ(16px)", backfaceVisibility: "hidden" }}
                      >
                        Explore tag <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                      <div
                        className="absolute w-full h-full flex items-center text-sm font-medium opacity-0"
                        style={{ transform: "rotateX(-90deg) translateZ(16px)", backfaceVisibility: "hidden" }}
                      >
                        Explore tag <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories