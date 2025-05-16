import Image from "next/image";
import { client } from "@/sanity/client";
import { defineQuery, PortableText } from "next-sanity";

import { ArticleContent } from "@/types/sanity-extra";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const ArticleBySlugQuery = defineQuery(
  `*[_type == "article" && slug.current == $slug][0]{
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
    content,
    tags
  }`
);

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article: ArticleContent = await client.fetch(ArticleBySlugQuery, {
    slug,
  });

  const { imageUrl, title, content, tags } = article;

  return (
    <div className="flex flex-col lg:max-w-[1114px] overflow-y-auto gap-y-4 h-full pb-5">
      <div className="bg-white h-full rounded-md p-4">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={100}
          loading="lazy"
          className="rounded-md w-full aspect-video"
        />
        <h2 className="font-bold text-2xl text-black">{title}</h2>
      </div>

      <div className="flex flex-col gap-x-8 lg:flex-row gap-y-4">
        <div className="rounded-md bg-white p-4 flex-1 flex flex-col gap-y-3 h-auto">
          <PortableText value={content} />
        </div>
        <aside className="rounded-md bg-white lg:w-[20%] p-4">
          <h5 className="font-bold text-black mb-2">Tags</h5>
          <ul className="flex flex-wrap gap-x-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-gray-400/5 rounded-md text-xs p-2 mb-2"
              >
                {tag}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
