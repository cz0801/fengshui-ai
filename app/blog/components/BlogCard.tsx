// app/components/blog/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  coverImage: string;
  excerpt: string;
}

export default function BlogCard({ title, slug, date, coverImage, excerpt }: BlogCardProps) {
  return (
    <section className="break-inside-avoid border border-default-200 rounded-lg overflow-hidden">
      <Link href={`/blog/${slug}`} className="block group">
        <div className="relative w-full">
          <Image
            src={coverImage}
            alt={title}
            width={800}
            height={400}
            className="object-cover group-hover:scale-105 transition-transform duration-300 h-40"
          />
        </div>

        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold leading-snug">
            {title}
          </h2>
          <p className="text-sm text-default-400">{date}</p>
          <p className="text-sm text-default-600 leading-relaxed line-clamp-3">{excerpt}</p>
        </div>
      </Link>
    </section>
  );
}