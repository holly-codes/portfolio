import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Layout.module.scss";
import CustomHead from "./customHead";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = function({pageName, children, showFooter = false}) {
    let footer;

    if(showFooter){
        footer = <Footer />;
    }

    return (
        <div className={styles.container}>
            <CustomHead pageName={pageName}/>
            <Navigation />
            <main className={styles.main}>
                {children}
            </main>
            {footer}
        </div>
    );
}

Layout.propTypes = {
    pageName: PropTypes.string,
    children: PropTypes.node,
    showFooter: PropTypes.bool
}

Layout.defaultProps = {
    pageName: "Home",
    children: null,
    showFooter: false
}

export default Layout;