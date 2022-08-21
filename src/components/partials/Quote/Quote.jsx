import { useContext } from "react";
import styles from "./Quote.module.scss";
import CharactersContext from "../../../contexts/CharactersContext";

const Quote = ({ quote }) => {
  const charContext = useContext(CharactersContext);
  const characters = charContext.characters.docs;
  // console.log("characters", characters);
  return (
    <div className={styles.quote_container}>
      <div className={styles.dialog}>"{quote.dialog}"</div>
      <div className={styles.character}>{characters.map((el) => (el._id === quote.character ? el.name : ""))}</div>
    </div>
  );
};

export default Quote;
