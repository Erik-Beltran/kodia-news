import Link from "next/link";
import Image from "next/image";

import AuthorCard from "./AuthorCard";

import { ArticleWithAuthor } from "@/types/sanity-extra";
import { formatDate } from "@/utils/formatters";

interface ArticleCardProps {
  article: ArticleWithAuthor;
  showAuthor?: boolean;
}

export default function ArticleCard({
  article,
  showAuthor = true,
}: ArticleCardProps) {
  const {
    _createdAt,
    _id,
    altImage,
    categoryName,
    categorySlug,
    description,
    imageUrl,
    slug,
    title,
    authorImage,
    authorName,
    authorSlug,
  } = article;
  return (
    <li
      key={_id}
      className="shadow-sm rounded-md   hover:bg-gray-200 transition-all duration-300 text-gray-500 bg-white"
    >
      <Image
        src={imageUrl}
        alt={altImage || title}
        width={400}
        height={400}
        className="rounded-t-md h-[200px] w-full object-cover"
      />

      <div className="px-3 py-4 flex flex-col gap-2 md:gap-3 flex-1">
        <div className="flex justify-between border-b flex-col gap-2 border-gray-500">
          <Link
            href={`/category/${categorySlug}`}
            className="text-sm font-bold text-blue-600 hover:underline cursor-pointer"
          >
            {categoryName}
          </Link>

          <>
            <Link href={`/article/${slug}`}>
              <h3 className="text-md md:text-xl font-bold line-clamp-2 h-14 text-black">
                {title}
              </h3>
              <p className="text-sm md:text-md font-medium line-clamp-2 flex-1 my-2">
                {description}
              </p>
              <p className="text-xs md:text-md font-medium hover:text-blue-600 mb-2">
                Read More
              </p>
            </Link>
          </>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-xs">{formatDate(_createdAt)}</span>
          {showAuthor && (
            <AuthorCard
              image={authorImage}
              name={authorName}
              slug={authorSlug}
            />
          )}
        </div>
      </div>
    </li>
  );
}
