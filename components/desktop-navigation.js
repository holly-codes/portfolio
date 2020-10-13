import NavigationLinks from "../components/navigation-links";
import styles from "../styles/Navigation.module.css";

function DesktopNavigation() {
  return (
    <nav className={styles.desktopNav}>
      <NavigationLinks></NavigationLinks>
    </nav>
  );
}

export default DesktopNavigation;
