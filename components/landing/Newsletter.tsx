import React from 'react'
import { Button } from '../ui/button'

const Newsletter = () => {
  return (
    <section className="container mx-auto px-4 py-16">
    <div className="text-center max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our email newsletter and get 5% off</h2>
      <div className="flex gap-2 mt-6">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <Button>Subscribe</Button>
      </div>
    </div>
  </section>
  )
}

export default Newsletter