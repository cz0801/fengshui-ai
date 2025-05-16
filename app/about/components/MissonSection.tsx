
import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="w-full border-t border-default-200 py-10 scroll-mt-24" id="mission">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ▶︎ 文本区域 */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Mission</span>
          </h2>

          <p className="text-default-600 leading-relaxed">
            We make <strong>AI-powered feng-shui</strong> accessible to everyone.
            By combining <strong>computer&nbsp;vision</strong> with
            time-tested feng-shui principles—chi flow, bagua zones, five-element
            balance—we help you design healthier, luckier homes in minutes,
            not weeks.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-default-600">
            <li>
              <strong>Democratize</strong> feng-shui: no more expensive master
              consultations.
            </li>
            <li>
              <strong>Visualize fast</strong>: upload a floor plan, get instant
              energy-flow diagnostics.
            </li>
            <li>
              <strong>Actionable tips</strong>: clear, room-by-room
              recommendations you can apply today.
            </li>
          </ul>
        </div>

        {/* ▶︎ 可选插图（如无素材可删除整块） */}
        <div className="w-full">
          <Image
            src="/images/about-mission.jpg"   
            alt="Illustration of AI analyzing a floor plan"
            className="w-full rounded-lg"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
}