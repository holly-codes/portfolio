/* eslint-disable react/jsx-no-bind */
import Link from "next/link";
import React from "react";
import styles from "../styles/Navigation.module.scss";
import HamburgerMenu from "./hamburger-menu";

const Navigation = function() {
  const[open, setNavOpen] = React.useState("");

  function toggleNav(){
    setNavOpen(!open);
  }

  return (
    <header>
      <nav className={styles.navigation} open={open} >
        <div className={styles.headerContent}>
          <Link href="/" className={styles.homeLink}>
              <img src="/images/logo-larger.png" className={styles.headerImage} alt="Circle with hand drawn lavender sprig inside, with the letters H and B" />
          </Link>
          <HamburgerMenu setMobileNavOpen={toggleNav}/>
        </div>
        <div className={styles.linkContainer}>
          <ul className={styles.linkList}>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume">
                Resume
              </Link>
            </li> 
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;