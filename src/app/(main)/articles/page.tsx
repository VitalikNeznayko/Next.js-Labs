import { Button, Card, CardContent, Typography } from "@mui/material";

type Post = {
  id: number;
  title: string;
  body: string;
};
async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
export default async function Page() {
  const posts = await getPosts();
  return (
    <div className="space-y-6 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 12).map((post) => (
          <Card
            key={post.id}
            className="border border-gray-800 text-white hover:border-primary transition-all"
          >
            <CardContent className="p-6 bg-[#111827]">
              <Typography
                variant="h6"
                className="text-white font-bold mb-2 line-clamp-1"
              >
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-400 line-clamp-3"
              >
                {post.body}
              </Typography>
              <Typography
                variant="button"
                className="text-gray-400 line-clamp-3"
              >
                <Button
                  href={`articles/${post.id}`}
                >
                  Read More →
                </Button>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
