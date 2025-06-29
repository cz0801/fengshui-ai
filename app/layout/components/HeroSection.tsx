// components/landing/HeroSection.tsx

export default function HeroSection() {
  return (
    <header className="w-full py-20 bg-gradient-to-b from-background to-gray-50 dark:to-black text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Upload Your Floor Plan for<br />
          <span className="text-primary">AI Feng Shui Layout Analysis</span>
        </h1>
        <p className="text-lg text-default-600">
          Get instant feng shui insights for your entire home — including entrance, kitchen, living room, and bedrooms.
          Upload your apartment or house layout and receive personalized advice powered by classical feng shui principles and AI.
        </p>
        <p className="text-sm text-default-500">
          No floor plan? <a href="/room-planner" className="underline text-primary hover:text-primary/80">Try our Room Planner</a> to draw one.
        </p>
      </div>
    </header>
  );
}