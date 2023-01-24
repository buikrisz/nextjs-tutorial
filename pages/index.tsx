import Article from "@/components/Article";
import { server } from "@/config";
import Head from "next/head";

type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type HomeType = {
  articles: Article[];
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles: string[] = await res.json();

  return {
    props: { articles },
  };
};

/* export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  const articles: string[] = await res.json();

  return {
    props: { articles },
  };
}; */

export default function Home({ articles }: HomeType) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>NextJs Course</title>
        <meta name="keywords" content="web dev, programming" />
      </Head>
      <Article articles={articles} />
    </div>
  );
}
