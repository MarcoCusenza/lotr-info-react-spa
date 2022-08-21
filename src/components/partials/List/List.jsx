// import useAxios from "../../../hooks/useAxios";
import { useState, useEffect } from "react";

import styles from "./List.module.scss";
import ListItem from "../ListItem/ListItem";

const List = ({ data, changeSelected }) => {
  // const { data, isLoading, error } = useAxios(param1, param2, param3);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (Object.values(data)[0]) {
      // console.log("THIS", Object.values(data)[0].docs); //take value of the first property (books/movies/characters) of the Object 'data'
      setItems(Object.values(data)[0].docs);
    }
  }, [data, setItems]);

  if (data.errorBooks || data.errorMovies || data.errorCharacters) {
    return (
      <div className={styles.list_container}>
        <div>ERROR: can't fetch the needed infos</div>
      </div>
    );
  } else if (data.isLoadingBooks || data.isLoadingMovies || data.isLoadingCharacters) {
    return (
      <div className={styles.list_container}>
        <div>Loading...</div>
      </div>
    );
  } else if (items) {
    return (
      <div className={styles.list_container}>
        <ul>
          {items.map((elem) => (
            <ListItem
              key={elem._id}
              content={elem}
              onClick={() => {
                changeSelected(elem);
              }}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className={styles.list_container}>
        <div>No Items</div>
      </div>
    );
  }
};

export default List;
