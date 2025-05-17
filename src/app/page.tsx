import { Metadata } from "next";
import LatestArticles from "@/components/LatestArticles";

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Kodia News",
};

export default async function Home() {
  return (
    <main className="flex  flex-col h-full rounded-md  gap-y-6">
      <h1 className="text-4xl font-bold text-black bg-white rounded-md p-4">
        Latest News
      </h1>
      <LatestArticles />
    </main>
  );
}
