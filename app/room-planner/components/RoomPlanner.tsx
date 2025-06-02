// components/RoomLayoutPlanner.tsx
import React from 'react';
import Link from 'next/link';

export default function RoomLayoutPlanner() {
  return (
    <section className="flex flex-col items-start gap-6">
      <div className="text-base text-default-700 max-w-3xl">
        <h2>
          After designing your room, explore our additional tools:
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <Link href="/" className="text-primary hover:underline">
              Floor Layout Fengshui Analysis
            </Link> – For comprehensive evaluations of entire home layouts, including living rooms, kitchens, and more.
          </li>
          <li>
            <Link href="/bedroom-layout" className="text-primary hover:underline">
              Bedroom Feng Shui Analysis
            </Link> – Use our AI tool to evaluate your bedroom layout based on feng shui principles. Learn how bed placement, door position, and furniture flow affect harmony and restful sleep.
          </li>
        </ul>
      </div>

      <iframe
        src="https://roomstyler.com/3dplanner"
        title="Roomstyler 3D Planner"
        width="100%"
        height="800"
        allowFullScreen
        className="rounded shadow-lg border border-gray-200"
      ></iframe>
    </section>
  );
}