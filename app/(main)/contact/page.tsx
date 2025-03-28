import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions about our products or need assistance? We're here to help. Reach out to our team using any of
            the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
              <a href="mailto:contact@techwave.com" className="text-black font-medium">
                contact@techwave.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+14146875892" className="text-black font-medium">
                (414) 687-5892
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Office</h3>
              <p className="text-gray-600 mb-4">Come say hello at our office HQ.</p>
              <p className="text-black font-medium">123 Tech Street, San Francisco, CA 94107</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                    First name
                  </label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone number
                </label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
              </div>

              <Button className="w-full">Send message</Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our location</h2>
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
              {/* This would be a map in a real implementation */}
              <div className="w-full h-full flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-400" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Tech Wave Headquarters</h3>
                  <p className="text-gray-600">123 Tech Street, San Francisco, CA 94107</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

