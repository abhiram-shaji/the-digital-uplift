'use client';

import Link from 'next/link';
import { articles } from '@/lib/data/articles';
import { Card, CardContent } from '@/components/ui/card';

export default function ArticleTilesSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {articles.map(({ title, slug }) => (
          <Link key={slug} href={`/articles/${slug}`}>
            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
              <CardContent className="p-1 text-center text-sm font-medium">
                {title}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
