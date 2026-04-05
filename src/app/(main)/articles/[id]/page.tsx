import { Box, Typography } from "@mui/material";
type params = { params: { id: string } };

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

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
  }));
}

export default async function Page({ params }: params) {
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getComments(id);

  return (
    <div className="mx-auto space-y-12 py-10">
      <Box className="border-b border-gray-800 pb-10">
        <Typography variant="h4" className="text-white font-bold mb-6">
          {post.title}
        </Typography>
        <Typography className="text-gray-400 text-lg">{post.body}</Typography>
      </Box>

      <div className="space-y-6">
        <Typography variant="h6" className="text-accent font-bold">
          Comments
        </Typography>
        {comments.map((comment: any) => (
          <Box
            key={comment.id}
            className="p-5 bg-[#111827] border-l-2 border-primary rounded-r-lg"
          >
            <Typography className="text-primary font-semibold text-sm">
              {comment.email}
            </Typography>
            <Typography className="text-white mt-2">{comment.body}</Typography>
          </Box>
        ))}
      </div>
    </div>
  );
}
