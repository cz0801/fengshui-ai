// components/landing/UseCaseSection.tsx
import Image from "next/image";
export default function UseCaseSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Use Cases for the <span className="text-primary">AI Feng Shui Generator</span>
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-4">
        {/* Use Case 1: Buyer's layout review */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/use-case-1.png"
              alt="Feng Shui Check Before Purchase"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">💰</div>
          <h3 className="text-lg font-semibold mb-2">Feng Shui Check Before Purchase</h3>
          <p className="text-default-600 text-sm">
            Thinking of buying a new apartment or home? Upload the floor plan and get instant feng shui feedback from AI — to avoid bad energy layouts before it&#39;s too late.
          </p>
        </div>

        {/* Use Case 2: Layout optimization */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/use-case-2.png"
              alt="Optimize Your Current Layout"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">📐</div>
          <h3 className="text-lg font-semibold mb-2">Optimize Your Current Layout</h3>
          <p className="text-default-600 text-sm">
            Already moved in? Let AI analyze your existing floor plan and suggest feng shui improvements — from room positions to energy flow corrections.
          </p>
        </div>

        {/* Use Case 3: Room snapshot analysis */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4"> 
            <Image
              src="/images/use-case-3.png"
              alt="Check a Bedroom or Living Room"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">🛏️</div>
          <h3 className="text-lg font-semibold mb-2">Check a Bedroom or Living Room</h3>
          <p className="text-default-600 text-sm">
            Upload a floor plan to receive feng shui analysis that helps you arrange your space for better energy flow, emotional well-being, and a more harmonious daily life.
          </p>
        </div>
      </div>
    </section>
  );
}