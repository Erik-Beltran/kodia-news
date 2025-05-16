import { BookType, Newspaper, User } from "lucide-react";
import { StructureBuilder, StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S: StructureBuilder) => {
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Articles")
        .icon(Newspaper)
        .child(
          S.documentList()
            .title("Articles")
            .filter("_type == $type")
            .params({ type: "article" })
        ),
      S.divider(),
      S.listItem()
        .title("Authors")
        .icon(User)
        .child(
          S.documentList()
            .title("Authors")
            .filter("_type == $type")
            .params({ type: "author" })
        ),
      S.divider(),
      S.listItem()
        .title("Categories")
        .icon(BookType)
        .child(
          S.documentList()
            .title("Categories")
            .filter("_type == $type")
            .params({ type: "category" })
        ),
    ]);
};
