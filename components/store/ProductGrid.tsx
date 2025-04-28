import { Products } from '@/lib/constants';
import { ProductCard } from './ProductCard';
import Link from 'next/link';



export const ProductGrid = () => (
  <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {Products.map((product, idx) => (
        //TODO: change the link after updatings products
      <Link key={idx} href={`/store/${product.id}`}>
      <ProductCard title={product.name} description={product.description} price={product.price} image={product.image} tag={product.tag} />
      </Link>
    ))}
  </div>
);
