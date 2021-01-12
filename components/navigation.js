import styles from "../styles/Navigation.module.css";
import Link from "next/link";

function Navigation() {
  return (
    <header>
      <nav className={styles.navigation}>
        <Link href="/">
          <a>
            <img src="/images/logo-larger.png" className={styles.logo} />
          </a>
        </Link>
        <ul className={styles.linkList}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
