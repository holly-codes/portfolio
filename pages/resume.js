import Head from "next/head";
import Navigation from "../components/navigation";

function Resume() {
  return (
    <div>
      <Head>
        <title>Resume | Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation></Navigation>
      </main>
    </div>
  );
}

export default Resume;
