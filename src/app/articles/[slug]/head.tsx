// app/articles/[slug]/head.tsx
import { articles } from '@/lib/data/articles';

type HeadProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: HeadProps) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: `Explore "${article.title}" — insights on modern web design, dev tools, UX trends, and strategy.`,
    openGraph: {
      title: article.title,
      description: `Explore "${article.title}" — insights on modern web design, dev tools, UX trends, and strategy.`,
      url: `https://yourdomain.com/articles/${article.slug}`,
      siteName: 'The Digital Uplift',
      locale: 'en_CA',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: `Explore "${article.title}" — insights on modern web design, dev tools, UX trends, and strategy.`,
    },
  };
}
