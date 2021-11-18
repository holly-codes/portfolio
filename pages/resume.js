import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styles from "../styles/Resume.module.css";
import utils from "../styles/utils.module.css";
import Link from "next/link";

function Resume() {
  return (
    <div>
      <Head>
        <title>Resume | Holly Codes</title>
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
        <div className={styles.resumeContent}>
          <h1>Resume</h1>
          <div className={styles.resumeSection}>
            <span className={utils.dashedHeader}>
              <h2>Technical Skills</h2>
            </span>
            <p>
              HTML, CSS, SASS, JavaScript, Flexbox, Git version control, Atomic Design Systems (PatternLab, Storybook), 
              Interaction Studio (formerly Evergage), GatsbyJS, NextJS, ReactJS, C#, ASP.NET MVC, WebAPI, SQL, 
              Sitecore CMS versions 8.2, 9.0, 9.1, and 9.3, Unicorn, Synthesis, Bamboo, Octopus, Azure PaaS, 
              UltraDNS administration, Hedgehog Team Development for Sitecore (TDS), Glass.Mapper, Scrum, Test-Driven Development (TDD), Jira
            </p>
            <p>
              <em>Additional certifications: </em>Sitecore 8.2 certified
              developer
            </p>
          </div>
          <div className={styles.resumeSection}>
            <span className={utils.dashedHeader}>
              <h2>Experience</h2>
            </span>
            <div className={styles.jobsContainer}>
              <div className={styles.jobCard}>
                <h3 className={styles.companyName}>iRobot Corporation</h3>
                <p>
                  <strong className={styles.jobTitle}>
                    Senior Web Developer, Digital Business
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    March 2019 to Present
                  </em>
                </p>
                <h4>Job Responsibilities</h4>
                <p>
                  I am currently a technical lead responsible for architecture and implementation of new functionality for 
                  iRobot’s system of websites worldwide. In addition, I am a developer working on iRobot’s frontend atomic design system, 
                  implementing new functionality and modifying existing functionality, using HTML, SASS, Flexbox, and JavaScript.  
                  My work also extends to our personalization and A/B testing platform, Interaction Studio, which is a CSS and JavaScript based platform. 
                  I have performed extensive revisions to our Interaction Studio sitemap, which collects attributes to be used by the platform, 
                  automatically populates catalog information for various products for use in personalization and testing efforts, 
                  and establishes content zones for use by Interaction Studio to inject content as outlined in campaigns set up in the platform.
                </p>
                <h4>Awards</h4>
                <ul className={styles.technologies}>
                  <li>
                   <em>Finance Team Excellence award winner (2021)</em> - Organizational excellence awards are peer-nominated and 
                    given once per quarter to a handful of teams and individuals in the organization for outstanding work. This award was for 
                    my team’s work in iRobot’s direct to consumer work. I did a great deal of work on this project to shore up the infrastructure to 
                    ensure that the sites could handle the increased load, as well as developed several renderings to enhance customer experience.
                  </li>
                  <li>
                      <em>Supply Chain Team Excellence award winner (2021)</em> - This is the same type of organizational award as the above. 
                      This award was given to my team for our work on the brand refresh effort, the most recent website look and feel refresh. 
                      My primary contribution on this project was CSS/SASS/JavaScript work across both the Interaction Studio and Sitecore platforms. 
                      In addition, I developed a complex horizontal accordion rendering to display product cards to users to maximize the content shown in a 
                      relatively small space, among other renderings.
                  </li>
                  <li>
                    <em>Chairman’s Award individual nominee (2021)</em> - The Chairman’s Award is a prestigious peer-nominated award that is given to roughly a 
                    dozen people and teams per year out of iRobot’s 1000+ employees. I was individually nominated in 2021 for a Chairman’s Award.
                  </li>
                </ul>
                <h4>Key Accomplishments</h4>
                <ul className={styles.technologies}>
                  <li>
                    (In Progress) Migrating current PatternLab atomic design system from Mustache, SASS, and vanilla JavaScript to Storybook 
                    with ReactJS and SASS, to support a key initiative relating to the fronted repository and Interaction Studio. This will allow 
                    for version control where there currently is no capability within Interaction Studio, will allow for near-true local development, 
                    and will allow for an independent build and cache pipeline for compiled CSS and JavaScript assets.
                  </li>
                  <li>
                      Created a proof of concept for the migration of a static website, iRobot Caribbean, using GatsbyJS (ReactJS), GraphQL, SASS, 
                      Flexbox, and HTML as well as Contentful headless CMS integration for content management. This was part of a strategic effort to 
                      migrate mostly static sites off of an old version of Sitecore CMS, to reduce hosting costs and reduce the barrier of entry for 
                      site maintenance efforts.
                  </li>
                  <li>
                      Designed, advocated for, and implemented an internal CDN for CSS and JavaScript assets along with its own dedicated automated 
                      build pipeline. This decoupled compiled frontend assets from backend CMS code, which greatly enhanced the speed at which these 
                      assets could be deployed, leading to greater flexibility for frontend asset deployments. This also cached frontend assets separately, 
                      ensuring that during busier times of year (e.g. holiday) the frontend assets cache could be cleared with minimal performance and 
                      availability hit to the website as a whole.  
                  </li>
                  <li>
                      Led a multi-month upgrade project from Sitecore version 9.1 to version 9.3. This involved many high level technical and architectural 
                      decisions, as well as coordination with several team members, review of work, and implementation of some infrastructure changes.
                  </li>
                  <li>
                      Architected and implemented functionality to automatically share pricing and promotional information for products between two different 
                      platforms, greatly decreasing content work and overhead to update frequently-changing pricing and promotional information during high 
                      volatility periods.
                  </li>
                  <li>
                      Designed and implemented a robust site search and typeahead API used in the header search functionality across multiple iRobot 
                      web platforms. This site search API integrates and amalgamates search results from two different platforms (store and support) 
                      to provide the user with a more streamlined search experience.  
                  </li>
                  <li>
                      Contributed to and launched two separate website redesigns. Both resulted in complete changes in content structure and flow, 
                      and were effectively brand new website launches. For these website redesigns, I built several new renderings and launched the 
                      new code and content.  
                  </li>
                  <li>
                      Introduced the Git Flow method of Git branch management to streamline the automated build process, which greatly reduced the 
                      overhead and developer time spent on deployments.
                  </li>
                  <li>
                      Advocated for several key Agile methodology process improvements, including Jira ticket workflow, retrospective format, 
                      standup format, deployment cadence, code reviews, and more.
                  </li>
                </ul>
                <h4>Technologies Used</h4>
                <ul>
                  <li>
                      HTML, CSS, SASS, JavaScript in Interaction Studio and atomic design system development (PatternLab)
                  </li>
                  <li>
                      Gulp for CSS/JavaScript asset compilation 
                  </li>
                  <li>
                      Bamboo and Octopus for automated build pipelines
                  </li>
                  <li>
                      Git version control  
                  </li>
                  <li>
                      C#.NET, WebAPI, and Sitecore CMS in Sitecore website architecture and feature building and maintenance
                  </li>
                </ul>
              </div>
              <div className={styles.jobCard}>
                <h3 className={styles.companyName}>Primacy</h3>
                <p>
                  <strong className={styles.jobTitle}>
                    Senior Technology Developer
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    June 2017 to March 2019
                  </em>
                </p>
                <p>
                  <strong className={styles.jobTitle}>
                    Technology Developer
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    June 2015 to June 2017
                  </em>
                </p>
                <h4>Job Responsibilities</h4>
                <p>
                  I was responsible for the architecture and design of client deliverables, as well as for technical lead responsibilities. 
                  These technical lead responsibilities included client-facing communications, architecture, development and testing of features, 
                  QA team support, and oversight of other developers. I was also the technical lead for a $6M website overhaul for a major healthcare 
                  system in the midwest, which spanned two separate feature-rich websites with complex CMS and code architecture. I was responsible for 
                  pull request reviews (for coding standards, code cleanliness, consistent content author experience, and consistent code architecture and 
                  implementation), developer work allocation and balancing against a timeline and budget, requirements refinement, client and developer 
                  support during co-development, and Agile process ownership.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Used TDS for serialization and version control of Sitecore
                    items in conjunction with Glass.Mapper to allow for
                    strongly-typed code within the controllers within Sitecore
                    projects.
                  </li>
                  <li>
                    Git version control for some projects, and Subversion
                    version control for others.
                  </li>
                  <li>
                    Extensive use of C#, WebAPI, JavaScript, and Sitecore CMS and Sitefinity CMS to develop responsive web solutions for clients.
                  </li>
                  <li>
                    Jenkins automated build system  
                  </li>
                </ul>
                <h4>Sample Project Portfolio</h4>
                <p>
                  A couple of sample projects that I worked on while at Primacy
                  can be found on my{" "}
                  <span className={utils.magicalUnderline}>
                    <Link href="/projects">Projects page</Link>
                  </span>
                  , under "Past Professional Projects".
                </p>
              </div>
              <div className={styles.jobCard}>
                <h3 className={styles.companyName}>
                  WEX Health (formerly Evolution 1, Inc.)
                </h3>
                <p>
                  <strong className={styles.jobTitle}>
                    Software Development Engineer
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    July 2013 to June 2015
                  </em>
                </p>
                <h4>Job Responsibilities</h4>
                <p>
                  I was responsible for the development of new features on both the BennyCentral and 1Cloud platforms, as well as 
                  enhancements and maintenance of existing features in a Scrum environment. This included integration between the two systems, 
                  involving development and maintenance of a suite of web services and file-based batch processing systems. Additionally, I was 
                  responsible for the design of database changes/additions for new features, as well as for maintaining, modifying, and adding (as needed) 
                  stored procedures to the database instances for data access.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Extensive use of C#, JavaScript, JQuery, and T-SQL
                  </li>
                  <li>
                    Maintained and added to extensive unit testing suite, using NUnit, Moq, and C#
                  </li>
                  <li>
                    SVN source control for one project, and Team Foundation Server version control
                  </li>
                </ul>
              </div>
              <div className={styles.jobCard}>
                <h3 className={styles.companyName}>Cigna Healthcare</h3>
                <p>
                  <strong className={styles.jobTitle}>
                    OpenSpan/.NET Developer
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    February 2013 to July 2013
                  </em>
                </p>
                <h4>Job Responsibilities</h4>
                <p>
                  I was responsible for the modification and development of automations chiefly requested and used by the 
                  claims department at Cigna. I was also responsible for modifications to compiled code as required, including upgrading 
                  applications to use newer versions of application integrations.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    C# Script
                  </li>
                  <li>
                    SVN version control
                  </li>
                </ul>
              </div>
              <div className={styles.jobCard}>
                <h3 className={styles.companyName}>
                  Eversource (formerly Northeast Utilities)
                </h3>
                <p>
                  <strong className={styles.jobTitle}>
                    Business Application Systems Developer
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    May 2012 to February 2013
                  </em>
                </p>
                <p>
                  <strong className={styles.jobTitle}>
                    Lotus Notes Center Intern
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    May 2011 to May 2012
                  </em>
                </p>
                <h4>Job Responsibilities</h4>
                <p>
                  I was responsible for the full software development lifecycle, from gathering requirements 
                  from clients to testing and deployment of the final product. Additional responsibilities included 
                  providing second level technical support for the extensive Lotus Notes application portfolio 
                  (approximately 300 applications) that was owned by Eversource at the time.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Lotus Notes platform
                  </li>
                  <li>
                    LotusScript language and @Formula language
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.resumeSection}>
            <span className={utils.dashedHeader}>
              <h2>Education</h2>
            </span>
            <h3>University of New Haven</h3>
            <em>Graduated May 2012</em>
            <ul className={styles.technologies}>
              <li>B.S., Computer Science</li>
              <li>Minor, Criminal Justice</li>
              <li>Certificate, Computer Forensic Investigation</li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default Resume;
