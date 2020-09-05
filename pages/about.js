import utils from "../styles/utils.module.css";
import styles from "../styles/About.module.css";
import Navigation from "../components/navigation";
import Head from "next/head";
import Link from "next/link";

function About() {
  return (
    <div>
      <Head>
        <title>About | Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation></Navigation>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1>Hi! Nice to meet you!</h1>
            <h2>I'm Holly.</h2>
            <p>That's me, just over there in the sidebar. </p>
            <h2>I'm a developer.</h2>
            <p>
              I graduated with a bachelor's in Computer Science in 2012 from the
              University of New Haven. I started my career working on Lotus
              Notes applications, using LotusScript (basically VB6 with some
              custom libraries on top) and have worked my way up to now working
              on Sitecore sites. I've worked on some pretty snazzy sites, which
              you can see over on my{" "}
              <Link href="/experience">
                <a>Experience & Projects</a>
              </Link>{" "}
              page. I've been a backend developer mostly, professionally - but
              I'm never satisfied with my skills, and don't want to stop there.
              So, in a bid to expand my skills, I'm learning how to do more
              full-stack JavaScript development and more front-end technologies.
            </p>
            <h2>What're you learning?</h2>
            <p>
              Well, right now, I'm learning *gestures broadly at everything*{" "}
              <i>this</i>. This site is a pet project that I used to learn HTML,
              CSS, Flexbox, and NextJS (and by extension, ReactJS).
            </p>
            <p>
              My pet projects live over on the{" "}
              <Link href="/projects">
                <a>Experience & Projects</a>
              </Link>{" "}
              page, go check them out to see the random things I've done to
              practice my skills!
            </p>
            <h2>What else should I know about you?</h2>
            <p>
              I'm always looking to build cool stuff. If you think my skills and
              experience would be a fit for you, head over to my{" "}
              <Link href="/contact">
                <a>Contact</a>
              </Link>{" "}
              page and let's chat!
            </p>
          </div>
          <div className={styles.sidebar}>
            <img
              src="/images/me.jpg"
              alt="Holly in a bridesmaid dress, looking left and smiling"
              className={styles.profileImage}
            />
            <div className={styles.stats}>
              <h3>Stats!</h3>
              <ul>
                <li>
                  <label>Name:</label> <p>Holly Burinda</p>
                </li>
                <li>
                  <label>Graduated:</label>
                  <p>2012</p>
                </li>
                <li>
                  <label>Years of Professional Experience:</label>
                  <p>8</p>
                </li>
                <li>
                  <label>Likes:</label>
                  <p>
                    Roller derby, sour beer, reading, spooky stuff, knitting
                  </p>
                </li>
                <li>
                  <label>Dislikes:</label>
                  <p>Overly-complicated UX</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
