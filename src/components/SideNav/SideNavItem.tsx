import Link from "next/link";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

import { Category } from "@/sanity/types";

export default function SideNavItem({ name, slug, icon }: Category) {
  return (
    <Link
      key={name}
      href={slug?.current || "/"}
      className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 mb-2"
    >
      <DynamicIcon name={icon as IconName} />
      <p>{name}</p>
    </Link>
  );
}
