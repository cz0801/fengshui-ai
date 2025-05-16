// app/blog/components/BlogSidebar.tsx

import Link from 'next/link';

interface AnchorItem {
  label: string;
  href: string;
}

export default function BlogSidebar({
  about,
  featuredTitle,
  featuredSlug,
  anchors,
}: {
  about: string;
  featuredTitle: string;
  featuredSlug: string;
  anchors: AnchorItem[];
}) {
  return (
    <aside className="hidden md:block space-y-6 text-sm text-default-700 sticky top-[125px] self-start max-h-[calc(100vh-130px)] overflow-y-auto pr-2">
      {/* About Section */}
      <div>
        <h2 className="font-semibold text-lg mb-2">About This Blog</h2>
        <p className="text-default-600">{about}</p>
      </div>

      {/* Anchor Navigation */}
      {anchors.length > 0 && (
        <div>
          <h2 className="font-semibold text-lg mb-2">On This Page</h2>
          <ul className="list-disc list-inside space-y-1 text-primary">
            {anchors.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:underline">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Featured Article */}
      {featuredTitle && featuredSlug && (
        <div>
          <h2 className="font-semibold text-lg mb-2">Featured</h2>
          <Link
            href={`/blog/${featuredSlug}`}
            className="text-primary hover:underline"
          >
            {featuredTitle}
          </Link>
        </div>
      )}

      {/* CTA */}
      <div>
        <a
          href="https://www.aifengshui.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-primary text-white px-4 py-2 text-sm rounded-lg hover:bg-primary/90"
        >
          Try Our Free <br /> Feng Shui Tool →
        </a>
        {/* Back to Blog */}
        <div>
          <Link
            href="/blog"
            className="inline-block mt-4 bg-default-200 text-default-800 hover:bg-default-300 transition px-4 py-2 rounded-lg text-sm"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </aside>
  );
}