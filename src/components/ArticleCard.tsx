import Link from "next/link";
import Image from "next/image";
import { ArticleWithAuthor } from "@/types/sanity-extra";
import { formatDate } from "@/utils/formatters";

interface ArticleCardProps {
  article: ArticleWithAuthor;
}

export default function ArticleCard({ article }: ArticleCardProps) {
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
      className="shadow-sm cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-500 &>a:hover:text-blue-500"
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
            href={`categories/${categorySlug}`}
            className="text-sm font-bold text-blue-600 hover:underline"
          >
            {categoryName}
          </Link>

          <h3 className="text-md md:text-xl font-bold line-clamp-2 h-14 text-black">
            {title}
          </h3>
          <p className="text-sm md:text-md font-medium line-clamp-2 flex-1">
            {description}
          </p>
          <Link href={`/article/${slug}`}>
            <p className="text-xs md:text-md font-medium hover:text-blue-600 mb-2">
              Read More
            </p>
          </Link>
        </div>
        <div className="text-xs flex justify-between items-end">
          <span className="text-xs">{formatDate(_createdAt)}</span>
          <div className="flex flex-col items-center ">
            <Image
              src={authorImage}
              alt={authorImage}
              width={30}
              height={30}
              className="rounded-full aspect-square"
              loading="lazy"
            />
            <Link
              className="hover:text-blue-500 hover:underline"
              href={`author/${authorSlug}`}
            >{`By ${authorName}`}</Link>
          </div>
        </div>
      </div>
    </li>
  );
}
