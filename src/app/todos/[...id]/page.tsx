type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const gePost = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: PostProps = await response.json();
  return post;
};

export default async function SinglePostPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const post: PostProps = await gePost(id);
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="w-full h-full container flex flex-col items-center justify-center py-10 px-4 md:p-20">
        <h1 className=" text-4xl font-bold text-red-500 uppercase text-center">{post.title}</h1>
        <p className="pt-10 text-zinc-400">{post.body}</p>
      </section>
    </main>
  );
}
