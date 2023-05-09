import { getBlogPaths } from "@/api/query";
import Link from "next/link";

export default async function Home() {
  const data = await getBlogPaths();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <h1 className="text-2xl mb-7">Blog Posts</h1>
        <div className="flex gap2">
          {data.map((path) => {
            return (
              <Link
                href={`/${path.id}`}
                key={path.id}
                className="rounded-xl bg-gray-300 text-black p-4 hover:bg-slate-400 hover:text-white ml-4"
              >
                {path.title}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
