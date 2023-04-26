import { FC } from "react";
import styles from "./Layout.module.css";
// import { AppPropsWithLayout } from "../../_app";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}></header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
