import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconPackage, IconShoppingCart, IconUser, IconCreditCard } from "@tabler/icons-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  // Fetch dashboard statistics
  const productCount = await prisma.product.count();
  const orderCount = await prisma.order.count();
  const userCount = await prisma.user.count();
  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { user: true },
  });

  // Calculate total revenue
  const totalRevenue = await prisma.order.aggregate({
    where: { paymentStatus: "COMPLETED" },
    _sum: { total: true },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <IconPackage className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productCount}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <IconShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderCount}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <IconUser className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userCount}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IconCreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalRevenue._sum.total?.toFixed(2) || "0.00"}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-2xl font-bold mt-8">Recent Orders</h2>
      <div className="rounded-md border">
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left font-medium p-2">Order ID</th>
                <th className="text-left font-medium p-2">Customer</th>
                <th className="text-left font-medium p-2">Status</th>
                <th className="text-left font-medium p-2">Total</th>
                <th className="text-left font-medium p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-2">{order.id.substring(0, 8)}...</td>
                  <td className="p-2">{order.user.name || order.user.email}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "DELIVERED" 
                        ? "bg-green-100 text-green-800" 
                        : order.status === "CANCELLED" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-2">${order.total.toFixed(2)}</td>
                  <td className="p-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {recentOrders.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">
                    No orders found
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
