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
}

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');

const rawArticles = [
  { title: 'Web Design & Dev', component: articleone },
  { title: 'Modern Design Tools', component: articletwo },
  { title: 'Web Strategy Deep Dive', component: articlethree },
  { title: 'Future of Web', component: articlefour },
  { title: 'Digital Craft', component: articlefive },
  { title: 'Web Design Evolution', component: articlesix },
  { title: 'Web Innovation Frontier', component: articleseven },
  { title: 'Custom Design in Ecommerce', component: articleeight },
  { title: 'Freelance Design Future', component: articlenine },
  { title: 'HTML & CSS Today', component: articleten },
  { title: 'Modern Design & Function', component: articleeleven },
  { title: 'Specialized SEO & UX', component: articletwelve },
  { title: 'Web Agency Evolution', component: articlethirteen },
  { title: 'Dev & Design Guide', component: articlefourteen },
  { title: 'Web Solutions Overview', component: articlefifteen },
];


export const articles: ArticleMeta[] = rawArticles.map((article) => ({
  ...article,
  slug: slugify(article.title),
}));
