import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { visionTool } from "@sanity/vision";

import { schema } from "@/sanity/schema";
import { projectId, dataset } from "@/sanity/environment";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Kodia Test",
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  projectId,
  dataset,
  schema,
});
