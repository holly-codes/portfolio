import Head from 'next/head';

function CustomHead({pageName}) {
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

export default CustomHead;