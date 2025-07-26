import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc
      </p>
    </div>
  );
}

export default Footer;
