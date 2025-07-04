// components/landing/HowItWorks.tsx
import Image from "next/image";
import Link from "next/link";

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
              Upload a clear <strong>floor plan</strong> or <strong>room layout drawing</strong> to receive personalized <strong>feng shui analysis</strong> powered by AI. Your image should include the <strong>north direction</strong> and clearly marked furniture or room functions to help the system generate accurate suggestions.
            </p>
            <p className="text-default-600 text-base">
              <strong>Don&apos;t have a floor plan yet?</strong>{' '}
              Use our{" "}
              <Link
                href="/room-planner"
                className="underline text-primary hover:text-primary/80"
              >
                Room Planner
              </Link>{" "}
              to draw your bedroom layout and export it for feng shui analysis.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/images/how-to-1.png"
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
              Tell us whether the <strong>top of the layout</strong> points North, your <strong>building type</strong> (e.g., apartment or house), and the <strong>floor level</strong>. This helps the AI engine understand spatial orientation and generate better <strong>feng shui recommendations</strong> based on <strong>energy flow</strong> and <strong>five-element balance</strong>.
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
              Our <strong>AI Feng Shui Generator</strong> will analyze your layout to assess <strong>chi flow</strong>, <strong>five-element alignment</strong>, and <strong>bagua zones</strong>. Instantly receive tailored recommendations to improve your room’s <strong>feng shui</strong> and boost harmony, health, and clarity.
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