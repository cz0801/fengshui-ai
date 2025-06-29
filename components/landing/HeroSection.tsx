// components/landing/HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="w-full py-20 bg-gradient-to-b from-background to-gray-50 dark:to-black text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Free <span className="text-primary">AI Feng Shui Layout Generator</span><br />
          for Bedrooms, Rooms & Floor Plans
        </h1>
        <p className="text-lg text-default-600">
          Upload your floor plan or design your room to get instant AI Feng Shui analysis. 
          Perfect for small bedrooms, living rooms, or full home layouts.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row md:justify-center gap-4 pt-6">
        {/* Whole-home / floor-plan Feng Shui */}
        <Link
          href="#floor-layout-fengshui"
          className="px-6 py-3 rounded-2xl bg-primary text-white font-semibold text-center hover:bg-primary/70 transition"
        >
          🏠 Home Feng Shui
        </Link>

        {/* Bedroom Feng Shui */}
        <Link
          href="#bedroom-fengshui"
          className="px-6 py-3 rounded-2xl bg-primary text-white font-semibold text-center hover:bg-primary/70 transition"
        >
          🛏️ Bedroom Feng Shui
        </Link>

        {/* Interactive Room Planner */}
        <Link
          href="#room-layout-planner"
          className="px-6 py-3 rounded-2xl bg-primary text-white font-semibold text-center hover:bg-primary/70 transition"
        >
          ✏️ Draw Bedroom Layout
        </Link>
      </div>
    </header>
  );
}