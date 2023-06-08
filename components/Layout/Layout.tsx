import { FC } from "react";
import Link from "next/link";

import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}></header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>
              <Link href="/list/liked">Liked it</Link>
            </li>
            <li>
              <Link href="/list/done">Done it</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
