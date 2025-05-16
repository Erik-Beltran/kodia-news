import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { Category } from "@/sanity/types";

import SideNavClient from "./SideNavClient";
import { KodiaLogo } from "../KodiaLogo";

const CategoriesQuery = defineQuery(`*[_type == "category"]`);

export default async function SideNavServer() {
  const categories = await client.fetch<Category[]>(CategoriesQuery);

  return (
    <div className="flex h-full flex-col p-4">
      <KodiaLogo />
      <SideNavClient categories={categories} />
    </div>
  );
}
