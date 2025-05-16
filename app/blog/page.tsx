// app/blog/page.tsx
import BlogCard from "./components/BlogCard";
import BlogHero from "./components/BlogHero";

export const metadata = {
  title: 'Fengshui Knowledge | AI Feng Shui Blog & Tips',
  description:
    'Learn practical feng shui knowledge with AI-powered insights. Explore tips on floor plan layout, bagua maps, chi flow, and home energy optimization.',
  keywords: [
    'feng shui knowledge',
    'AI feng shui',
    'feng shui blog',
    'chi energy flow',
    'bagua map feng shui',
    'feng shui for apartments',
    'feng shui tips and tricks',
    'home layout feng shui',
    'room feng shui guide',
    'AI floor plan analysis',
  ],
  alternates: {
    canonical: 'https://www.aifengshui.app/blog',
  },
  openGraph: {
    title: 'Fengshui Knowledge | AI Feng Shui Blog & Tips',
    description:
      'Discover essential feng shui concepts enhanced by AI. Learn how to improve your home’s energy, layout, and harmony with expert-backed guides.',
    url: 'https://www.aifengshui.app/blog',
    siteName: 'AI Feng Shui',
    images: [
      {
        url: 'https://www.aifengshui.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fengshui Knowledge Articles Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fengshui Knowledge | AI Feng Shui Blog',
    description:
      'AI-driven feng shui tips for better home and office design. Start learning feng shui layout principles today.',
    images: ['https://www.aifengshui.app/images/og-image.jpg'],
  },
};

export default function BlogPage() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10 pb-10">
      <BlogHero />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <BlogCard
          title="The Ultimate Guide to Feng Shui Bedroom Layout | 14 Principles for a Healthy and Harmonious Space"
          slug="fengshui-bedroom"
          date="May 16, 2025"
          coverImage="/blog/fengshui-bedroom-shape-comparison.png"
          excerpt="Discover 14 essential Feng Shui bedroom layout tips to improve your sleep, energy, and well-being. Learn what to avoid and how to harmonize your space at aifengshui.app."
        />
        <BlogCard
          title="What is Feng Shui? Meaning, Principles, and Modern Value"
          slug="what-is-fengshui"
          date="May 15, 2025"
          coverImage="/blog/five-element-cycle.png"
          excerpt="Discover the true meaning, core philosophy, and scientific relevance of this ancient Chinese system. Learn how Feng Shui connects nature, energy, and sustainable living in the modern world."
        />
        <BlogCard
          title="Can AI Really Help with Feng Shui? A Beginner’s Guide to AI Feng Shui Tools"
          slug="ai-fengshui-tools"
          date="May 10, 2025"
          coverImage="/blog/AI-understand-fengshui.png"
          excerpt="Explore how AI is transforming the ancient art of Feng Shui. From Bazi-based analysis to layout recognition, learn what today’s AI tools can do—and where their limits lie."
        />
      </div>
    </main>
  );
}

