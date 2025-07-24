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
    title: 'Second Article H1 Title Here',
    component: articletwo,
  },
  {
    title: 'Third Article H1 Title Here',
    component: articlethree,
  },
  {
    title: 'Fourth Article H1 Title Here',
    component: articlefour,
  },
  {
    title: 'Fifth Article H1 Title Here',
    component: articlefive,
  },
  {
    title: 'Sixth Article H1 Title Here',
    component: articlesix,
  },
  {
    title: 'Seventh Article H1 Title Here',
    component: articleseven,
  },
  {
    title: 'Eighth Article H1 Title Here',
    component: articleeight,
  },
  {
    title: 'Ninth Article H1 Title Here',
    component: articlenine,
  },
  {
    title: 'Tenth Article H1 Title Here',
    component: articleten,
  },
  {
    title: 'Eleventh Article H1 Title Here',
    component: articleeleven,
  },
  {
    title: 'Twelfth Article H1 Title Here',
    component: articletwelve,
  },
  {
    title: 'Thirteenth Article H1 Title Here',
    component: articlethirteen,
  },
  {
    title: 'Fourteenth Article H1 Title Here',
    component: articlefourteen,
  },
  {
    title: 'Fifteenth Article H1 Title Here',
    component: articlefifteen,
  },
];

export const articles: ArticleMeta[] = rawArticles.map((article) => ({
  ...article,
  slug: slugify(article.title),
}));
