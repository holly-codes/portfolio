import utils from "../styles/utils.module.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Me | Holly Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation></Navigation>
        <div className={styles.contactContent}>
          <h1>Contact Me</h1>
          <p>
            Interested in working with me? I am currently off the market. But
            I'm always looking to expand my professional network!
          </p>
          <p>
            <em>Coming Soon: </em> a contact form! For now, email me at{" "}
            <span className={utils.magicalUnderline}>
              <a href="mailto:hello@holly-codes.com">hello@holly-codes.com</a>
            </span>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

export default Contact;
