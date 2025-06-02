import Image from 'next/image'
import { Chip } from '@heroui/react'

interface LayoutCaseProps {
  title: string
  image: string
  tags?: string[]
  analysis: string
}

export default function LayoutCase({ title, image, tags = [], analysis }: LayoutCaseProps) {
  return (
    <section className="w-full max-w-5xl mx-auto border border-default-200 p-4 md:p-6 rounded-xl h-fit">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* 图片区域（左侧） */}
        <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-sm">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 文字区域（右侧） */}
        <div className="w-full md:w-2/3 flex flex-col">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-8">{title}</h2>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
              {tags.map((tag) => (
                <Chip key={tag} size="sm" color="primary" variant="flat">
                  {tag}
                </Chip>
              ))}
            </div>
          )}

          <p className="text-base text-default-700 leading-relaxed whitespace-normal">{analysis}</p>
        </div>
      </div>
    </section>
  )
}