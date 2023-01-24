import { HomeType } from "@/types/types";
import ArticleItem from "./ArticleItem";

const Article = ({ articles }: HomeType) => {
  return (
    <div>
      {articles.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </div>
  );
};

export default Article;
