// app/blog/page.tsx
import { generateMetadata } from "@/utils/metadata";
import BlogCard from "./components/BlogCard";
import BlogHero from "./components/BlogHero";

export const metadata = generateMetadata({
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
  canonical: 'https://www.aifengshui.app/blog',
});

export default function BlogPage() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10 pb-10">
      <BlogHero />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <BlogCard
          title="Transform Your Bedroom with These Feng Shui Essentials"
          slug="fengshui-essentials"
          date="June 23, 2025"
          coverImage="/blog/fengshui-essentials/fengshui-crystals.png"
          excerpt="Discover Feng Shui bedroom essentials, including crystals and plants, to enhance energy flow and create a harmonious space."
        />

        <BlogCard
          title="Feng Shui Bedroom Layout Guide | AI Feng Shui Generator"
          slug="fengshui-bedroom-layout-guide"
          date="June 13, 2025"
          coverImage="/blog/fengshui-bedroom-layout-guide/fengshui-bedroom-overview.png"
          excerpt="Feng Shui bedroom layout guide to improve sleep and harmony. Try our AI planner at aifengshui.app."
        />

        <BlogCard
          title="Bedroom Feng Shui Guide – Part 2 | Love, Sleep & Health Essentials"
          slug="bedroom-fengshui-guide-part2"
          date="May 26, 2025"
          coverImage="/blog/bedroom-fengshui-guide-part2/fengshui-romance-corner.png"
          excerpt="Discover Feng Shui tips for relationship harmony, better sleep, and healthy energy flow in your bedroom. Part 2 of our guide covers practical layouts, plant placement, lighting, and more."
        />

        <BlogCard
          title="Bedroom Feng Shui Guide – Part 1 | Bed Placement, Mirror Taboos, and Color Tips"
          slug="bedroom-fengshui-guide-part1"
          date="May 20, 2025"
          coverImage="/blog/bedroom-fengshui-guide-part1/bed-sees-door-window.png"
          excerpt="Learn key Feng Shui tips for your bedroom: ideal bed placement, mirror and door taboos, and soothing color choices for better sleep and energy."
        />

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

