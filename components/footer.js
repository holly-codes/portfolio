import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>&copy; 2021 - Holly Burinda</p>
      </div>
      <div className={styles.footerLinks}>
        <a href="https://github.com/holly-codes/">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://codepen.io/holly-codes">
          <i className="fab fa-codepen fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/holly-burinda-33950964">
          <i className="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a href="mailto:hello@holly-codes.com">
          <i className="far fa-envelope fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
