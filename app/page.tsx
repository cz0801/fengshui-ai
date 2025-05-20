import FengshuiClient from "@/components/client/FengshuiClient";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorks";
import UseCaseSection from "@/components/landing/UseCaseSection";
import WhyAIFengshuiSection from "@/components/landing/WhyAIFengshuiSection";
import FaqSection from "@/components/landing/FaqSection";
import LandingNavbar from "@/components/landing/LandingNavbar";
import HomeSwitchFeature from "@/components/landing/HomeSwitchFeature";

// app/page.tsx or app/head.tsx
export const metadata = {
  title: 'Free AI Feng Shui Generator | aifengshui.app',
  description:
    'Upload your floor plan or room layout to get a free feng shui generator powered by AI. Discover energy flow, five-element balance, and personalized improvement suggestions instantly.',
  keywords: [
    'AI Feng Shui',
    'feng shui floor plan',
    'feng shui analysis',
    'feng shui tool',
    'feng shui online',
    'bagua map analysis',
    'chi energy layout',
    'room layout feng shui',
    'apartment feng shui',
    'free feng shui report',
    'AI home analysis',
  ],
  alternates: {
    canonical: 'https://www.aifengshui.app/',
  },
  openGraph: {
    title: 'Free AI Feng Shui Generator | aifengshui.app',
    description:
      'Get instant feng shui insights by uploading your room or floor plan image. AI-powered suggestions for layout, energy flow, and five-element harmony.',
    url: 'https://www.aifengshui.app/',
    siteName: 'AI Feng Shui',
    images: [
      {
        url: 'https://www.aifengshui.app/images/og-image.jpg', // 你需要提供一个 1200x630 的社交分享图
        width: 1200,
        height: 630,
        alt: 'AI Feng Shui Generator Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Feng Shui Generator',
    description:
      'Use AI to analyze your home’s layout and receive feng shui insights in seconds. No feng shui master needed.',
    images: ['https://www.aifengshui.app/images/og-image.jpg'],
  },
};

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
    </main>
  );
}
