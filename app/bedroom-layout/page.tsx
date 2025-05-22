// app/bedroom-layout/page.tsx
import BedroomFaqSection from "./components/BedroomFaqSection";
import BedroomHeroSection from "./components/BedroomHeroSection";
import BedroomHowItWorksSection from "./components/BedroomHowItWorks";
import BedroomNavbar from "./components/BedroomNavbar";
import BedroomLayoutClient from "./components/BedroomLayoutClient";
import BedroomUseCaseSection from "./components/BedroomUseCaseSection";
import SwitchFeature from "./components/SwitchFeature";
import WhyBedroomFengshuiSection from "./components/WhyBedroomFengshuiSection";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: 'Bedroom Feng Shui Layout Analyzer | AI Feng Shui Tool',
  description:
    'Get instant Feng Shui analysis for your bedroom layout. Discover ideal bed placement, mirror positioning, and energy flow—powered by AI.',
  keywords: [
    'bedroom feng shui',
    'feng shui bedroom layout',
    'bed placement feng shui',
    'mirror feng shui bedroom',
    'AI feng shui generator',
    'feng shui bed direction',
    'small bedroom feng shui',
  ],
  canonical: 'https://www.aifengshui.app/bedroom-layout',
});

export default function BedroomLayout() {

  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10">
      <BedroomNavbar />
      <BedroomHeroSection />
      <SwitchFeature />
      <section className="flex flex-col gap-4 scroll-mt-24" id="fengshui-analysis">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Your Bedroom <span className="text-primary">Feng Shui</span> Report
        </h2>
        <BedroomLayoutClient />
      </section>
      <BedroomHowItWorksSection />
      <BedroomUseCaseSection />
      <WhyBedroomFengshuiSection />
      <BedroomFaqSection />
    </main>
  );
}