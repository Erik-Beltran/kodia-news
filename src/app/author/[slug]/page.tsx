import ArticleCard from "@/components/ArticleCard";
import { client } from "@/sanity/client";
import { ArticleByAuthor } from "@/types/sanity-extra";
import { defineQuery } from "next-sanity";
import Image from "next/image";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

const ArticlesByAuthor = defineQuery(
  `*[_type == "article"  && references(*[_type == "author" && slug.current == $slug]._id)] | order(_createdAt desc)
  {
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
    "authorBio":author->bio,
  }`
);
export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;

  const articles = await client.fetch<ArticleByAuthor[]>(ArticlesByAuthor, {
    slug,
  });

  return (
    <main className="flex flex-col p-4 h-full rounded-md bg-white gap-y-6 flex-1">
      <div className="lg:max-w-[1114px] mx-auto flex items-center gap-x-10">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-black">
            {articles[0].authorName}
          </h2>
          <p className="block max-md:text-sm">{articles[0].authorBio}</p>
        </div>
        <Image
          src={articles[0].authorImage}
          alt={articles[0].authorImage}
          width={200}
          height={200}
          className="rounded-full aspect-square block max-md:w-24 h-auto"
          loading="lazy"
        />
      </div>
      <h3 className="text-4xl font-bold text-black">Articles</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8  overflow-y-auto">
        {articles.map((article) => (
          <ArticleCard article={article} key={article._id} showAuthor={false} />
        ))}
      </ul>
    </main>
  );
}
