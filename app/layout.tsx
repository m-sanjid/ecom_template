import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech Wave - Your One-Stop Shop for Tech",
  description: "Discover the latest gadgets and tech accessories at Tech Wave.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'


