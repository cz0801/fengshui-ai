// components/landing/WhyAIFengshuiSection.tsx
import Image from "next/image";
export default function WhyBedroomFengshuiSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Why Use <span className="text-primary">AI Feng Shui</span> for Your Bedroom?
      </h2>
      <p className="text-lg text-default-600">
        Good bedroom Feng Shui means better sleep, emotional stability, and personal well-being. Our AI tool helps you spot layout issues and optimize your space in minutes.
      </p>
      <div className="flex-1 mb-4">
        <Image
          src="/images/why-ai-fengshui.png"
          alt="Why Use AI Feng Shui for Bedrooms"
          width={800}
          height={200}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* 1. 自动识别卧室布局 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">🛏️</div>
          <h3 className="text-lg font-semibold mb-2">Understands Bedroom Layout</h3>
          <p className="text-default-600 text-sm">
            Upload your bedroom plan or layout image — our AI detects bed, doors, windows, mirrors, and more to evaluate your Feng Shui accurately.
          </p>
        </div>

        {/* 2. 快速获取建议 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-lg font-semibold mb-2">Instant Feng Shui Suggestions</h3>
          <p className="text-default-600 text-sm">
            Get personalized Feng Shui tips for your bedroom layout within seconds. No waiting, no guessing — just clear, practical advice you can use right away.
          </p>
        </div>

        {/* 3. 快速改善卧室能量场 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">🌙</div>
          <h3 className="text-lg font-semibold mb-2">Improve Sleep & Energy</h3>
          <p className="text-default-600 text-sm">
            Find and fix bad placements (like bed facing door or mirrors) before they affect your sleep and energy. Get instant, actionable Feng Shui tips.
          </p>
        </div>
      </div>
    </section>
  );
}