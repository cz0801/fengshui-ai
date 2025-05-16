// components/landing/HeroSection.tsx

export default function HeroSection() {
  return (
    <header className="w-full py-20 bg-gradient-to-b from-background to-gray-50 dark:to-black text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Free <span className="text-primary">AI Feng Shui Generator</span><br />
          for Room & Layout Analysis
        </h1>
        <p className="text-lg text-default-600">
          Upload your room or apartment floor plan to get personalized feng shui analysis powered by AI. 
          Find your lucky layout in seconds.
        </p>
      </div>
    </header>
  );
}