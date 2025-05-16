export default function BlogHero() {
  return (
    <header className="w-full py-20 bg-gradient-to-b from-background to-gray-50 dark:to-black text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* H1 —— 页面唯一主标题 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-primary">Feng&nbsp;Shui</span> Knowledge
        </h1>

        {/* 品牌定位 / 副标题 */}
        <p className="text-lg text-default-600 pt-6">
          Insights on <strong>feng&nbsp;shui principles</strong>, layout tips, and how <strong>AI-powered analysis</strong> can help you design better spaces.
        </p>
      </div>
    </header>
  );
}