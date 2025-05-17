import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { Category } from "@/sanity/types";

import SideNavClient from "./SideNavClient";
import { KodiaLogo } from "../KodiaLogo";
import { CategoryWithIcon } from "@/types/sanity-extra";

const CategoriesQuery = defineQuery(`*[_type == "category"]{
  name,
  "slug": slug.current,
  "iconName":icon
  }`);

export default async function SideNavServer() {
  const categories = await client.fetch<CategoryWithIcon[]>(CategoriesQuery);
  categories.unshift({
    iconName: "home",
    name: "Home",
    slug: "/",
  });

  return (
    <div className="flex h-full flex-col p-4 bg-white rounded-md">
      <KodiaLogo />
      <SideNavClient categories={categories} />
    </div>
  );
}
