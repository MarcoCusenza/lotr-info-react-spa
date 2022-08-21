import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";

import styles from "./BookInfo.module.scss";

const BookInfo = ({ selected }) => {
  // const [bookName, setBookName] = useState({});
  const [bookChapters, setBookChapters] = useState([]);
  // const { data: dataBook, isLoadingBook, errorBook } = useAxios("book", selected, "");
  const { data: dataChapters, isLoadingChapters, errorChapters } = useAxios("book", selected._id, "chapter");

  // useEffect(() => {
  //   if (selected && dataBook.docs) {
  //     console.log("dataBook.docs[0]", dataBook.docs[0]);
  //     setBookName(dataBook.docs[0]);
  //   }
  // }, [selected, dataBook]);

  useEffect(() => {
    if (selected && dataChapters.docs) {
      // console.log("dataChapters.docs", dataChapters.docs);
      setBookChapters(dataChapters.docs);
    }
  }, [selected, dataChapters]);

  if (errorChapters) {
    return (
      <div className={styles.book_container}>
        <div>ERROR</div>
      </div>
    );
  } else if (isLoadingChapters) {
    return (
      <div className={styles.book_container}>
        <div>Loading...</div>
      </div>
    );
  } else if (bookChapters.length > 0) {
    return (
      <div className={styles.book_container}>
        <div className={styles.title}>{selected.name}</div>
        <h4>Chapters</h4>
        <ul>
          {bookChapters.map((elem) => (
            <li key={elem._id}>{elem.chapterName}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default BookInfo;
