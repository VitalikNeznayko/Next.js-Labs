
export default function FavoriteArticles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>Favorite Articles</h1>
    </div>
  );
}