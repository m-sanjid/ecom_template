import { motion } from 'motion/react';
import Image from 'next/image';

interface ProductCardProps {
  title?: string;
  description?: string;
  price?: string;
  image?: string;
  tag?: string;
}

export const ProductCard = ({ title, description, price, image, tag }: ProductCardProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileHover={{ y: -10, scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="border-none">
    <div className="h-[20rem] relative rounded-[44px] overflow-hidden ">
        <Image
            src={image || "/placeholder.svg"}
            alt={title || ""}
            fill
            className="h-full w-full"
        />
        <div className='rounded-full absolute top-4 left-4 font-light bg-neutral-50 text-black dark:bg-neutral-800 dark:text-white p-4'>
            <div className=' text-xs uppercase'>{tag}</div>
        </div>
    </div>
    <div className="p-4 space-y-4 my-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <p className="font-medium text-sm">{price}</p>
    </div>
</motion.div>
  );
};
