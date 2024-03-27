import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = function() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>&copy; 2024 - Holly Burinda</p>
      </div>
      <div className={styles.footerLinks}>
        <a href="https://github.com/holly-codes/" aria-label="GitHub">
          <i className="fab fa-github fa-2x" />
        </a>
        <a href="https://codepen.io/holly-codes" aria-label="CodePen">
          <i className="fab fa-codepen fa-2x" />
        </a>
        <a href="https://www.linkedin.com/in/holly-burinda-33950964" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in fa-2x" />
        </a>
        <a href="mailto:hello@holly-codes.com" aria-label="Email link to contact Holly">
          <i className="far fa-envelope fa-2x"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
