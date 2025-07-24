// app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { articles } from '@/lib/data/articles';

type PageProps = {
  params: { slug: string };
};

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  const Component = article.component;

  return (
    <main className="min-h-screen py-16 px-6">
      <Component />
    </main>
  );
}
