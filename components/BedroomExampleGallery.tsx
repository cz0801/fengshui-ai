import Image from 'next/image'
import Link from 'next/link'

const exampleImages = [
  '/images/bedroom-layout-examples/bedroom-layout-1.png',
  '/images/bedroom-layout-examples/bedroom-layout-2.png',
  '/images/bedroom-layout-examples/bedroom-layout-3.png',
  '/images/bedroom-layout-examples/bedroom-layout-4.png',
  '/images/bedroom-layout-examples/bedroom-layout-5.png',
  '/images/bedroom-layout-examples/bedroom-layout-6.png',
]

export default function BedroomExampleGallery() {
  return (
    <section className="w-full scroll-mt-[125px]" id="examples">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Bedroom <span className="text-primary">Feng Shui </span>Examples</h2>
      <h3 className="text-lg font-semibold mb-2">Explore real-life bedroom layout examples optimized for feng shui harmony.</h3>
      <p className="text-default-600 text-base md:text-lg mb-6 max-w-2xl">
        Each design showcases balanced furniture placement, smooth energy flow, and ideal positioning for restful sleep and wellbeing.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {exampleImages.map((src, idx) => (
          <Link
            key={idx}
            href="/fengshui-bedroom-example"
            className="group block overflow-hidden transition-opacity p-2"
          >
            <Image
              src={src} 
              alt={`Bedroom Feng Shui Example ${idx + 1}`}
              width={300}
              height={200}
              className="w-full h-auto object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}