import Head from "next/head";
import Navigation from "../components/navigation";
import styles from "../styles/Projects.module.css";
import Footer from "../components/footer";
import utils from "../styles/utils.module.css";
import Link from "next/link";

function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Holly Codes</title>
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

      <main>
        <Navigation></Navigation>
        <div className={styles.content}>
          <h1>Projects</h1>
          <span className={utils.dashedHeader}>
            <h2>Past Professional Projects</h2>
          </span>
          <div className={styles.projectsContainer}>
            <div className={styles.projectCard}>
              <img
                src="/images/forefront.png"
                alt="Screenshot of UChicago Medicine Forefront page"
              />
              <div className={styles.projectInfo}>
                <h3>University of Chicago Medicine - Forefront</h3>
                <span className={utils.magicalUnderline}>
                  <Link href="https://www.uchicagomedicine.org/forefront">
                    <a>Website</a>
                  </Link>
                </span>
                <h4>Technologies Used:</h4>
                <ul className={styles.technologies}>
                  <li>Sitecore 8.2</li>
                  <li>Glass.Mapper</li>
                  <li>TDS</li>
                  <li>C#.NET</li>
                </ul>
                <p>
                  The Forefront Website (contained within the Website 2.0
                  experience, explained below) is a content hub/blog website
                  built on the Sitecore CMS. Nearly every element of this
                  website was built by me, aside from the site-wide search
                  functionality. The website is designed to allow content
                  authors to add new article items, then categorize them into a
                  primary “channel” which acts as a feed for all of the articles
                  that are tagged with the corresponding taxonomy tag.
                </p>
                <p>
                  I used TDS for serialization and version control of Sitecore
                  items, together with Glass.Mapper to allow for strongly-typed
                  code within the Sitecore rendering code behind files. We used
                  a semi-agile process, including daily standup meetings and
                  weekly project lead meetings similar to prioritization and
                  estimation meetings. I used Git version control to allow for
                  easier and more comprehensive branching, and used Jenkins to
                  manage builds for each environment. Additionally, upon project
                  completion, was in process of implementing new Jira process
                  and process for Jira and Bitbucket/Git to enable
                  co-development with client developers.
                </p>
              </div>
            </div>
            <div className={styles.projectCard}>
              <img
                src="/images/ucm-home.png"
                alt="Screenshot of UChicago Medicine homepage"
              />
              <div className={styles.projectInfo}>
                <h3>University of Chicago Medicine</h3>
                <span className={utils.magicalUnderline}>
                  <Link href="https://www.uchicagomedicine.org">
                    <a>Website</a>
                  </Link>
                </span>
                <h4>Technologies Used:</h4>
                <ul className={styles.technologies}>
                  <li>Sitecore 8.2</li>
                  <li>Glass.Mapper</li>
                  <li>TDS</li>
                  <li>C#.NET</li>
                </ul>
                <p>
                  The Website 2.0 project was a massive redesign of the current
                  UChicago Medicine main website. This included a suite of
                  search tools (for physicians, conditions, and locations, as
                  well as a site-wide search tool), physician profiles, a
                  scheduled physician data ingestion process, and over a dozen
                  content display modules. I was the technical lead and site
                  architect for this project, which entailed overseeing two
                  other developers and architecting both the content authoring
                  experience and the functional user experience of the frontend
                  of the website.
                </p>
              </div>
            </div>
          </div>
          <span className={utils.dashedHeader}>
            <h2>Personal/Pet Projects</h2>
          </span>
          <div className={styles.projectsContainer}>
            <div className={styles.projectCard}>
              <img
                src="/images/holly-codes.png"
                alt="Screenshot of holly-codes.com homepage"
              />
              <div className={styles.projectInfo}>
                <h3>holly-codes.com</h3>
                <span className={utils.magicalUnderline}>
                  <Link href="https://www.holly-codes.com">
                    <a>Website</a>
                  </Link>
                </span>
                <br />
                <span className={utils.magicalUnderline}>
                  <Link href="https://github.com/holly-codes/portfolio">
                    <a>GitHub</a>
                  </Link>
                </span>
                <h4>Technologies Used:</h4>
                <ul className={styles.technologies}>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>NextJS</li>
                  <li>Flexbox</li>
                </ul>
                <p>
                  I decided to create this website both as a way to display my
                  skills and a way to have a project to practice on. I knew I
                  wanted to work on my HTML and CSS skills, but also wanted to
                  incorporate a framework like ReactJS or NextJS. I chose NextJS
                  because I liked the preloading functionality as well as the
                  built-in routing.
                </p>
                <p>
                  This website also gave me a chance to work on my responsive
                  site coding and design skills, which is definitely something
                  I've never done before this, since I've been a career-long
                  backend developer. This was a real challenge to build for me,
                  and really pushed me out of my comfort zone.
                </p>
                <p>
                  As I'm sure you can guess, my design skills were another thing
                  I wanted to practice while building this site. I took
                  inspiration from a shot I found on dribbble for the homepage,
                  then used the aesthetic on the homepage to create the rest.
                  I'm sure that it's not the flashiest or best design, but I'm
                  working on improving my design skills as well.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default Projects;
