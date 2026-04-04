type Props = {
  id: number;
};

async function getPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function FavoriteArticle({ id }: Props) {
  const post = await getPost(id);

  return (
    <div className="border p-4">
      <p>id: {post.id}</p>
      <p>userId: {post.userId}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
