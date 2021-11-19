import utils from "../styles/utils.module.scss";
import styles from "../styles/About.module.scss";
import Layout from "../components/layout";
import Link from "next/link";

function About() {
  return (
    <Layout pageName="About" showFooter="true">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <img
              src="/images/me.jpg"
              alt="Holly in a bridesmaid dress, looking left and smiling"
              className={styles.profileImage}
            />
            <h1>Hi! Nice to meet you!</h1>
            <h2>I'm Holly.</h2>
            <p>You probably knew that, though, since you ended up here.</p>
            <h2>I'm a developer.</h2>
            <p>
              I graduated with a bachelor's in Computer Science in 2012 from the
              University of New Haven. I started my career working on Lotus
              Notes applications, using LotusScript (basically VB6 with some
              custom libraries on top) and have worked my way up to now working
              on Sitecore sites. I've worked on some pretty snazzy sites, which
              you can see over on my{" "}
              <span className={utils.magicalUnderline}>
                <Link href="/projects">
                  <a>Experience & Projects</a>
                </Link>
              </span>{" "}
              page. I've been a backend developer mostly, professionally - but
              I'm never satisfied with my skills, and don't want to stop there.
              So, in a bid to expand my skills, I'm learning how to do more
              full-stack JavaScript development and more front-end technologies.
            </p>
            <h2>What am I learning?</h2>
            <p>
              Well, right now, I'm learning *gestures broadly at everything*{" "}
              <i>this</i>. This site is a pet project that I used to learn HTML,
              CSS, Flexbox, and NextJS (and by extension, ReactJS).
            </p>
            <p>
              My pet projects live over on the{" "}
              <span className={utils.magicalUnderline}>
                <Link href="/projects">
                  <a>Experience & Projects</a>
                </Link>
              </span>{" "}
              page, go check them out to see the random things I've done to
              practice my skills!
            </p>
            <h2>What else should you know about me?</h2>
            <p>
              I'm always looking to build cool stuff. I'm constantly learning
              and working to better myself, and I have a passion for building
              cool stuff that is easy to use. If you think my skills and
              experience would be a fit for you, head over to my{" "}
              <span className={utils.magicalUnderline}>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </span>{" "}
              page and let's chat!
            </p>
          </div>
        </div>
      </Layout>
  );
}

export default About;
