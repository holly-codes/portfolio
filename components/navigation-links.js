import styles from "../styles/NavigationLinks.module.css";
import Link from "next/link";

function NavigationLinks() {
  return (
    <ul className={styles.linkList}>
      <li>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <img src="/images/logo-larger.png" className={styles.logo} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
      </li>
    </ul>
  );
}

export default NavigationLinks;
