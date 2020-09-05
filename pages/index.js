import Head from "next/head";
import styles from "../styles/Home.module.css";
import utils from "../styles/utils.module.css";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <div className={utils.container}>
      <Head>
        <title>Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation></Navigation>
        <h1 className={styles.title}>Hi! I'm Holly.</h1>
        <h2 className={styles.subtitle}>Let's build something together.</h2>
      </main>
    </div>
  );
}
