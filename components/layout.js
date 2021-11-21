import styles from "../styles/Layout.module.scss";
import CustomHead from "../components/customHead";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Layout = ({pageName, children, showFooter = false, isHome = false}) =>{
    let footer;

    if(showFooter){
        footer = <Footer></Footer>;
    }

    return (
        <div className={styles.container}>
            <CustomHead pageName={pageName}/>
            <Navigation isHome={isHome}></Navigation>
            <main className={styles.main}>
                {children}
            </main>
            {footer}
        </div>
    );
}

export default Layout;