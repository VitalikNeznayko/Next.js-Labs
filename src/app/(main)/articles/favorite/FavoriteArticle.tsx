"use client";

import { useEffect, useState } from "react";

type Props = {
  id: number;
};

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function FavoriteArticle({ id }: Props) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, [id]);

  if (!post) return <div>Loading {id}...</div>;

  return (
    <div className="border p-4 rounded">
      <p>id: {post.id}</p>
      <p>userId: {post.userId}</p>
      <h2 className="font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
