import styles from "../styles/Navigation.module.scss";
import HamburgerMenu from "../components/hamburger-menu";
import Link from "next/link";

const Navigation = () => {
  const[open, setNavOpen] = React.useState("");

  function toggleOpen(){
    setNavOpen(!open);
  }

  return (
    <header>
      <nav className={styles.navigation} open={open} >
        <div className={styles.headerContent}>
          <Link href="/">
            <a className={styles.homeLink}>
              <img src="/images/logo-larger.png" className={styles.headerImage} />
            </a>
          </Link>
          <HamburgerMenu setMobileNavOpen={toggleOpen}/>
        </div>
        <div className={styles.linkContainer}>
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
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;