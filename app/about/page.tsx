import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
          <div>
            <h3 className="text-3xl font-bold mb-2">2010</h3>
            <p className="text-gray-600 text-sm">Year Founded</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">+50</h3>
            <p className="text-gray-600 text-sm">Collaborators</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">70K</h3>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">+250</h3>
            <p className="text-gray-600 text-sm">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">+25</h3>
            <p className="text-gray-600 text-sm">Team Members</p>
          </div>
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
          <Card className="bg-gray-50 border-0">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-600">
                  We cherish thoughtful, imaginative design, creating products that blend aesthetically with
                  functionality.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-0">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality, from materials selection to manufacturing processes.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-0">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 11.08V8L14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V16.28"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 15L12 18L15 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We foster a culture of innovation, constantly pushing the boundaries of what's possible with
                  technology.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-0">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 9H9.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 9H15.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to sustainability and minimizing our environmental footprint through responsible
                  practices.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-0">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Team Work</h3>
                <p className="text-gray-600">
                  By fostering an environment of trust and collaboration, we leverage the diverse strengths of our team.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-0">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-gray-600">
                  We are deeply passionate about what we do, and that passion fuels our commitment to excellence.
                </p>
              </div>
            </CardContent>
          </Card>
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

