import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/holly-codes/">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://codepen.io/holly-codes">
          <i className="fab fa-codepen"></i>
        </a>
        <a href="https://www.linkedin.com/in/holly-burinda-33950964">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
