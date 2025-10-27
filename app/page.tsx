
import Hero from "@/components/landing/Hero"
import Categories from "@/components/landing/Categories"
import ExperienceSection from "@/components/landing/ExperienceSection"
import BestSellersSection from "@/components/landing/BestSellersSection"
import FeaturedProducts from "@/components/landing/FeaturedProducts"
import Benifits from "@/components/landing/Benifits"
import Newsletter from "@/components/landing/Newsletter"
import Articles from "@/components/landing/Articles"
import PremiumDesignSection from "@/components/landing/PremiumDesignSection"
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <Categories />
      <ExperienceSection />
      <BestSellersSection />
      <PremiumDesignSection />
      <FeaturedProducts />  
      <Benifits />
      <Newsletter />
      <Articles />
    </div>
  )
}

