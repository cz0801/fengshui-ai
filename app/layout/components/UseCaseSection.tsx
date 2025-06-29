// components/landing/UseCaseSection.tsx
import Image from "next/image";

export default function UseCaseSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Use Cases for the <span className="text-primary">AI Feng Shui Generator</span>
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-4">
        {/* Use Case 1: Pre-purchase evaluation */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/layout-use-case-1.png"
              alt="Feng Shui Evaluation Before Buying"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">💰</div>
          <h3 className="text-lg font-semibold mb-2">Check Feng Shui Before You Buy</h3>
          <p className="text-default-600 text-sm">
            Planning to buy a new home or apartment? Upload the floor plan to get instant feng shui feedback — and avoid poor layouts before committing.
          </p>
        </div>

        {/* Use Case 2: Layout optimization before moving in */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/layout-use-case-2.png"
              alt="Improve Your Current Layout"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">📦</div>
          <h3 className="text-lg font-semibold mb-2">Plan Better Before You Move In</h3>
          <p className="text-default-600 text-sm">
            Use the AI generator to optimize your home&apos;s feng shui before renovation or moving day — helping you avoid layout issues and boost energy flow.
          </p>
        </div>

        {/* Use Case 3: Full-home feng shui audit */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/layout-use-case-3.png"
              alt="Full House Feng Shui Check"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">🧭</div>
          <h3 className="text-lg font-semibold mb-2">Run a Full-Home Feng Shui Audit</h3>
          <p className="text-default-600 text-sm">
            Already have a full layout? Let AI analyze the complete space — from entrances to bedrooms — and uncover areas that may block energy or harmony.
          </p>
        </div>
      </div>
    </section>
  );
}