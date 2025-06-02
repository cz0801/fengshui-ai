// components/room-planner/RoomPlannerFaq.tsx
import Link from 'next/link';

export default function RoomPlannerFaq() {
  return (
    <section
      className="w-full flex flex-col text-start gap-4 scroll-mt-24"
      id="faq"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Room Planner <span className="text-primary">FAQs</span>
      </h2>

      <div className="space-y-10">
        {/* Q1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            What is the Roomstyler 3D Planner used for?
          </h3>
          <p className="text-sm text-default-600 mb-2">
            Roomstyler is a free, online 3D room layout tool that lets you design your bedroom, apartment, or full home layout interactively. It’s easy to drag and drop furniture, walls, and decorations to create a realistic floor plan.
          </p>
          <p className="text-sm text-default-600">
            Once you finish designing, you can take a screenshot and upload it to our AI Feng Shui tool for instant analysis.
          </p>
        </div>

        {/* Q2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            How can I analyze my Roomstyler design with feng shui?
          </h3>
          <p className="text-sm text-default-600 mb-2">
            After completing your layout in Roomstyler, take a clear screenshot of the top-down view (preferably with the North direction visible). Then upload that image on our{' '}
            <Link href="/" className="text-primary underline">
              homepage
            </Link>{' '}
            to receive instant feng shui feedback.
          </p>
          <p className="text-sm text-default-600">
            Our AI tool detects key feng shui factors like bed position, door alignment, energy flow, and directional balance.
          </p>
        </div>

        {/* Q3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Does the planner work for feng shui bedroom layouts?
          </h3>
          <p className="text-sm text-default-600 mb-2">
            Absolutely. You can use Roomstyler to plan your bedroom layout, including furniture arrangement and window/door placement. Then evaluate your feng shui using our AI tool.
          </p>
          <p className="text-sm text-default-600">
            For bedroom-specific ideas, check out our{' '}
            <Link href="/bedroom-layout" className="text-primary underline">
              Bedroom Feng Shui Analysis
            </Link>{' '}
            page with curated examples.
          </p>
        </div>

        {/* Q4 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            What layout formats are supported for AI feng shui analysis?
          </h3>
          <p className="text-sm text-default-600 mb-2">
            The AI tool accepts top-view floor plans or layout images, whether designed in Roomstyler, hand-drawn, or from architectural software. Just make sure the image is clear and includes a visible North direction.
          </p>
          <p className="text-sm text-default-600">
            Avoid photo-based uploads (e.g. real room photos), which are not yet supported.
          </p>
        </div>
      </div>
    </section>
  );
}