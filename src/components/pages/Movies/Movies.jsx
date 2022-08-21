import styles from "./Movies.module.scss";
import { useState, useContext, useEffect } from "react";

import List from "../../partials/List/List";
import MovieInfo from "../../partials/MovieInfo/MovieInfo";
import MoviesContext from "../../../contexts/MoviesContext";

const Movies = () => {
  const [selected, changeSelected] = useState({});
  const [movies, setMovies] = useState({});
  const myMovies = useContext(MoviesContext);

  useEffect(() => {
    setMovies(myMovies);
  }, [myMovies]);

  return (
    <div className={styles.page_container}>
      <div className={styles.movies_container}>
        <h3>Movies</h3>
        <List data={movies} changeSelected={changeSelected} />
      </div>
      {selected ? (
        <div className={styles.info_container}>
          <MovieInfo selected={selected} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Movies;
