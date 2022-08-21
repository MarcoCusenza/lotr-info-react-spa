import styles from "./Books.module.scss";

import List from "../../partials/List/List";
import BookInfo from "../../partials/BookInfo/BookInfo";
import { useState, useContext, useEffect } from "react";

import BooksContext from "../../../contexts/BooksContext";

const Books = () => {
  const [selected, changeSelected] = useState({});
  const [books, setBooks] = useState({});
  const myBooks = useContext(BooksContext);

  useEffect(() => {
    setBooks(myBooks);
  }, [myBooks]);

  return (
    <div className={styles.page_container}>
      <h3>Books</h3>
      <div className={styles.books_container}>
        <List data={books} changeSelected={changeSelected} />
      </div>
      {selected ? (
        <div className={styles.info_container}>
          <BookInfo selected={selected} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Books;
