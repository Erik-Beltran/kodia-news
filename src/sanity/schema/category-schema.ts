import { defineType } from "sanity";

export const categorySchema = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
      title: "Lucide Icon Name",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input: string) => input.toLowerCase().replace(/ /g, "-"),
      },
    },
  ],
});
