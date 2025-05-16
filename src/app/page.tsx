import { Metadata } from "next";
import LatestArticles from "@/components/LatestArticles";

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Kodia News",
};

export default async function Home() {
  return (
    <main className="flex  flex-col p-4 h-full rounded-md bg-white gap-y-6">
      <h1 className="text-4xl font-bold text-black">Latest News</h1>
      <LatestArticles />
    </main>
  );
}
