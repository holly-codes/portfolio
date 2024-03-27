import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Hamburger.module.scss';

const HamburgerMenu = function({setMobileNavOpen}) {
    return (
        <button type="button" className={styles.hamburger} 
            onClick={setMobileNavOpen} aria-label="Click to open menu">
            <div className={styles.barOne} />
            <div className={styles.barTwo} />
            <div className={styles.barThree} />
        </button>
    );
}

HamburgerMenu.propTypes = {
    setMobileNavOpen: PropTypes.func.isRequired
}

export default HamburgerMenu;