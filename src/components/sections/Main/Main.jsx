import styles from "./Main.module.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Books from "../../pages/Books/Books";
import Movies from "../../pages/Movies/Movies";
import Characters from "../../pages/Characters/Characters";

const Main = () => {
  return (
    <main className={styles.main_container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </main>
  );
};

export default Main;
