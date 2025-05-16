// components/landing/HowItWorks.tsx
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 pt-10 pb-5 gap-4 scroll-mt-24" id="how-it-works">
      <h2 className="text-3xl md:text-4xl font-bold">
        How the <span className="text-primary">AI Feng Shui Generator</span> Works
      </h2>

      <div className="w-full mx-auto space-y-16 mt-4">

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Text */}
          <div className="flex-1 space-y-4">
            <div className="text-3xl">📤</div>
            <h3 className="text-xl font-semibold">1. Upload Your Image</h3>
            <p className="text-default-600 text-base">
              Upload a clear <strong>floor plan</strong> or <strong>room layout photo</strong> to get the best <strong>feng shui analysis</strong>. Make sure the image shows the full layout, includes the <strong>north direction</strong>, and clearly marks each room’s function — this helps the <strong>AI feng shui tool</strong> provide accurate and personalized suggestions.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/images/how-to-1.png" // 👉 你需要放一张合适图片在 public/images/
              alt="Upload Floor Plan for Feng Shui Analysis"
              width={800}
              height={426}
              className="w-full"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          {/* Text */}
          <div className="flex-1 space-y-4">
            <div className="text-3xl">🧭</div>
            <h3 className="text-xl font-semibold">2. Add Basic Info</h3>
            <p className="text-default-600 text-base">
              Tell us whether the <strong>top of the floor plan</strong> points to <strong>North</strong>, your <strong>building type</strong> (e.g., apartment or house), and the <strong>floor level</strong>. This helps the <strong>AI feng shui system</strong> understand orientation and context, offering more accurate <strong>feng shui recommendations</strong> based on <strong>energy flow</strong> and <strong>five-element balance</strong>.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/images/how-to-2.png"
              alt="Add Direction and Building Info for Feng Shui Analysis"
              width={800}
              height={426}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Text */}
          <div className="flex-1 space-y-4">
            <div className="text-3xl">🔮</div>
            <h3 className="text-xl font-semibold">3. Get Feng Shui Insights</h3>
            <p className="text-default-600 text-base">
              Our <strong>AI Feng Shui Generator</strong> analyzes your <strong>floor plan</strong> or <strong>room layout</strong> to assess <strong>energy flow</strong> and <strong>five-element balance</strong>. Instantly get <strong>personalized suggestions</strong> to improve layout, optimize <strong>bagua areas</strong>, and create a more <strong>harmonious living space</strong>.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/images/how-to-3.png"
              alt="AI Feng Shui Analysis Report"
              width={800}
              height={426}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}