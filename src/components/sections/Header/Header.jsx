import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <nav>
        <NavLink className={styles.navlink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navlink} to="/books">
          Books
        </NavLink>
        <NavLink className={styles.navlink} to="/movies">
          Movies
        </NavLink>
        <NavLink className={styles.navlink} to="/characters">
          Characters
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
