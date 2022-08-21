import styles from "./PageSelector.module.scss";

const PageSelector = ({ pageSelected, setPageSelected, totPages }) => {
  const prevPage = () => {
    setPageSelected(pageSelected - 1);
  };

  const nextPage = () => {
    setPageSelected(pageSelected + 1);
  };

  return (
    <div className={styles.page_selector}>
      {pageSelected > 1 ? (
        <div className={styles.prev} onClick={prevPage}>
          &lt;
        </div>
      ) : (
        ""
      )}

      <div className={styles.page}>Page {pageSelected}</div>

      {pageSelected < totPages ? (
        <div className={styles.next} onClick={nextPage}>
          &gt;
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PageSelector;
