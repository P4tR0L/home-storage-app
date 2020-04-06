import React from "react";
import AppContext from '../../context';
import styles from "./ShoppingListItem.module.scss";
import productPlaceholder from '../../assets/images/product-placeholder.svg'

const ShoppingListItem = ({ imageLink, itemName, itemValue, itemUnit, minValue }) => {


  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <div className={styles.item}>
            {
              imageLink ? (
                <div className={styles.imgContainer}>
                  <img
                    className={styles.itemImg}
                    src={imageLink}
                    alt="product"
                  />
                </div>
              ) : (
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.itemImg}
                      src={productPlaceholder}
                      alt="product"
                    />
                  </div>
                )
            }
            <p
              className={styles.itemText}
            >
              {itemName}
            </p>
            <span
              className={styles.itemValue}>
              You got {itemValue}
              <span
                className={styles.itemUnit}>
                {itemUnit}
              </span>
              <span className={styles.itemValue}>
                Your min amount is {minValue}
                <span className={styles.itemUnit}>
                  {itemUnit}
                </span>
              </span>
              <span className={styles.itemValue}>
                You need to buy {minValue - itemValue}
                <span className={styles.itemUnit}>
                  {itemUnit}
                </span>
              </span>
            </span>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ShoppingListItem;
