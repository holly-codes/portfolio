import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const CustomHead = function({pageName}) {
    return (
        <Head>
            <title>{pageName} | Holly Codes</title>
            <link rel="icon" href="/favicon.ico" />
            <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
            />
      </Head>
    );
}

CustomHead.propTypes = {
    pageName: PropTypes.string
}

CustomHead.defaultProps = {
    pageName: "Home"
}

export default CustomHead;