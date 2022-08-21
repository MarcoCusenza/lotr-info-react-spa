import styles from "./Characters.module.scss";
import useAxios from "../../../hooks/useAxios";
import { useState, useEffect } from "react";

import PageSelector from "../../partials/PageSelector/PageSelector";
import List from "../../partials/List/List";
import CharInfo from "../../partials/CharInfo/CharInfo";

const Characters = () => {
  const [selected, changeSelected] = useState({});
  const [characters, setCharacters] = useState({});
  const [pageSelected, setPageSelected] = useState(1);
  const { data: dataChar, isLoadingChar, errorChar } = useAxios("character", "", `?limit=50&page=${pageSelected}`);

  useEffect(() => {
    if (dataChar.docs) {
      setCharacters({
        characters: dataChar,
        isLoadingChar,
        errorChar,
      });
    }
  }, [dataChar, isLoadingChar, errorChar]);

  if (errorChar) {
    return (
      <div className={styles.page_container}>
        <h4>Characters</h4>
        <div>ERRORE: {errorChar} </div>
      </div>
    );
  } else if (isLoadingChar) {
    return (
      <div className={styles.page_container}>
        <h4>Characters</h4>
        <div>Loading...</div>
      </div>
    );
  } else if (characters.characters && characters.characters.docs.length > 0) {
    // console.log("SELECTED", selected);
    return (
      <div className={styles.page_container}>
        <h3>Characters</h3>
        <div className={styles.page_content}>
          <div className={styles.list_container}>
            <PageSelector pageSelected={pageSelected} setPageSelected={setPageSelected} totPages={characters.characters.pages} />
            <List data={characters} changeSelected={changeSelected} />
            <PageSelector pageSelected={pageSelected} setPageSelected={setPageSelected} totPages={characters.characters.pages} />
          </div>
          {selected ? (
            <div className={styles.info_container}>
              <CharInfo selected={selected} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
};

export default Characters;
