import { StoreProduct } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = () => {
  return (
<div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/store" className="hover:text-primary">Store</Link>
          <span>/</span>
          <Link href="/store/gear" className="hover:text-primary">{StoreProduct.category}</Link>
          <span>/</span>
          <span className="text-foreground">{StoreProduct.name}</span>
        </div>
      </div>
  )
}

export default Breadcrumb