import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorks";
import UseCaseSection from "@/components/landing/UseCaseSection";
import WhyAIFengshuiSection from "@/components/landing/WhyAIFengshuiSection";
import FaqSection from "@/components/landing/FaqSection";
import LandingNavbar from "@/components/landing/LandingNavbar";

import { generateMetadata } from "@/utils/metadata";
import PartnerSection from "@/components/landing/PartnerSection";
import HomeFengshuiSection from "@/components/landing/HomeFengshui";
import BedroomFengshui from "@/components/landing/BedroomFengshui";
import RoomPlanner from "@/components/landing/RoomPlanner";

// app/page.tsx or app/head.tsx
export const metadata = generateMetadata({
  title: 'AI Feng Shui Tools for Home & Bedroom | aifengshui.app',
  description:
    'Get instant Feng Shui analysis with AI. Upload floor plans or draw layouts to receive expert-level advice for your home and bedroom.',
  canonical: 'https://www.aifengshui.app/',
})

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10">
      <LandingNavbar />
      <HeroSection />
      <HomeFengshuiSection />
      <BedroomFengshui />
      <RoomPlanner />
      <HowItWorksSection />
      <UseCaseSection />
      <WhyAIFengshuiSection />
      <FaqSection />
      <PartnerSection />
    </main>
  );
}
