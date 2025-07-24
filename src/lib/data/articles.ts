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
  {
    title: 'The Ultimate Guide to Web Design and Development in 2025',
    component: articleone,
  },
  {
    title: 'The Rise of Modern Web Design: Tools, Trends, and Techniques for 2025',
    component: articletwo,
  },
  {
    title: 'Navigating the Modern Web: A Deep Dive into Design, Development, and Digital Strategy in 2025',
    component: articlethree,
  },
  {
    title: 'The Future of Web Design and Development in 2025: Freelance, Frameworks, AI, and Everything in Between',
    component: articlefour,
  },
  {
    title: 'Web Design & Development in 2025: The Complete Landscape of Digital Craftsmanship',
    component: articlefive,
  },
  {
    title: 'The Expansive Evolution of Web Design in the Digital Era',
    component: articlesix,
  },
  {
    title: 'The Web Design Industry: Exploring the Frontier of Innovation',
    component: articleseven,
  },
  {
    title: 'The Power of Custom Web Design and CSS in Modern Ecommerce',
    component: articleeight,
  },
  {
    title: 'Freelance Web Design: Shaping the Future of Digital Presence',
    component: articlenine,
  },
  {
    title: 'HTML, CSS, and the Landscape of Modern Web Design',
    component: articleten,
  },
  {
    title: 'Modern Web Design: Elevating Digital Aesthetics and Functionality',
    component: articleeleven,
  },
  {
    title: 'The Rise of Specialized Web Design: SEO, Shopify, and UI/UX Excellence',
    component: articletwelve,
  },
  {
    title: 'The Evolution of Web Agencies: UX, Development, and Specialized Services',
    component: articlethirteen,
  },
  {
    title: 'The Ultimate Guide to Web Development, Design, and Solutions',
    component: articlefourteen,
  },
  {
    title: 'Comprehensive Guide to Website Development and Design: Navigating the World of Web Solutions',
    component: articlefifteen,
  },
];

export const articles: ArticleMeta[] = rawArticles.map((article) => ({
  ...article,
  slug: slugify(article.title),
}));
