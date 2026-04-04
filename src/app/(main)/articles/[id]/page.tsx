async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log("fetching post", id);
  return res.json();
}

async function getComments(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getComments(id);

  return (
    <div className="space-y-6">
      <div className="border p-4 rounded">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-400 mt-2">{post.body}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Comments</h2>

        <div className="space-y-3">
          {comments.map((comment: any) => (
            <div key={comment.id} className="border p-3 rounded">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-sm text-gray-500">{comment.email}</p>
              <p className="mt-1">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
