import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="footer-extended__left">
        <p className={styles.footerText}>&copy; 2023 Electrify</p>
      </div>
      <div className="footer-extended__right">
        <p className={styles.footerText}></p>
      </div>
    </div>
  );
};
