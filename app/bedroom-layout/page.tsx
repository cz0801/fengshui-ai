// app/bedroom-layout/page.tsx
import BedroomFaqSection from "./components/BedroomFaqSection";
import BedroomHeroSection from "./components/BedroomHeroSection";
import BedroomHowItWorksSection from "./components/BedroomHowItWorks";
import BedroomNavbar from "./components/BedroomNavbar";
import BedroomLayoutClient from "./components/BedroomLayoutClient";
import BedroomUseCaseSection from "./components/BedroomUseCaseSection";
import SwitchFeature from "./components/SwitchFeature";
import WhyBedroomFengshuiSection from "./components/WhyBedroomFengshuiSection";

export const metadata = {
  title: 'Bedroom Feng Shui Layout Analyzer | AI Feng Shui Tool',
  description:
    'Upload your bedroom layout to get instant Feng Shui analysis powered by AI. Discover ideal bed placement, mirror positioning, energy flow, and more based on traditional Feng Shui rules.',
  keywords: [
    'bedroom feng shui',
    'feng shui bedroom layout',
    'bed placement feng shui',
    'mirror feng shui bedroom',
    'AI feng shui bedroom',
    'bedroom layout analyzer',
    'feng shui for sleep',
    'feng shui bed direction',
    'small bedroom feng shui',
    'free bedroom feng shui tool',
    'AI feng shui generator',
  ],
  alternates: {
    canonical: 'https://www.aifengshui.app/bedroom-layout',
  },
  openGraph: {
    title: 'Bedroom Feng Shui Layout Analyzer | AI Feng Shui Tool',
    description:
      'Use AI to analyze your bedroom layout and receive personalized Feng Shui tips. Improve sleep quality, energy flow, and harmony through smart layout suggestions.',
    url: 'https://www.aifengshui.app/bedroom-layout',
    siteName: 'AI Feng Shui',
    images: [
      {
        url: 'https://www.aifengshui.app/images/og-image.jpg', // 请替换为对应 1200x630 的卧室页面社交图
        width: 1200,
        height: 630,
        alt: 'AI Bedroom Feng Shui Analysis Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedroom Feng Shui Layout Analyzer',
    description:
      'AI-powered Feng Shui tool to optimize your bedroom for better sleep, energy flow, and harmony. Just upload your layout and get results.',
    images: ['https://www.aifengshui.app/images/og-image.jpg'],
  },
};

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