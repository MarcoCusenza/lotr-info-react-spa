import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.title_container}>
        <h2>The Lord Of The Rings</h2>
        <h4>info from The One API</h4>
      </div>
      <div className={styles.description}>
        <p>Search any info about The Lord of The Rings books or movies!</p>
        <p>
          Here you can find informations and curiosities about our favourite fantasy saga, kindly provided by <a href="https://the-one-api.dev/"> The One API</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
