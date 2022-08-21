import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_text}>
        Developed with
        <p> &#10084; </p>
        by <a href="https://github.com/MarcoCusenza"> Marco Cusenza </a>
        using <a href="https://it.reactjs.org/"> React </a>
        and <a href="https://the-one-api.dev/"> The One API </a>
      </div>
    </footer>
  );
};

export default Footer;
