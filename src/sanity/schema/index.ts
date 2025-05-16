import { articleSchema } from "./article-schema";
import { authorSchema } from "./author-schema";
import { categorySchema } from "./category-schema";

export const schema = {
  types: [articleSchema, authorSchema, categorySchema],
};
