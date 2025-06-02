import Link from "next/link";

export default function UploadRecommendationSection() {
  return (
    <section className="flex flex-col items-start gap-6 scroll-mt-[125px]" id="try">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Curious about your bedroom&apos;s <span className="text-primary">feng shui</span> ?
      </h2>
      <p className="text-default-700 mb-2">
        Below are examples of well-arranged bedrooms based on feng shui principles.
        Use them as inspiration for your own space.
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>
          <Link href="/" className="text-primary hover:underline">
            Floor Layout Fengshui Analysis
          </Link> – For comprehensive evaluations of entire home layouts, including living rooms, kitchens, and more.
        </li>
        <li>
          <Link href="/bedroom-layout" className="text-primary hover:underline">
            Bedroom Feng Shui Analysis
          </Link> – Use our AI tool to evaluate your bedroom layout based on feng shui principles. Learn how bed placement, door position, and furniture flow affect harmony and restful sleep.
        </li>
      </ul>
      <p className="text-default-700 mb-2">
        Upload your bedroom layout to get a free AI-powered feng shui analysis — see how your current design supports harmony, energy flow, and restful sleep.
      </p>
    </section>
  );
}