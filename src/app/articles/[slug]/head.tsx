// app/articles/[slug]/head.tsx
import type { Metadata } from 'next';
import { articles } from '@/lib/data/articles';

type HeadProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: HeadProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: `Explore "${article.title}" — insights on modern web design, dev tools, UX trends, and strategy.`,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: `Explore "${article.title}" — insights on modern web design, dev tools, UX trends, and strategy.`,
      url: `https://yourdomain.com/articles/${article.slug}`,
      siteName: 'The Digital Uplift',
      locale: 'en_CA',
      type: 'article',
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: `Explore "${article.title}" — insights on modern web design, dev tools, UX trends, and strategy.`,
    },
    alternates: {
      canonical: `https://yourdomain.com/articles/${article.slug}`,
    },
  };
}
