import FengshuiClient from "@/components/client/FengshuiClient";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorks";
import UseCaseSection from "@/components/landing/UseCaseSection";
import WhyAIFengshuiSection from "@/components/landing/WhyAIFengshuiSection";
import FaqSection from "@/components/landing/FaqSection";
import LandingNavbar from "@/components/landing/LandingNavbar";
import HomeSwitchFeature from "@/components/landing/HomeSwitchFeature";
import { generateMetadata } from "@/utils/metadata";
import PartnerSection from "@/components/landing/PartnerSection";

// app/page.tsx or app/head.tsx
export const metadata = generateMetadata({
  title: 'Free AI Feng Shui Generator | aifengshui.app',
  description:
    'Generate personalized Feng Shui analysis for your home with our free AI tool. Upload floor plans and optimize your space for better energy flow.',
  canonical: 'https://www.aifengshui.app/',
})

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10">
      <LandingNavbar />
      <HeroSection />
      <HomeSwitchFeature />
      <section className="flex flex-col gap-4 scroll-mt-24" id="fengshui-analysis">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Your <span className="text-primary">Feng Shui</span> Report
        </h2>
        <FengshuiClient />
      </section>
      <HowItWorksSection />
      <UseCaseSection />
      <WhyAIFengshuiSection />
      <FaqSection />
      <PartnerSection />
    </main>
  );
}
