import Image from "next/image";
import { client } from "@/sanity/client";
import { defineQuery, PortableText } from "next-sanity";

import { ArticleWithAuthor } from "@/types/sanity-extra";
import ArticleCard from "@/components/ArticleCard";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const ArticleByCategory = defineQuery(
  `*[_type == "article"  && references(*[_type == "category" && slug.current == $slug]._id)]{
    _id,
    _createdAt,
    "categoryName":category->name,
    "categorySlug":category->slug.current,
    description,
    "imageUrl": image.asset->url,
    "altImage": image.alt,
    title,
    "slug": slug.current,
    "authorName":author->name,
    "authorSlug":author->slug.current,
    "authorImage":author->image.asset->url,
  }`
);

export default async function CategoryPage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const articles = await client.fetch<ArticleWithAuthor[]>(ArticleByCategory, {
    slug,
  });

  return (
    <main className="flex  flex-col p-4 h-full rounded-md bg-white gap-y-6 flex-1">
      <h1 className="text-4xl font-bold text-black">
        {articles[0].categoryName}
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8  overflow-y-auto">
        {articles.map((article) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </ul>
    </main>
  );
}
