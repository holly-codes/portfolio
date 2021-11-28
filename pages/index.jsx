import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';

const Home = function() {
  const pageName = "Home";
  return (
    <div className={styles.homeContainer}> 
      <Layout pageName={pageName} showFooter={false}>
          <h1 className={styles.title}>Hi! I&apos;m Holly.</h1>
          <h2 className={styles.subtitle}>Let&apos;s build something together.</h2>
      </Layout>
    </div>
  );
}

export default Home;