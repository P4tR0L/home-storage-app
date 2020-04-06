import React from "react";
import { Link } from 'react-router-dom';
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({ items }) => (
  <>
    {items.length ? (
      <>
        <h1 className={styles.noItems}>click on product to edit it <span role="img" aria-label="smile">😎</span></h1>
        <ul className={styles.wrapper}>
          {items.map(item => (
            <ListItem key={item.itemId} {...item} />
          ))}
        </ul>
        <Link className={styles.addButton}
          to="/add" >
          add product
          </Link>
      </>
    ) : (
        <>
          <h1 className={styles.noItems}>Your home storage is empty. Please add your fist product! <span role="img" aria-label="smile">😀</span></h1>
          <Link className={styles.addButton}
            to="/add" >
            add product
          </Link>
        </>
      )}

  </>
);

export default List;