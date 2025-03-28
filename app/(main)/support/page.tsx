import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, FileText, MessageCircle, ShieldCheck } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-gray-600 mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search for answers..." className="pl-10 py-6 text-lg rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">FAQs</h3>
              <p className="text-gray-600 mb-4">Find answers to the most common questions.</p>
              <Button variant="outline" className="w-full">
                View FAQs
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">User Guides</h3>
              <p className="text-gray-600 mb-4">Detailed guides to help you get the most out of our products.</p>
              <Button variant="outline" className="w-full">
                View Guides
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Contact Support</h3>
              <p className="text-gray-600 mb-4">Get in touch with our customer support team.</p>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I track my order?</AccordionTrigger>
              <AccordionContent>
                You can track your order by logging into your account and navigating to the "Orders" section.
                Alternatively, you can use the tracking number provided in your shipping confirmation email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy for all our products. Items must be in their original condition and
                packaging. To initiate a return, please contact our customer support team or visit the "Returns" section
                in your account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship to most countries worldwide. Shipping rates and delivery times vary depending on the
                destination. You can view the shipping options available for your location during checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I care for my Tech Wave products?</AccordionTrigger>
              <AccordionContent>
                Each product comes with specific care instructions. Generally, we recommend keeping electronics away
                from water and extreme temperatures. For accessories, gentle cleaning with appropriate materials is
                advised. Detailed care guides are available in the product manuals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Are your products covered by warranty?</AccordionTrigger>
              <AccordionContent>
                Yes, all Tech Wave products come with a standard 1-year limited warranty that covers manufacturing
                defects. Some premium products may have extended warranty options. For warranty claims, please contact
                our support team with your order details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-gray-100 p-4 rounded-full inline-flex mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is available Monday through Friday, 9am to 5pm EST. We're happy to answer any questions
                you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Contact Support</Button>
                <Button variant="outline">View Documentation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

