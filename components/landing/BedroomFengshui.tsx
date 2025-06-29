// components/landing/BedroomFengshui.tsx
import React from 'react';
import Link from 'next/link';
import ImagePairSection from '../ImagePairSection';

export default async function BedroomFengshui() {
  return (
    <section
      className="w-full flex flex-col text-start border-t border-default-200 pt-10 pb-5 gap-8 scroll-mt-24"
      id="bedroom-fengshui"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        🛏️ Bedroom Feng Shui Analysis – AI-Driven Advice
      </h2>

      <p className="font-bold leading-relaxed max-w-3xl">
        Upload your bedroom floor plan and get instant <strong>AI feng shui analysis</strong> on bed placement, mirrors, windows, and energy flow. 
        Discover the best <em>feng shui room arrangement</em> to improve sleep quality and harmony—all for free.
      </p>

      <Link
        href="/bedroom-layout"
        className="w-fit px-4 py-3 rounded-2xl bg-primary text-white font-semibold text-center hover:bg-primary/70 transition"
      >
        Start Free Bedroom Feng Shui Analysis →
      </Link>

      <ul className="list-disc list-inside text-default-600 text-left max-w-3xl space-y-2">
        <li>AI-powered bedroom feng shui layout recommendations in seconds</li>
        <li>Optimal bed, wardrobe, and desk placement for balanced chi</li>
        <li>Free feng shui generator with personalized, room-specific advice</li>
      </ul>

      <ImagePairSection
        leftImage={{
          url: '/images/bedroom-fengshui-layout-1.png',
          alt: 'Minimalist bedroom floor plan prepared for AI feng shui analysis',
        }}
        rightImage={{
          url: '/images/bedroom-fengshui-arrangement-view.png',
          alt: 'AI feng shui room arrangement showing balanced bed and furniture positions',
        }}
      />
    </section>
  );
}