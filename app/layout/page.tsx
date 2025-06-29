import FengshuiClient from "@/components/client/FengshuiClient";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorks";
import UseCaseSection from "./components/UseCaseSection";
import WhyAIFengshuiSection from "./components/WhyAIFengshuiSection";
import FaqSection from "./components/FaqSection";
import LandingNavbar from "./components/LandingNavbar";
import HomeSwitchFeature from "./components/HomeSwitchFeature";
import { generateMetadata } from "@/utils/metadata";
import InlineAd from "@/components/InlineAd";

// app/page.tsx or app/head.tsx
export const metadata = generateMetadata({
  title: 'AI Feng Shui Layout Tool | Upload Floor Plans for Free',
  description:
    'Upload a floor plan and get instant AI Feng Shui analysis. Spot layout issues, improve energy flow, and optimize your space easily.',
  canonical: 'https://www.aifengshui.app/layout',
})

export default function Layout() {
  return (
    <>
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10">
      <LandingNavbar />
      <HeroSection />
      <HomeSwitchFeature />
      <section className="flex flex-col gap-4 scroll-mt-24" id="fengshui-analysis">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Your <span className="text-primary">Feng Shui</span> Report
        </h2>
        <FengshuiClient />
        <InlineAd slotId="5199761258" />
      </section>
      <HowItWorksSection />
      <UseCaseSection />
      <WhyAIFengshuiSection />
      <FaqSection />
    </main>
    </>

  );
}
