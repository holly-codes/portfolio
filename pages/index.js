import Layout from '../components/layout';
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <img
        src="/images/home-hero-2.jpeg"
        alt="a hand holding lavender near a black candle"
      ></img>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Hi! I'm Holly.</h1>
        <h2 className={styles.subtitle}>Let's build something together.</h2>
      </div>
    </Layout>
  );
}
