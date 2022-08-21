import styles from "./ListItem.module.scss";

const ListItem = (props) => {
  return (
    <li className={styles.li_container} onClick={props.onClick}>
      <div className={styles.title}>{props.content.name}</div>
    </li>
  );
};

export default ListItem;
