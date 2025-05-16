import { PortableTextBlock } from "next-sanity";

export type ArticleWithAuthor = {
  slug: string;
  imageUrl: string;
  title: string;
  categoryName: string;
  categorySlug: string;
  description: string;
  altImage: string;
  _createdAt: string;
  _id: string;
  authorName: string;
  authorSlug: string;
  authorImage: string;
};

export type ArticleByAuthor = ArticleWithAuthor & {
  authorBio?: string;
};

export type ArticleContent = ArticleWithAuthor & {
  content: PortableTextBlock[];
  tags: string[];
};
