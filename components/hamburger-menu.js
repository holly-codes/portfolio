import styles from '../styles/Hamburger.module.scss';

const HamburgerMenu = ({setMobileNavOpen}) => {
    return (
        <button className={styles.hamburger} 
            onClick={setMobileNavOpen}>
            <div className={styles.barOne}></div>
            <div className={styles.barTwo}></div>
            <div className={styles.barThree}></div>
        </button>
    );
}

export default HamburgerMenu;