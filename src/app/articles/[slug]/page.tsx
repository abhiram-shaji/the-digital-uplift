import { notFound } from 'next/navigation';
import { articles } from '@/lib/data/articles';

// These params are async in Next.js 15 🛠️
interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  const Component = article.component;

  return (
    <main className="max-w-3xl mt-10 mx-auto py-12 px-4">
      <Component />
    </main>
  );
}
