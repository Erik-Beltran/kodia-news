import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  image: string;
  slug: string;
  name: string;
}

export default function AuthorCard({ image, name, slug }: AuthorCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={30}
        height={30}
        className="rounded-full aspect-square"
        loading="lazy"
      />
      <Link
        className="hover:text-blue-500 hover:underline cursor-pointer text-xs"
        href={`/author/${slug}`}
      >{`By ${name}`}</Link>
    </div>
  );
}
