import { Suspense } from "react";
import FavoriteArticle from "./FavoriteArticle";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading 1...</div>}>
        <FavoriteArticle id={1} />
      </Suspense>

      <Suspense fallback={<div>Loading 2...</div>}>
        <FavoriteArticle id={5} />
      </Suspense>

      <Suspense fallback={<div>Loading 3...</div>}>
        <FavoriteArticle id={10} />
      </Suspense>
    </div>
  );
}
