import AboutHero from "./components/AboutHero";
import MissionSection from "./components/MissonSection";
import TeamSection from "./components/TeamSection";
import AboutNavbar from "./components/AboutNavbar";
export const metadata = {
  title: 'About | AI Feng Shui – Who We Are & Why We Built This',
  description:
    'Learn about the mission behind AI Feng Shui. Discover how we blend ancient feng shui principles with cutting-edge AI to help you analyze floor plans and improve your living or working space instantly.',
  keywords: [
    'about AI Feng Shui',
    'AI feng shui analysis',
    'feng shui floor plan tool',
    'chi energy layout',
    'five element balance',
    'feng shui background',
    'AI home design',
    'feng shui for real estate',
    'feng shui architecture',
    'bagua map analysis',
    'feng shui house layout',
    'feng shui office design',
    'AI feng shui generator'
  ],
  alternates: {
    canonical: 'https://www.aifengshui.app/about',
  },
  openGraph: {
    title: 'About | AI Feng Shui – Mission & Vision',
    description:
      'We created AI Feng Shui to make feng shui accessible to everyone. Learn about our journey from architecture to AI-powered feng shui tools.',
    url: 'https://www.aifengshui.app/about',
    siteName: 'AI Feng Shui',
    images: [
      {
        url: 'https://www.aifengshui.app/images/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'AI Feng Shui About Page Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | AI Feng Shui',
    description:
      'From architecture to AI: how we built a feng shui tool that brings ancient wisdom into modern homes.',
    images: ['https://www.aifengshui.app/images/og-image.png'],
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10">
      <AboutNavbar />
      <AboutHero />
      <MissionSection />
      <TeamSection />
    </main>
  );
}
