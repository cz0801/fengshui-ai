import Image from "next/image";

export default function WhyAIFengshuiSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4">

      <h2 className="text-3xl md:text-4xl font-bold">
        Why Use <span className="text-primary">AI Feng Shui for Layouts</span>?
      </h2>
      <p className="text-lg text-default-600">
        Traditional feng shui consultation for full-home layouts can be costly, slow, and hard to access. 
        Our AI-powered layout analyzer helps you instantly evaluate energy flow, element harmony, and spatial balance — all from a simple floor plan upload.
      </p>

      <div className="flex-1 mb-4">
        <Image
          src="/images/layout-why-ai-fengshui.png"
          alt="Benefits of AI Feng Shui for floor plan layout analysis"
          width={800}
          height={200}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* 1. 户型自动识别 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">🧠</div>
          <h3 className="text-lg font-semibold mb-2">AI Floor Plan Detection</h3>
          <p className="text-default-600 text-sm">
            Upload your apartment or house layout — our AI identifies walls, furniture, orientation, and more to generate accurate feng shui insights.
          </p>
        </div>

        {/* 2. 无需请风水师 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">🙅‍♂️</div>
          <h3 className="text-lg font-semibold mb-2">No Master Needed</h3>
          <p className="text-default-600 text-sm">
            Skip expensive consultations. Our tool gives you fast, visual feng shui guidance for your entire layout — no prior knowledge required.
          </p>
        </div>

        {/* 3. 早期发现问题 */}
        <div className="flex flex-col items-start">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-lg font-semibold mb-2">Detect Issues Before Move-in</h3>
          <p className="text-default-600 text-sm">
            Instantly identify feng shui problems in your layout — like blocked energy flow or missing elements — before you commit to buying, renting, or renovating.
          </p>
        </div>
      </div>
    </section>
  );
}