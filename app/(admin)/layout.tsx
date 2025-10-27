import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Check if user is authenticated and is an admin
  // if (!session?.user || !session.user.isAdmin) {
  //   redirect("/login?callbackUrl=/dashboard");
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-gray-100/40 dark:bg-gray-800/40">
          <nav className="flex flex-col gap-2 p-4">
            <h2 className="mb-4 text-xl font-bold">Admin Dashboard</h2>
            <a
              href="/dashboard"
              className="flex items-center rounded-md px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Dashboard
            </a>
            <a
              href="/dashboard/products"
              className="flex items-center rounded-md px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Products
            </a>
            <a
              href="/dashboard/orders"
              className="flex items-center rounded-md px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Orders
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
