import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
