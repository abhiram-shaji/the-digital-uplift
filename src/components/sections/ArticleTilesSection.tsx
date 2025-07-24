'use client';

import Link from 'next/link';
import { articles } from '@/lib/data/articles';

export default function ArticleTilesSection() {
  return (
    <section className="px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {articles.map(({ title, slug }) => (
          <Link
            key={slug}
            href={`/articles/${slug}`}
            className="block px-3 py-2 text-sm font-medium text-center border border-gray-300 rounded dark:hover:bg-gray-900 hover:bg-gray-100 transition"
          >
            {title}
          </Link>
        ))}
      </div>
    </section>
  );
}
