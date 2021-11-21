import styles from '../styles/Hamburger.module.scss';

export default function HamburgerMenu({setNavOpen}) {
    return (
        <button className={styles.hamburger} 
            onClick={setNavOpen}>
            <div className={styles.barOne}></div>
            <div className={styles.barTwo}></div>
            <div className={styles.barThree}></div>
        </button>
    );
}