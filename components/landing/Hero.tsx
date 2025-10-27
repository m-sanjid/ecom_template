'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

const Hero = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        setIsScrolled(latest > 0);
    });

    return (
        <section className="relative max-w-7xl mx-auto px-4 h-[60rem] flex items-start justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-40 left-0 bg-gray-100 rounded-3xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1662569147750-ef722928ce08?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
                    alt="Phone case"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 -right-6 blur-sm">
                <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                        <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Smart watch"
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                    </div>
                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex w-full -z-10 justify-around mt-8 absolute bottom-0">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: isScrolled ? -400 : 100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                    <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Earbuds"
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: isScrolled ? -500 : 100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Water bottle"
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
            <div className="flex z-40 bg-white/5 backdrop-blur-smr flex-col text-center justify-center items-center mt-40">
                <div className="space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                        High-quality tech gadgets & accessories
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Shop our curated selection of premium products, designed to elevate your everyday experiences
                    </p>
                </div>
                <div className="mt-10 flex gap-4">
                    <Button size={"lg"} className="rounded-full">Browse Products</Button>
                    <Button variant="outline" size={"lg"} className="rounded-full">
                        About Us
                    </Button>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Hero