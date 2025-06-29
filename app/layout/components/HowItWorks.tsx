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
          <div className="flex-1 space-y-4">
            <div className="text-3xl">📤</div>
            <h3 className="text-xl font-semibold">1. Upload Your Floor Plan</h3>
            <p className="text-default-600 text-base">
              Upload your <strong>complete home floor plan</strong> — whether it&apos;s a photo, screenshot, or digital drawing. The layout should show all major rooms (entrance, kitchen, living room, bedrooms, etc.), walls, and furniture placements. Including the <strong>north direction</strong> ensures more accurate feng shui results.
            </p>
            <p className="text-default-600 text-base">
              <strong>Don&apos;t have a floor plan yet?</strong>{" "}
              Use our{" "}
              <Link
                href="/room-planner"
                className="underline text-primary hover:text-primary/80"
              >
                Room Planner
              </Link>{" "}
              to draw your layout and export it for feng shui analysis.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/layout-how-to-1.png"
              alt="Upload Floor Plan for Feng Shui Layout Analysis"
              width={800}
              height={426}
              className="w-full"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          <div className="flex-1 space-y-4">
            <div className="text-3xl">🧭</div>
            <h3 className="text-xl font-semibold">2. Add Orientation & Property Info</h3>
            <p className="text-default-600 text-base">
              Tell us whether the <strong>top of your floor plan</strong> points North, your <strong>building type</strong> (e.g., apartment or house), and your <strong>floor level</strong>. These details help the AI engine evaluate your layout using feng shui logic based on <strong>spatial orientation</strong> and <strong>energy dynamics</strong>.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/layout-how-to-2.png"
              alt="Set Direction and Property Info for Feng Shui Evaluation"
              width={800}
              height={426}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 space-y-4">
            <div className="text-3xl">🔮</div>
            <h3 className="text-xl font-semibold">3. Get Personalized Feng Shui Insights</h3>
            <p className="text-default-600 text-base">
              Our <strong>AI Feng Shui Generator</strong> analyzes your <strong>full layout</strong> to assess <strong>chi flow</strong>, <strong>five-element alignment</strong>, and <strong>bagua zones</strong>. You&apos;ll get <strong>actionable feng shui recommendations</strong> to enhance harmony, energy flow, and wellbeing throughout your entire home.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/layout-how-to-3.png"
              alt="AI Feng Shui Report with Personalized Layout Suggestions"
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