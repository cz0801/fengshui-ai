// components/langding/HomeFengshui.tsx

import React from 'react';
import Link from 'next/link';
import ImagePairSection from '../ImagePairSection';

export default async function HomeFengshuiSection() {
  return (
    <section
      className="w-full flex flex-col text-start border-t border-default-200 pt-10 pb-5 gap-8 scroll-mt-24"
      id="floor-layout-fengshui"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        🏠 Whole Home Feng Shui Analysis – Powered by AI
      </h2>

      <p className="font-bold leading-relaxed max-w-3xl">
        Upload your apartment or house floor plan and receive instant, AI-powered feng shui advice for your entrance, kitchen, living room, and bedrooms.
        Get a free feng shui layout assessment with modern AI tools and classical feng shui principles.
      </p>

      <Link
        href="/layout"
        className="w-fit px-4 py-3 rounded-2xl bg-primary text-white font-semibold text-center hover:bg-primary/70 transition"
      >
        Start Free Feng Shui Layout Analysis →
      </Link>

      <ul className="list-disc list-inside text-default-600 text-left max-w-3xl space-y-2">
        <li>AI feng shui analysis for your full home layout — just upload your floor plan</li>
        <li>Get instant feedback on energy flow, room placement, and auspicious directions</li>
        <li>Free feng shui generator with personalized recommendations</li>
      </ul>
      <ImagePairSection
        leftImage={{
          url: '/images/home-fengshui-floorplan-1.png',
          alt: 'A modern apartment floor plan with feng shui tools on the side',
        }}
        rightImage={{
          url: '/images/home-fengshui-analysis-view.png',
          alt: 'Feng shui layout overview of a modern home interior',
        }}
      />
    </section>
  );
}