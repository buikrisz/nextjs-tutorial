export type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type HomeType = {
  articles: Article[];
};

export type ArticleType = {
  article: Article;
};
