import React from 'react';
import Link from 'next/link';
import utils from '../styles/utils.module.scss';
import styles from '../styles/About.module.scss';
import Layout from '../components/layout';

const About = function() {
  return (
    <Layout pageName="About" showFooter>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <img
              src="/images/me.jpg"
              alt="Holly in a bridesmaid dress, looking left and smiling"
              className={styles.profileImage}
            />
            <h1>Hi! Nice to meet you!</h1>
            <h2>I&apos;m Holly.</h2>
            <p>You probably knew that, though, since you ended up here. Let&apos;s get to know each other!</p>
            <h2>I&apos;m a developer.</h2>
            <p>
              I graduated with a bachelor&apos;s in Computer Science in 2012 from the
              University of New Haven. I started my career working on Lotus
              Notes applications, using LotusScript (basically VB6 with some
              custom libraries on top) and have worked my way up to now working
              on React sites. I&apos;ve worked on some pretty snazzy sites, which
              you can see over on my{" "}
              <span className={utils.magicalUnderline}>
                <Link href="/projects">
                  Experience &amp; Projects
                </Link>
              </span>{" "}
              page. I started my career as a backend developer by trade, then spent the better part of 
              5 years learning more frontend skills on my own and then pivoted to be a fullstack developer. 
              Now, I spend my days working in a frontend engineer role at Trello, and I absolutely love the 
              new challenges that this role brings. I&apos;ve spent the last 2 years professionally growing,
              keeping my skills honed, so that I can build the best possible products with the best possible
              experiences.
            </p>
            <h2>What am I learning?</h2>
            <p>
              Well, right now, I&apos;m learning *gestures broadly at this site*{" "}
              <i>this</i>. This site uses HTML,
              SASS, Flexbox, GraphQL, and NextJS (and by extension, ReactJS).
            </p>
            <p>
              This site is a placeholder, and I&apos;m currently redoing the design (and code!) to be more in line with my 
              current skillset. Keep an eye out for an updated design and updated code stack! Specifically, since this site is 
              a couple of years old, I will be rewriting this in TypeScript, will make use of React hooks and better use of functional
              components, and will be modernizing the CSS.
            </p>
            <p>
              My pet projects live over on the{" "}
              <span className={utils.magicalUnderline}>
                <Link href="/projects">
                  Experience &amp; Projects
                </Link>
              </span>{" "}
              page, go check them out to see the random things I&apos;ve done to
              practice my skills!
            </p>
            <h2>What else should you know about me?</h2>
            <p>
              I&apos;m always looking to build cool stuff. I&apos;m constantly learning
              and working to better myself, and I have a passion for building
              cool stuff that is easy to use. If you think my skills and
              experience would be a fit for you, {" "}
              <span className={utils.magicalUnderline}>
                <Link href="mailto:hello@holly-codes.com">
                  email me
                </Link>
              </span>{" "}
              and let&apos;s chat!
            </p>
          </div>
        </div>
      </Layout>
  );
}

export default About;
