import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link href="/dashboard/products/new">
          <Button className="flex items-center gap-2">
            <IconPlus className="h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      <div className="rounded-md border">
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left font-medium p-2">Image</th>
                <th className="text-left font-medium p-2">Name</th>
                <th className="text-left font-medium p-2">Price</th>
                <th className="text-left font-medium p-2">Category</th>
                <th className="text-left font-medium p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-2">
                    <div className="h-12 w-12 overflow-hidden rounded-md">
                      <img
                        src={product.images[0] || "https://placehold.co/100"}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">${product.price.toFixed(2)}</td>
                  <td className="p-2">{product.tag}</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <Link href={`/dashboard/products/${product.id}`}>
                        <Button variant="outline" size="sm">
                          <IconEdit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <form action={`/api/products/${product.id}/delete`} method="POST">
                        <Button variant="destructive" size="sm" type="submit">
                          <IconTrash className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
