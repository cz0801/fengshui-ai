// components/landing/FaqSection.tsx
import Link from 'next/link';

export default function BedroomFaqSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4 scroll-mt-24" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>

      <div className="space-y-10">

        {/* Question 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">What is bedroom feng shui?</h3>
          <p className="font-semibold text-base mb-1">Bedroom feng shui focuses on arranging your sleeping environment to promote better energy, rest, and emotional well-being.</p>
          <p className="text-sm text-default-600 mb-2">
            It emphasizes the placement of your bed, mirrors, doors, windows, lighting, and furniture to improve the flow of chi (energy) and create a peaceful, supportive atmosphere.
          </p>
          <p className="text-sm text-default-600 mb-2">
            A well-aligned bedroom can enhance your sleep quality, reduce stress, support relationships, and improve overall life balance.
          </p>
          <ul className="list-disc pl-5 text-sm text-default-600 space-y-1">
            <li>Bed placement is key — it should have a solid backing and not face the door directly.</li>
            <li>Mirrors should not reflect the bed, and lighting should be soft and calming.</li>
            <li>Avoid clutter, overhead beams, and electronic disturbances near the bed.</li>
          </ul>
          <p className="text-sm text-default-600 mt-2">
            👉 <Link href="/blog/fengshui-bedroom" className="text-primary underline">Read more: Common Bedroom Feng Shui Mistakes to Avoid</Link>
          </p>
        </div>

        {/* Question 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Can AI help with bedroom feng shui?</h3>
          <p className="text-default-600 text-sm mb-4">
            Yes — our AI can understand bedroom layout images and identify issues based on traditional feng shui principles.
            It detects the position of your bed, door, window, and major furniture to provide feedback about energy flow, balance, and sleeping arrangement.
          </p>
          <ul className="list-disc pl-5 text-sm text-default-600 space-y-2">
            <li>Analyzes bedroom images or floor plans</li>
            <li>Detects feng shui violations like bed-under-window or mirror-facing-bed</li>
            <li>Provides easy-to-understand suggestions in seconds</li>
            <li>No prior feng shui knowledge required</li>
          </ul>
          <p className="text-sm text-default-600 mt-3">
            👉 <Link href="/blog/ai-fengshui-tools" className="text-primary underline">Explore more: How AI can assist in Feng Shui analysis</Link>
          </p>
        </div>

        {/* Question 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            What images should I upload for bedroom feng shui analysis?
          </h3>
          <p className="text-default-600 text-sm mb-2">
            Upload a clean bedroom floor plan, interior sketch, or 2D layout image. Ideally, your image should include furniture positions, especially the bed, windows, doors, and any mirrors.
          </p>
          <p className="text-default-600 text-sm mb-2">
            You can also upload simple drawings or design screenshots—as long as the furniture and structure are clear.
          </p>
          <p className="text-default-600 text-sm mb-2">
            If possible, mark the North direction to improve accuracy. Add any specific concerns or notes for the AI in the extra info section.
          </p>
        </div>

        {/* Question 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            How can I get better feng shui advice from the AI?
          </h3>
          <p className="text-default-600 text-sm mb-2">
            Provide a clear and complete layout image. Avoid blurry scans or partial rooms.
          </p>
          <p className="text-default-600 text-sm mb-2">
            Clearly label areas and include notes about your current issues (e.g., poor sleep, feeling stuck, layout confusion). The more context you give, the better the AI can tailor its analysis.
          </p>
          <p className="text-default-600 text-sm mb-2">
            Use the &quot;Additional Notes&quot; section to highlight anything you’d like the AI to focus on, such as headboard direction, lighting problems, or mirror placement.
          </p>
        </div>
      </div>
    </section>
  );
}