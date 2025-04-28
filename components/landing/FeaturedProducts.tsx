"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Products } from '@/lib/constants'



const FeaturedProducts = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <Link href="/store" className="text-sm font-medium">
                    Browse all products →
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <Link href={`/store/eDisplay-XE`} className='relative'>
                <div className="w-full h-[20rem] md:h-[48rem] rounded-[44px] overflow-hidden relative bg-gray-100">
                                <Image
                        src="https://framerusercontent.com/images/ZoJyB9IwelbsDayQjUXbKjECY.jpg"
                        alt="Featured product"
                        fill
                        className="object-cover"
                    />
                    <div className='rounded-full absolute top-4 left-4 font-light bg-neutral-50 text-black dark:bg-neutral-800 dark:text-white p-4'>
                        <div className=' text-xs uppercase'>Gear</div>
                    </div>
                </div>
                    <div className='p-4 mt-3 pointer-events-none'>
                        <div className=' text-lg w-fit'>
                        Minimal Watch
                        </div>
                        <div className=' mt-2 w-fit'>
                        $349.99 USD
                        </div>
                    </div>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {Products.map((product, index) => (
                        <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 100 }}
                        whileHover={{ y: -10 ,scale: 1.05}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="border-none">
                            <div className="h-[20rem] relative rounded-[44px] overflow-hidden ">
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="h-full w-full"
                                />
 <div className='rounded-full absolute top-4 left-4 font-light bg-neutral-50 text-black dark:bg-neutral-800 dark:text-white p-4'>
                        <div className=' text-xs uppercase'>{product.tag}</div>
                    </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-2">{product.name}</h3>
                                <p className="font-medium text-sm">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts