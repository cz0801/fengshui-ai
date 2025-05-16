// components/landing/WhyAIFengshuiSection.tsx
import Image from "next/image";
export default function WhyAIFengshuiSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4">

      <h2 className="text-3xl md:text-4xl font-bold">
        Why Choose <span className="text-primary">AI Feng Shui</span>?
      </h2>
      <p className="text-lg text-default-600">
        Traditional feng shui analysis can be expensive, time-consuming, and hard to understand without years of study.
        Our AI-powered tool makes it fast, visual, and accessible to everyone.
      </p>
      <div className="flex-1 mb-4">
        <Image
          src="/images/why-ai-fengshui.png"
          alt="Why Choose AI Feng Shui"
          width={800}
          height={200}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* 1. 自动识图 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">🧠</div>
          <h3 className="text-lg font-semibold mb-2">AI Image Understanding</h3>
          <p className="text-default-600 text-sm">
            Just upload a floor plan or room image—our AI can understand layout, lighting, and furniture to generate accurate feng shui insights.
          </p>
        </div>

        {/* 2. 不求人 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">🙅‍♂️</div>
          <h3 className="text-lg font-semibold mb-2">No Consultant Needed</h3>
          <p className="text-default-600 text-sm">
            Skip the hassle of hiring a feng shui master or reading piles of complicated books. Our tool is free to use and gives you feng shui suggestions.
          </p>
        </div>

        {/* 3. 快速避雷 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-lg font-semibold mb-2">Spot Issues Early</h3>
          <p className="text-default-600 text-sm">
            Quickly identify potential feng shui problems before you move in or decorate. Avoid bad placements and design with energy in mind.
          </p>
        </div>
      </div>
    </section>
  );
}