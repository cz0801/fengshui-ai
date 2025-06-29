// components/landing/FaqSection.tsx

export default function FaqSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4 scroll-mt-24" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>

      <div className="space-y-10">

        {/* Question 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">What types of floor plans can I upload?</h3>
          <p className="font-semibold text-base mb-1">We support JPG, PNG, and PDF floor plans or sketches.</p>
          <p className="text-sm text-default-600 mb-2">
            Our AI tool is designed to analyze layout diagrams, not photos. You can upload scanned floor plans, hand-drawn sketches, or digitally created layouts. Please avoid uploading photos of real rooms.
          </p>
          <p className="text-sm text-default-600 mb-2">
            Ensure your layout includes clear room labels (e.g., &quot;Living Room&quot;, &quot;Kitchen&quot;) and preferably follow the &quot;North on top&quot; convention. If not, make sure the <strong>North direction is clearly marked</strong>.
          </p>
          <p className="text-sm text-default-600 mb-2">
            For best results, keep one floor per image. Avoid uploading multi-floor diagrams or merged plans.
          </p>
        </div>

        {/* Question 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">How does the AI analyze my floor plan?</h3>
          <p className="text-default-600 text-sm mb-4">
            The AI uses computer vision and trained feng shui logic to identify layout elements and assess spatial harmony.
          </p>

          <ul className="list-disc pl-5 text-sm text-default-600 space-y-2">
            <li>Recognizes room divisions, walls, doors, windows, and furniture symbols</li>
            <li>Detects orientation and applies feng shui principles (like chi flow and bagua zones)</li>
            <li>Highlights problem areas such as blocked energy paths or imbalanced zones</li>
            <li>Provides suggestions to improve layout and enhance positive energy</li>
          </ul>

          <p className="text-default-600 text-sm mt-3">
            All analyses are automated and require no prior feng shui knowledge.
          </p>
        </div>

        {/* Question 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            How can I improve the accuracy of the feng shui analysis?
          </h3>
          <p className="text-default-600 text-sm mb-2">
            Accuracy depends on the clarity and structure of your uploaded layout. Here are some tips:
          </p>

          <ul className="list-disc pl-5 text-sm text-default-600 space-y-1">
            <li>Use high-resolution images with no blur or shadows</li>
            <li>Clearly label each room in English or Chinese</li>
            <li>Ensure symbols for beds, desks, and doors are accurate</li>
            <li>Do not mix multiple layouts or notes in one image</li>
          </ul>

          <p className="text-default-600 text-sm mt-2">
            You can also leave additional notes or questions when submitting, and choose the output language (English or Chinese).
          </p>
        </div>

        {/* Question 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Can I use this tool before renovating or moving in?
          </h3>

          <p className="text-default-600 text-sm mb-2">
            Absolutely. This AI feng shui tool is perfect for pre-move or pre-renovation planning.
          </p>

          <p className="text-default-600 text-sm mb-2">
            By uploading your layout before making changes, you can identify design flaws, energy flow issues, or furniture placements that may clash with feng shui principles.
          </p>

          <p className="text-default-600 text-sm mb-2">
            Many users find this especially helpful during new home planning, interior redesign, or office setup.
          </p>
        </div>
      </div>
    </section>
  );
}