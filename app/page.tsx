import { HeroSection } from "@/components/hero-section"
import { PackagingSection } from "@/components/packaging-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PackagingSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
    </main>
  )
}
