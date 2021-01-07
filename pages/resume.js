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
      </Head>

      <main>
        <Navigation></Navigation>
        <div className={styles.resumeContent}>
          <h1>Resume</h1>
          <div className={styles.resumeSection}>
            <span className={utils.dashedHeader}>
              <h2>Summary</h2>
            </span>
            <p>
              I am a developer experienced in the web application development
              sphere, looking to expand my horizons and engineering and
              architecture skills. I am passionate about developing good
              products and writing good, clean, and maintainable code, and am
              looking for a development team that feels the same way about
              software development that I do. I am always learning, and am
              committed to bettering myself and filling in any holes in
              knowledge that I might have, be they in the programming languages
              I know, in the nitty-gritty of computer science, or anywhere in
              between.
            </p>
          </div>
          <div className={styles.resumeSection}>
            <span className={utils.dashedHeader}>
              <h2>Technical Skills</h2>
            </span>
            <p>
              C#, ASP.NET MVC, WebAPI, SQL, Sitecore Content Management System
              (CMS) versions 8.2, 9.0, and 9.3, Unicorn, Synthesis, Bamboo,
              Octopus, Azure PaaS, Hedgehog Team Development for Sitecore (TDS),
              Glass.Mapper, Git version control, SOLID programming, unit
              testing, JavaScript, JQuery, T-SQL, AJAX, Scrum (Agile),
              Test-Driven Development (TDD)
            </p>
            <p>
              <em>Limited experience with: </em>ReactJS, NextJS, Gulp, NodeJS,
              Webpack, HTML5, CSS3, Bootstrap 4, LESS
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
                    Senior Sitecore Engineer, Digital Technology
                  </strong>
                  &nbsp;
                  <em className={styles.datesOfEmployment}>
                    March 2019 to Present
                  </em>
                </p>
                <h4>Job Responsibilities</h4>
                <p>
                  Responsible for the development of backend code and
                  functionality for all 36 worldwide iRobot websites, and for
                  some backend functionality on other iRobot-owned websites and
                  domains. Contribute to process improvements and upholding
                  process, as well as the build process and code management
                  strategies. Contribute to architectural decisions for new
                  features and functionality, and take technical responsibility
                  for new projects and initiatives. Ensure that best code
                  practices are followed.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Used Unicorn for serialization and version control of
                    Sitecore items in conjunction with Synthesis to allow for
                    strongly-typed code within the Sitecore projects.
                  </li>
                  <li>Used Git version control.</li>
                  <li>
                    Used Sitecore Federated Experience Manager to deliver
                    features and functionality across several sites.
                  </li>
                  <li>
                    Extensive use of C#.Net, JavaScript, Sitecore 9.0.2 CMS,
                    Azure PaaS, AzureSQL, Bamboo, and Octopus.
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
                  Responsible for the development of client deliverables as
                  directed by project management and tech leads, as well as
                  enhancements of existing features. This includes client-facing
                  communications, design, development, and testing of features,
                  QA team support, and occasional oversight of other developers
                  and architectural decision-making. Currently also the
                  technical lead on a massive website overhaul, responsible for
                  overseeing two other developers and their work.
                </p>
                <h4>Technical Lead Responsibilities</h4>
                <ul className={styles.technologies}>
                  <li>
                    Pull request reviews, including reviews for coding
                    standards, code cleanliness where possible, consistent
                    content author experience, and consistent code design and
                    implementation
                  </li>
                  <li>
                    Developer work allocation and balancing to ensure that the
                    project is on time and on budget. If the project is not on
                    time and on budget, the technical lead is responsible for
                    escalating these issues and working with the appropriate
                    parties to find a resolution
                  </li>
                  <li>
                    Requirements refinement to ensure a comprehensive solution
                    that meets the needs of the business while also providing an
                    intuitive content author/client experience
                  </li>
                  <li>
                    Support clients and client developers during co-development
                  </li>
                  <li>
                    Define and own processes for the project, including Jira
                    usage process, Bitbucket/Git usage process, and work
                    management process
                  </li>
                </ul>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Used TDS for serialization and version control of Sitecore
                    items in conjunction with Glass.Mapper to allow for
                    strongly-typed code within the controllers within Sitecore
                    projects.
                  </li>
                  <li>
                    Used SSIS for data ingestion processes as well as data
                    export processes as necessary.
                  </li>
                  <li>
                    Used Git version control for some projects, and Subversion
                    version control for others.
                  </li>
                  <li>
                    Extensive use of C#, JavaScript, and JQuery, along with
                    Sitecore CMS and Sitefinity CMS to implement responsive
                    websites.
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
                  Responsible for the development of new features on both the
                  BennyCentral and 1Cloud platforms, as well as enhancements of
                  existing features. Responsible for integration between the two
                  systems, involving development and maintenance of a suite of
                  web services and file-based batch processing systems.
                  Responsible for design of database changes/additions for new
                  features, as well as for maintaining, modifying, and adding
                  (as needed) stored procedures to the database instances for
                  data access. Also responsible for supporting the letter
                  generation system in production, providing scripts to reset
                  batches when they could not be completed successfully.
                  Responsibilities also include maintaining and modifying (as
                  needed) the Agile process that the team follows, including
                  interfacing with and supporting the business analyst and
                  quality assurance analyst on the team.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Extensive use of C#, JavaScript, JQuery, and T-SQL to
                    develop and maintain both the BennyCentral and 1Cloud
                    platforms, as well as the integration between the two
                    systems.
                  </li>
                  <li>
                    Maintained existing unit tests using NUnit, C#, Moq, and
                    Rhino.Mocks, as well as developed new unit tests where
                    appropriate, particularly as part of the TDD process. Used
                    dependency injection throughout the platform to enable more
                    extensive unit testing and integration testing. Refactored
                    legacy unit tests (those using Rhino.Mocks) to fit the new
                    company standard of using Moq.
                  </li>
                  <li>
                    Used Subversion source control for one platform, as well as
                    Team Foundation Server for source control for the other.
                  </li>
                  <li>
                    Used Team Foundation Server for work item management, and
                    assisted as a member of the upgrade committee when the
                    organization decided to upgrade to TFS 2012.
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
                  Responsible for the modification and development of
                  automations that are chiefly requested and used by the Claims
                  Department at Cigna. Responsibilities also include the
                  modification of the .Net Dynamic Linked Libraries (DLLs) as
                  needed. Currently, this entails upgrading applications to use
                  newer versions of systems that these applications integrate
                  with.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Used OpenSpan (Enkata) development platform to automate
                    business processes, including a current ongoing project to
                    automate one of the largest claim processing business
                    processes.
                  </li>
                  <li>
                    Worked with C# Script to create scripts to perform small
                    tasks, such as casting variable types in OpenSpan
                    automations.
                  </li>
                  <li>
                    Used Subversion/SVN for source and version control for
                    OpenSpan projects.
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
                  Responsible for the full software development life cycle,
                  everything from gathering requirements for software design
                  from clients to unit testing the finished product. Additional
                  responsibilities include providing second level technical
                  support for the vast Lotus Notes application portfolio owned
                  by Northeast Utilities.
                </p>
                <h4>Technologies Used</h4>
                <ul className={styles.technologies}>
                  <li>
                    Extensive use of Lotus Notes development platform to create
                    and modify applications
                  </li>
                  <li>
                    Used object-oriented software design principles in Lotus
                    Notes development, in coding classes to be able to make the
                    applications more modular and therefore more maintainable.
                  </li>
                  <li>
                    Provided technical support for customers for approximately
                    300 distinct Lotus Notes applications.
                  </li>
                  <li>
                    Used workflow design skills in designing applications for
                    Lotus Notes, to design an elegant and efficient workflow
                    that is maintainable on the code side, but also easily
                    usable on the client side.
                  </li>
                  <li>
                    Used human-computer interaction (user interface design)
                    skills to design efficient and easily usable interfaces for
                    applications.
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
      </main>
    </div>
  );
}

export default Resume;
