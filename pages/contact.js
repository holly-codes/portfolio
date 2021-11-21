import utils from "../styles/utils.module.scss";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div className={utils.container}>
      <Head>
        <title>Contact Me | Holly Codes</title>
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
      <Navigation></Navigation>
      <main>
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
      <Footer></Footer>
    </div>
  );
}

export default Contact;
