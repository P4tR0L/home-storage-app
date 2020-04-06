import React from "react";
import AppContext from '../../context';
import styles from "./ListItem.module.scss";
import { useHistory } from 'react-router-dom';
import productPlaceholder from '../../assets/images/product-placeholder.svg'

const ListItem = ({ imageLink, itemName, itemValue, itemUnit, itemId }) => {

  const history = useHistory();

  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <div className={styles.deleteItem} onClick={() => context.deleteItem(itemId)}></div>
          <div className={styles.item}>
            {
              imageLink ? (
                <div className={styles.imgContainer}>
                  <img
                    className={styles.itemImg}
                    src={imageLink}
                    alt="product"
                  />
                  <span
                    className={styles.editItem}
                    onClick={() => history.push(`/edit/${itemId}`)}
                  >
                  </span>
                </div>
              ) : (
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.itemImg}
                      src={productPlaceholder}
                      alt="product"
                    />
                    <span
                      className={styles.editItem}
                      onClick={() => history.push(`/edit/${itemId}`)}
                    >
                    </span>
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
              {itemValue}
              <span
                className={styles.itemUnit}>
                {itemUnit}
              </span>
            </span>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ListItem;
