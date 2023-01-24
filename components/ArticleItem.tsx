import { ArticleType } from "@/types/types";
import Link from "next/link";

const ArticleItem = ({ article }: ArticleType) => {
  return (
    <div>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </Link>
    </div>
  );
};

export default ArticleItem;
