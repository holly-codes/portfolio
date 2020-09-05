import utils from "../styles/utils.module.css";
import Navigation from "../components/navigation";
import Head from "next/head";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Me | Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation></Navigation>
      </main>
    </div>
  );
}

export default Contact;
