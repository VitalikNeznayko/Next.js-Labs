"use client";
import FavoriteArticle from "./FavoriteArticle";

export default function Page() {
  return (
    <div className="space-y-4">
      <FavoriteArticle id={1} />
      <FavoriteArticle id={5} />
      <FavoriteArticle id={10} />
    </div>
  );
}
