import React from 'react'
import { Truck, Shield, RotateCcw } from 'lucide-react'
const Benifits = () => {
  return (
<section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Secure Payments</h3>
                <p className="text-sm text-gray-600">100% protected transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">30 Days Free Return</h3>
                <p className="text-sm text-gray-600">Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Benifits