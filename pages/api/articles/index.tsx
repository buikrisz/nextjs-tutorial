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
  res: NextApiResponse<NewArticle[]>
) {
  res.status(200).json(articles);
}
