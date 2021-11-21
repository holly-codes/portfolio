import {React, useState} from 'react';
import styles from '../styles/Hamburger.module.scss';

function HamburgerMenu() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <button className={styles.hamburger} 
            onClick={() => {                
                setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
          }}>
            <div className={styles.barOne}></div>
            <div className={styles.barTwo}></div>
            <div className={styles.barThree}></div>
        </button>
    );
}

export default HamburgerMenu;