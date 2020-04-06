import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import styles from "./ShoppingList.module.scss";

const ShoppingList = ({ items }) => (
  <>
    {items.length ? (
      <>
        <ul className={styles.wrapper}>
          {items.map(item => (
            <ShoppingListItem key={item.itemId} {...item} />
          ))}
        </ul>
      </>
    ) : (
        <>
          <h1 className={styles.noItems}>Your shopping list is empty. You don't need to buy anything! <span role="img" aria-label="smile">😀</span></h1>
        </>
      )}

  </>
);

export default ShoppingList;