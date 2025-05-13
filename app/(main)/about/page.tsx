import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { aboutStats } from "@/lib/constants"
import { IconRulerMeasure } from "@tabler/icons-react"


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About our products</h1>
          <p className="text-gray-600 text-lg mb-12">
            We're a passionate team with years of experience, committed to products and accessories that elevate your
            digital lifestyle. With a focus on quality, design, and innovation, we create products that exceed our
            stringent standards.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Product"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Product"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Product"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Product"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {aboutStats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-3xl font-bold mb-2">{stat.name}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                We are committed to designing high quality, human-centered products
              </h2>
              <p className="text-gray-600">
                Our mission is to create tech products that seamlessly integrate into your life, enhancing your digital
                experience while maintaining a focus on quality and usability. We believe that technology should serve
                people, not the other way around.
              </p>
              <Button className="rounded-full">Browse Products</Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=600" alt="Product in use" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <p className="text-gray-600">
            We value innovation and continuously seek to push boundaries, delivering products that inspire and delight.
            We are a pioneering team united with bold vision to make a positive difference in the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Values.map((value) => (
          <Card key={value.id} className="bg-gray-50 border-0">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-600">
                  We cherish thoughtful, imaginative design, creating products that blend aesthetically with
                  functionality.
                </p>
              </div>
            </CardContent>
          </Card>
          ))}
          </div>

      </section>

      {/* Design Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=600" alt="Designer at work" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Care and love for creating high quality design</h2>
            <p className="text-gray-600">
              We believe that exceptional design goes beyond aesthetics. It's about creating products that enhance your
              life, solve problems, and bring joy to everyday experiences. With meticulous attention to detail and a
              passion for innovation, our design team crafts products that are as functional as they are beautiful.
            </p>
            <p className="text-gray-600">
              Every curve, material choice, and feature is carefully considered to bring you products that are a joy to
              use.
            </p>
            <Button className="rounded-full">Browse Products</Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12 text-center">Our partners</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="bg-gray-100 p-6 rounded-lg w-24 h-24 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">Logo</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-24 h-24 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">Logo</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-24 h-24 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">Logo</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-24 h-24 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">Logo</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Product gallery" fill className="object-cover" />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Product gallery" fill className="object-cover" />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Product gallery" fill className="object-cover" />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Product gallery" fill className="object-cover" />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Product gallery" fill className="object-cover" />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Product gallery" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}

const Values = [
  {
      id: 1,
      icon: <IconRulerMeasure/>,
      name: "Design",
      description: "We cherish thoughtful, imaginative design, creating products that blend aesthetically with functionality.",
  },
  {
      id: 2,
      name: "Quality",
      description: "We never compromise on quality, from materials selection to manufacturing processes.",
  },
  {
      id: 3,
      name: "Innovation",
      description: "We foster a culture of innovation, constantly pushing the boundaries of what's possible with technology.",
  }, {
      id: 4,
      name: "Sustainability",
      description: "We are committed to sustainability and minimizing our environmental footprint through responsible practices.",
  },
  {
      id: 5,
      name: "Team Work",
      description: "By fostering an environment of trust and collaboration, we leverage the diverse strengths of our team.",
  }, {
      id: 6,
      name: "Passion",
      description: "We are deeply passionate about what we do, and that passion fuels our commitment to excellence.",
  }
]