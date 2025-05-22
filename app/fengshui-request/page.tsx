import UserNeedForm from './components/UserNeedForm'
import Image from 'next/image'
import { generateMetadata } from '@/utils/metadata'

export const metadata = generateMetadata({
  title: 'Suggest a Feature | AI Feng Shui',
  description: 'Tell us what features you’d like to see in our AI Feng Shui tool—whether it’s layout suggestions, beginner guides, or personalized Feng Shui insights.',
  canonical: 'https://www.aifengshui.app/fengshui-request',
  keywords: [
    'feng shui feature request',
    'ai feng shui feedback',
    'feng shui suggestions',
    'feng shui roadmap',
    'feng shui ideas',
    'smart feng shui layout',
    'feng shui ai tool',
  ],
});

export default function FengShuiFeatureRequestPage() {
  return (
    <main className="px-6 pb-12 max-w-2xl mx-auto">
      <Image
        src="/images/fengshui-ai-idea.png"
        alt="AI Feng Shui Suggestion"
        width={800}
        height={400}
        className="mx-auto mb-8 rounded-xl"
      />
      <h1 className="text-3xl font-bold mb-4">Help Us Improve <span className="text-primary">AI Feng Shui</span></h1>
      <p className="mb-8">
        We’re collecting feedback to improve our Feng Shui AI. What would you love to see next?
        This could be smart layout suggestions, learning modules, or quick Feng Shui Q&A.
      </p>

      <UserNeedForm />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">🌟 What Other Users Are Requesting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>“I&apos;d love automatic Feng Shui layout suggestions based on my floor plan.”</li>
          <li>“A step-by-step beginner&apos;s guide to understanding Feng Shui principles.”</li>
          <li>“I just want to know if my bedroom layout is good for health and sleep.”</li>
        </ul>
        <p className="text-sm mt-2">
          These are some of the popular requests we&apos;ve already received.
        </p>
        <p className="text-sm mt-4">
          ✅ We regularly review all submitted suggestions to shape our product roadmap.
          The most requested features will be prioritized in future updates — such as
          smart layout generation, Feng Shui Q&A, and multi-room analysis. Your voice
          truly matters!
        </p>
      </section>
    </main>
  )
}