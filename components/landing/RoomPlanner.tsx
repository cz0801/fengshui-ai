// components/landing/RoomPlanner.tsx
import React from 'react';
import Link from 'next/link';
import ImagePairSection from '../ImagePairSection';

export default async function RoomPlanner() {
  return (
    <section
      className="w-full flex flex-col text-start border-t border-default-200 pt-10 pb-5 gap-8 scroll-mt-24"
      id="room-layout-planner"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        ✏️ Draw Your Bedroom – Feng Shui Room Planner
      </h2>

      <p className="font-bold leading-relaxed max-w-3xl">
        Use our <strong>feng shui home design software</strong> to draw your bedroom layout, arrange furniture, and visualize your space.
        Then screenshot your plan and upload it to our <Link href="/bedroom-layout" className="underline text-primary hover:text-primary/80">Bedroom Feng Shui</Link> tool for AI analysis.
      </p>

      <Link
        href="/room-planner"
        className="w-fit px-4 py-3 rounded-2xl bg-primary text-white font-semibold text-center hover:bg-primary/70 transition"
      >
        Start Drawing with Room Planner →
      </Link>

      <ul className="list-disc list-inside text-default-600 text-left max-w-3xl space-y-2">
        <li>Easy-to-use feng shui room planner for bedrooms and small spaces</li>
        <li>Customize your interior layout with bed, desk, wardrobe and more</li>
        <li>Works as feng shui interior design software — pair with our AI feng shui analysis tool</li>
      </ul>

      <ImagePairSection
        leftImage={{
          url: '/images/fengshui-room-planner-ui.png',
          alt: 'Feng shui room planner interface for custom bedroom layout design',
        }}
        rightImage={{
          url: '/images/fengshui-room-planner-mockup.png',
          alt: 'Drawn bedroom layout created using feng shui home design software',
        }}
      />
    </section>
  );
}