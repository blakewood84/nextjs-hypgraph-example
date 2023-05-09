import { getBlogPost } from "@/api/query";

export default async function BlogPage({ params }: PageProps) {
  const data = await getBlogPost(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{data?.title ?? "Hello"}</h1>
    </main>
  );
}
