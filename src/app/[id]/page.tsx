import { getBlogPost } from "@/api/query";
import Link from "next/link";

export default async function BlogPage({ params }: PageProps) {
  const data = await getBlogPost(params.id);

  console.log("body: ", data.body);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl">{data?.title ?? "Unknown Post"}</h1>
        <Link href="/" className="ml-10 text-blue-500">
          Go Back
        </Link>
      </div>

      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    </main>
  );
}
