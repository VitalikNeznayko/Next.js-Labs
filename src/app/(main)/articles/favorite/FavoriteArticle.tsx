"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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

  if (!post)
    return <div className="text-gray-600 animate-pulse">Loading {id}...</div>;

  return (
    <Box className="p-6 bg-[#111827] border border-gray-800 rounded-xl mb-4">
      <Typography
        variant="caption"
        className="text-accent uppercase tracking-widest font-bold"
      >
        Favorite #{post.id}
      </Typography>
      <Typography variant="h6" className="text-white font-bold mt-2">
        {post.title}
      </Typography>
      <Typography className="text-gray-400 mt-4 text-sm leading-relaxed">
        {post.body}
      </Typography>
    </Box>
  );
}
