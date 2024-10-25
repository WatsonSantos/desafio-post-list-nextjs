import "@/styles/custom.css";
import Link from "next/link";

type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();
  return posts;
};

export default async function Home() {
  const posts: PostProps[] = await getPosts();
  return (
    <main className="w-full h-screen flex items-cente justify-center">
      <section className="w-full h-full container flex flex-col items-center justify-start py-10 px-4 md:p-20">
        <h1 className=" text-4xl font-bold text-red-500">Post List ✍️</h1>
        <div className="w-full lg:w-10/12 xl:w-8/12 bg-zinc-800 h-[600px] mt-20 rounded-md p-10 overflow-y-scroll space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="flex gap-2 font-bold text-xl">
              <span className="text-red-400">{post.id}.</span>
              <Link href={`/todos/${post.id}`}>
                <h1 className="text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer">
                  {post.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
