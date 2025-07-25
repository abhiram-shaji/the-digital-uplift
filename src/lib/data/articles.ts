import articleone from './article/articleone';
import articletwo from './article/articletwo';
import articlethree from './article/articlethree';
import articlefour from './article/articlefour';
import articlefive from './article/articlefive';
import articlesix from './article/articlesix';
import articleseven from './article/articleseven';
import articleeight from './article/articleeight';
import articlenine from './article/articlenine';
import articleten from './article/articleten';
import articleeleven from './article/articleeleven';
import articletwelve from './article/articletwelve';
import articlethirteen from './article/articlethirteen';
import articlefourteen from './article/articlefourteen';
import articlefifteen from './article/articlefifteen';
import { JSX } from 'react';

export interface ArticleMeta {
  title: string;
  slug: string;
  component: () => JSX.Element;
  tags: string[];
}

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');

const rawArticles = [
  {
    title: 'Web Design & Dev',
    component: articleone,
    tags: ['web design', 'development', 'business'],
  },
  {
    title: 'Modern Design Tools',
    component: articletwo,
    tags: ['design tools', 'web trends', 'coding'],
  },
  {
    title: 'Web Strategy Deep Dive',
    component: articlethree,
    tags: ['strategy', 'UX', 'performance'],
  },
  {
    title: 'Future of Web',
    component: articlefour,
    tags: ['future', 'web development', 'innovation'],
  },
  {
    title: 'Digital Craft',
    component: articlefive,
    tags: ['digital craft', 'custom design', 'branding'],
  },
  {
    title: 'Web Design Evolution',
    component: articlesix,
    tags: ['evolution', 'ui', 'ux'],
  },
  {
    title: 'Web Innovation Frontier',
    component: articleseven,
    tags: ['innovation', 'frontier', 'modern web'],
  },
  {
    title: 'Custom Design in Ecommerce',
    component: articleeight,
    tags: ['ecommerce', 'custom design', 'shopping'],
  },
  {
    title: 'Freelance Design Future',
    component: articlenine,
    tags: ['freelance', 'web design', 'future'],
  },
  {
    title: 'HTML & CSS Today',
    component: articleten,
    tags: ['html', 'css', 'modern'],
  },
  {
    title: 'Modern Design & Function',
    component: articleeleven,
    tags: ['design', 'function', 'usability'],
  },
  {
    title: 'Specialized SEO & UX',
    component: articletwelve,
    tags: ['SEO', 'UX', 'accessibility'],
  },
  {
    title: 'Web Agency Evolution',
    component: articlethirteen,
    tags: ['agency', 'evolution', 'digital'],
  },
  {
    title: 'Dev & Design Guide',
    component: articlefourteen,
    tags: ['development', 'design', 'guide'],
  },
  {
    title: 'Web Solutions Overview',
    component: articlefifteen,
    tags: ['web solutions', 'overview', 'services'],
  },
];


export const articles: ArticleMeta[] = rawArticles.map((article) => ({
  ...article,
  slug: slugify(article.title),
}));
