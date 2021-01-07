import Head from "next/head";
import Navigation from "../components/navigation";
import styles from "../styles/Projects.module.css";
import utils from "../styles/utils.module.css";
import Link from "next/link";

function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
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
                <h3>University of Chicaco Medicine - Forefront</h3>
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
                  This was a blog style website built for the University of
                  Chicago Medicine. I wrote all of the backend code for the
                  website, including dynamic taxonomy functionality and dynamic
                  topic feeds with intelligent search result prioritization.
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
                  This was a website redesign for the University of Chicago
                  Medicine. I was the tech lead on the project, meaning that I
                  was responsible for architectural decisions and ensuring that
                  the work was complete. I also did most of the code development
                  across the site.
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
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;
