import styles from "./CharInfo.module.scss";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

import Quote from "../Quote/Quote";
import PageSelector from "../PageSelector/PageSelector";

const CharInfo = ({ selected }) => {
  const [charQuotes, setCharQuotes] = useState({});
  const [pageSelected, setPageSelected] = useState(1);
  const { data: dataQuotes, isLoadingQuotes, errorQuotes } = useAxios("character", selected._id, `quote?limit=10&page=${pageSelected}`);

  useEffect(() => {
    if (selected && dataQuotes.docs) {
      // console.log("dataQuotes", dataQuotes);
      setCharQuotes(dataQuotes);
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
        <h3 className={styles.title}>{selected.name}</h3>
        <div className={styles.info_container}>
          <h4>Character Info</h4>
          <p>Race: {selected.race ? selected.race : "???"}</p>
          <p>Gender: {selected.gender ? selected.gender : "???"}</p>
          <p>Birth: {selected.birth ? selected.birth : "???"}</p>
          <p>Spouse: {selected.spouse ? selected.spouse : "???"}</p>
          <p>Death: {selected.death ? selected.death : "???"}</p>
          <p>Realm: {selected.realm ? selected.realm : "???"}</p>
          <p>Height: {selected.height ? selected.height + "cm" : "???"}</p>
          <p>Hair: {selected.hair ? selected.hair : "???"}</p>
          <p>{selected.wikiUrl ? <a href={selected.wikiUrl}>Wiki URL</a> : ""}</p>
        </div>
        {charQuotes.docs && charQuotes.docs.length > 0 ? (
          <div className={styles.quotes_container}>
            <h4>Quotes</h4>
            <PageSelector pageSelected={pageSelected} setPageSelected={setPageSelected} totPages={charQuotes.pages} />
            <ul>
              {charQuotes.docs.map((elem) => (
                <Quote key={elem._id} quote={elem} />
              ))}
            </ul>
            <PageSelector pageSelected={pageSelected} setPageSelected={setPageSelected} totPages={charQuotes.pages} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return <div className={styles.select_char}>Select a Character</div>;
  }
};

export default CharInfo;
