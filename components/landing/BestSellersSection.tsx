'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'

const Products = [
    {
        name: "Minimal Watch",
        description: "The minimal watch is a simple and elegant watch that is perfect for everyday wear.",
        price: "$349.99 USD",
        image: "/placeholder.svg?height=300&width=300",
        tag: "Gear"
    },
    {
        name: "Watch Screen Protector",
        description: "The watch screen protector is a simple and elegant watch that is perfect for everyday wear.",
        price: "$49.99 USD",
        image: "/placeholder.svg?height=300&width=300",
        tag: "Gear"
    },
    {
        name: "Headphone 21-Bass",
        description: "The headphone 21-Bass is a simple and elegant headphone that is perfect for everyday wear.",
        price: "$499.99 USD",
        image: "/placeholder.svg?height=300&width=300",
        tag: "Gear"
    },
    {
        name: "Premium Earbuds",
        description: "The premium earbuds are a simple and elegant earbuds that is perfect for everyday wear.",
        price: "$389.99 USD",
        image: "/placeholder.svg?height=300&width=300",
        tag: "Gear"
    },
]

const BestSellersSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Bestsellers</h2>
                <Link href="/store" className="text-sm font-medium">
                    Browse all products →
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {Products.map((product, index) => (
                    <Link href={`/store/${product.name}`} key={index}>
                        <motion.div
                            key={index}
                            className="border-none h-[32rem]"
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ translateZ: "10px", scale: 1.05 }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, translateY: 100 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ shadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.8)", translateZ: "10px" }}
                                className={`h-[20rem] relative bg-gray-100 rounded-[44px] overflow-hidden ${isHovered ? "shadow-[0_10px_20px_rgb(0,0,0,0.2)]" : ""}`}>
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="h-full w-full"
                                />
                                <div className='absolute top-5 left-5 bg-white text-black dark:bg-neutral-700 dark:text-white p-4 rounded-full'>
                                    <div className='uppercase font-extralight text-xs'>
                                        {product.tag}
                                    </div>
                                </div>
                            </motion.div>
                            <div className="py-4 px-px">
                                <h3 className="font-medium text-lg my-4">{product.name}</h3>
                                <p className='text-sm text-muted-foreground'>{product.description}</p>
                                <p className="font-semibold mt-4">{product.price}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default BestSellersSection