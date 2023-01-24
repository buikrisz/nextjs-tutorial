import { articles } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";

type NewArticle = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewArticle | { message: string }>
) {
  const {
    query: { id },
  } = req;

  const filtered = articles.filter((article) => article.id === id);

  if (filtered?.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found.` });
  }
}
