import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import utils from "../styles/utils.module.css";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <Navigation></Navigation>
      <main className={styles.main}>
        <img
          src="/images/home-hero-2.jpeg"
          alt="a hand holding lavender near a black candle"
        ></img>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Hi! I'm Holly.</h1>
          <h2 className={styles.subtitle}>Let's build something together.</h2>
        </div>
      </main>
    </div>
  );
}
