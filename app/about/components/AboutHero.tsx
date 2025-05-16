export default function AboutHero() {
  return (
    <header className="w-full py-20 bg-gradient-to-b from-background to-gray-50 dark:to-black text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* H1 —— 页面唯一主标题 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          About <span className="text-primary">AI&nbsp;Feng&nbsp;Shui</span>
        </h1>

        {/* 品牌定位 / 副标题 */}
        <p className="text-lg text-default-600">
          Instant <strong>AI feng-shui</strong> insights for any floor plan or room
          layout—visualize, balance, and upgrade your space fast.
        </p>
      </div>
    </header>
  );
}