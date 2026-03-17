'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? "text-blue-500 font-bold" : "text-gray-700";

  return (
    <div className="min-h-screen bg-gray-800">
      <nav className="flex gap-4 p-4 border-b">
        <Link href="/articles" className={linkClass("/articles")}>
          Articles
        </Link>
        <Link
          href="/profile/settings"
          className={linkClass("/profile/settings")}
        >
          Settings
        </Link>
        <Link
          href="/profile/security"
          className={linkClass("/profile/security")}
        >
          Security
        </Link>
      </nav>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
