"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Menu.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Link
          href="/articles/favorite"
          className={linkClass("/articles/favorite")}
        >
          Favorite
        </Link>
        <Link href="/articles/create" className={linkClass("/articles/create")}>
          Create
        </Link>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
