import Head from "next/head";
import Navigation from "../components/navigation";
import utils from "../styles/utils.module.css";

function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation></Navigation>
      </main>
    </div>
  );
}

export default Projects;
