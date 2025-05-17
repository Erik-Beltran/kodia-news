"use client";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { ArticleWithAuthor } from "@/types/sanity-extra";

const HomepageQuery =
  defineQuery(`*[_type == "article"] | order(_createdAt desc)[0...6]{
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
  }`);

export default function LatestArticles() {
  const [articles, setArticles] = useState<ArticleWithAuthor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch<ArticleWithAuthor[]>(HomepageQuery);
      setArticles(data);
    };

    fetchData();
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8  overflow-y-auto">
      {articles.map((article) => (
        <ArticleCard article={article} key={article._id} />
      ))}
    </ul>
  );
}
