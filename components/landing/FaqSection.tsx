// components/landing/FaqSection.tsx
import Link from 'next/link';
export default function FaqSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4 scroll-mt-24" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>

      <div className="space-y-10">

        {/* Question 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">What is feng shui?</h3>
          <p className="font-semibold text-base mb-1">Feng shui is an ancient Chinese practice of spatial harmony.</p>
          <p className="text-sm text-default-600 mb-2">
            The term “feng shui” translates to “wind and water” in Chinese. It is a traditional philosophy that focuses on arranging your living environment—especially floor plans, furniture, and room layout—to create balance and enhance positive energy flow, or <strong>chi (气)</strong>.
          </p>
          <p className="text-sm text-default-600 mb-2">
            In feng shui, how you position elements like doors, beds, and windows can affect your well-being, relationships, career, and prosperity. Proper feng shui brings harmony, stability, and good fortune into your life.
          </p>
          <ul className="list-disc pl-5 text-sm text-default-600 space-y-1">
            <li><strong>Chi (energy)</strong> should flow smoothly throughout a space.</li>
            <li>The <strong>five elements</strong> (wood, fire, earth, metal, water) must be balanced.</li>
            <li>The <strong>bagua map</strong> links parts of your home to areas of life like health, wealth, and love.</li>
          </ul>
          <p className="text-sm text-default-600 mt-2">
            Modern AI feng shui tools, like this one, help apply these timeless principles to your room or layout by analyzing spatial arrangements, directions, and balance in seconds.
          </p>
          <p className="text-sm text-default-600 mt-2">
            👉 <Link href="/blog/what-is-fengshui" className="text-primary underline">Read the full guide: What is Feng Shui?</Link>
          </p>
        </div>

        {/* Question 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Can AI help with feng shui?</h3>
          <p className="text-default-600 text-sm mb-4">
            Yes — AI is now powerful enough to interpret floor plans and room layouts for feng shui purposes.
            By using computer vision and trained feng shui models, AI can identify key layout features and provide 
            practical suggestions based on energy flow, the five elements, and bagua zones.
          </p>

          <ul className="list-disc pl-5 text-sm text-default-600 space-y-2">
            <li>Detects layout features: walls, doors, beds, desks, and directions</li>
            <li>Applies traditional feng shui rules like chi flow and command position</li>
            <li>Provides instant analysis — no need for a feng shui master</li>
            <li>Suggests how to improve layout, element balance, and furniture placement</li>
          </ul>

          <p className="text-default-600 text-sm mt-3">
            In short, AI brings modern speed and convenience to ancient feng shui wisdom — and tools like this one 
            let you get free, personalized advice in seconds.
          </p>
          <p className="text-sm text-default-600 mt-3">
            👉 <Link href="/blog/ai-fengshui-tools" className="text-primary underline">Explore more: How AI can assist in Feng Shui analysis</Link>
          </p>
        </div>

        {/* Question 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            What can I upload for AI Feng Shui analysis?
          </h3>
          <p className="text-default-600 text-sm mb-2">
            Currently, the AI Feng Shui tool supports only two types of image uploads: <strong>floor plans</strong> or <strong>room layout sketches</strong>. It does <strong>not</strong> support photo-based analysis for furniture placement (e.g., desktop feng shui or bedside photos) — although this feature may be considered in the future.
          </p>

          <p className="text-default-600 text-sm mb-2">
            For accurate results, please follow the traditional <strong>“North on top” (上北下南)</strong> orientation when drawing or uploading a floor plan. If your floor plan uses a different orientation, be sure to <strong>mark the North direction clearly</strong> with an arrow or compass symbol. This helps the AI correctly identify directions like southeast or northwest, which are essential for feng shui analysis.
          </p>

          <p className="text-default-600 text-sm mb-2">
            Make sure your floor plan is <strong>clear and legible</strong>. Use readable labels for each room or area (e.g., “Living Room,” “Bedroom”) and ensure symbols for beds, tables, or appliances are as precise as possible. This prevents misinterpretation during AI recognition.
          </p>
        </div>

        {/* Question 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            How can I improve the accuracy of the AI Feng Shui analysis?
          </h3>

          <p className="text-default-600 text-sm mb-2">
            To get the most reliable feng shui analysis from our AI tool, make sure each uploaded image contains <strong>only one floor plan</strong> or layout. Please <strong>do not combine multiple floor plans</strong> into a single image — this may confuse the AI and reduce accuracy.
          </p>

          <p className="text-default-600 text-sm mb-2">
            The image should be <strong>clear, sharp, and well-labeled</strong>. Use easily readable room names (e.g., &quot;Kitchen&quot;, &quot;Master Bedroom&quot;) and avoid blurry handwriting or low-resolution scans. Clear icons for beds, desks, or fixtures will help the AI recognize key features accurately.
          </p>

          <p className="text-default-600 text-sm mb-2">
            You can also use the <strong>&quot;Additional Information&quot;</strong> section to specify the <strong>language you want the analysis to be in</strong> — for example, English or Chinese — and include any special notes you&apos;d like the AI to consider.
          </p>
        </div>
      </div>
    </section>
  );
}