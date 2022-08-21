import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";

import styles from "./MovieInfo.module.scss";
import Quote from "../Quote/Quote";
import PageSelector from "../PageSelector/PageSelector";

const MovieInfo = ({ selected }) => {
  const [movieQuotes, setMovieQuotes] = useState({});
  const [pageSelected, setPageSelected] = useState(1);
  const { data: dataQuotes, isLoadingQuotes, errorQuotes } = useAxios("movie", selected._id, `quote?limit=50&page=${pageSelected}`);

  useEffect(() => {
    if (selected && dataQuotes.docs) {
      // console.log("dataQuotes", dataQuotes);
      setMovieQuotes(dataQuotes);
    }
  }, [selected, dataQuotes]);

  if (errorQuotes) {
    return (
      <div className={styles.movie_container}>
        <div>ERRORE: {errorQuotes} </div>
      </div>
    );
  } else if (isLoadingQuotes) {
    return (
      <div className={styles.movie_container}>
        <div>Loading...</div>
      </div>
    );
  } else if (selected && selected.name) {
    // console.log("SELECTED", selected);
    return (
      <div className={styles.movie_container}>
        <div className={styles.title}>{selected.name}</div>
        <div className={styles.info_container}>
          <h4>Movie Info</h4>
          <p>Duration: {selected.runtimeInMinutes} minutes</p>
          <p>Budget: {selected.budgetInMillions} mln</p>
          <p>Box Office: {selected.boxOfficeRevenueInMillions} mln</p>
          <p>Academy Award Nominations: {selected.academyAwardNominations}</p>
          <p>Academy Award Wins: {selected.academyAwardWins}</p>
          <p>Rotten Tomatoes Score: {selected.rottenTomatoesScore}</p>
        </div>
        {movieQuotes.docs && movieQuotes.docs.length > 0 ? (
          <div className={styles.quotes_container}>
            <h4>Quotes</h4>
            <PageSelector pageSelected={pageSelected} setPageSelected={setPageSelected} totPages={movieQuotes.pages} />
            <ul>
              {movieQuotes.docs.map((elem) => (
                <Quote key={elem._id} quote={elem} />
              ))}
            </ul>
            <PageSelector pageSelected={pageSelected} setPageSelected={setPageSelected} totPages={movieQuotes.pages} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
};

export default MovieInfo;
