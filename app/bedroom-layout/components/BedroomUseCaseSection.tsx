// components/landing/UseCaseSection.tsx
import Image from "next/image";

export default function BedroomUseCaseSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Who Should Use the <span className="text-primary">Feng Shui Bedroom Tool</span>?
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-4">
        {/* Use Case 1: Not sure how to place furniture */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/best-bed-placement-advice.png"
              alt="Best Bed Placement Advice"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">🛏️</div>
          <h3 className="text-lg font-semibold mb-2">Struggling with Bed Layout?</h3>
          <p className="text-default-600 text-sm">
            Let AI help you determine the best placement for your bed, wardrobe, and mirrors based on time-tested Feng Shui rules.
          </p>
        </div>

        {/* Use Case 2: Improve environment */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/improve-bedroom-comfort-and-energy.png"
              alt="Improve Bedroom Comfort and Energy"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">🌿</div>
          <h3 className="text-lg font-semibold mb-2">Want a More Peaceful Bedroom?</h3>
          <p className="text-default-600 text-sm">
            Analyze your current bedroom layout to reduce stress, remove negative energy, and enhance sleep quality with feng shui-backed insights.
          </p>
        </div>

        {/* Use Case 3: Energy & personal growth */}
        <div className="flex flex-col items-start">
          <div className="flex-1 mb-4">
            <Image
              src="/images/use-case-3.png"
              alt="Boost Energy and Focus with Feng Shui"
              width={800}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-lg font-semibold mb-2">Want to Boost Your Energy?</h3>
          <p className="text-default-600 text-sm">
            Use bedroom feng shui to enhance your energy, improve emotional well-being, and support your personal or professional growth through better sleep and alignment.
          </p>
        </div>
      </div>
    </section>
  );
}