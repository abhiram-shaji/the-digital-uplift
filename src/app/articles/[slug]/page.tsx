import { notFound } from 'next/navigation';
import { articles } from '@/lib/data/articles';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  const Component = article.component;

  return (
    <main className="max-w-3xl mt-10 mx-auto py-12 px-4">
      <Component />
    </main>
  );
}
