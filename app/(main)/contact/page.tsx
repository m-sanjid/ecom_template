"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hrs",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-muted-foreground mb-12">Send a message and our team will get back to within 24 hrs</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-muted border-0"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-muted border-0"
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[200px] bg-muted border-0"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-semibold mb-4">LOCATION</h2>
            <p>Greenfields, Citytown,</p>
            <p>London, UK, 52050</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">WORKING HOURS</h2>
            <p>Monday To Friday</p>
            <p>9:00 AM to 8:00 PM</p>
            <p className="text-sm text-muted-foreground mt-2">Our Support Team is available 24Hrs</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
            <p>(414) 687-5892</p>
            <p className="text-muted-foreground">Contact@techwave.com</p>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

