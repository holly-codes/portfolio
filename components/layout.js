import styles from "../styles/Layout.module.scss";
import CustomHead from "../components/customHead";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Layout = ({pageName, children, showFooter = false}) =>{
    let footer;

    if(showFooter){
        footer = <Footer></Footer>;
    }

    return (
        <div className={styles.container}>
            <CustomHead pageName={pageName}/>
            <Navigation></Navigation>
            <main className={styles.main}>
                {children}
            </main>
            {footer}
        </div>
    );
}

export default Layout;