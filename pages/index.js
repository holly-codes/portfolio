import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const pageName = "Home";
  return (
    <div className={styles.homeContainer}>
      <Layout pageName={pageName} showFooter={false}>
          <h1 className={styles.title}>Hi! I'm Holly.</h1>
          <h2 className={styles.subtitle}>Let's build something together.</h2>
      </Layout>
    </div>
  );
}