import { defineType } from "sanity";

export const articleSchema = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) => input.toLowerCase().replace(/ /g, "-"),
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
});
