import Navigation from './navigation';
import Footer from './footer';
import Head from './head';
import layoutStyles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      <main className={layoutStyles.main}>
        <Navigation />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
