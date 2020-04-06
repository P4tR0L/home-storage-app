import React from 'react';
import AppContext from '../../context';
import ShoppingList from '../../components/ShoppingList/ShoppingList';

const ShoppingListView = () => (
  <AppContext.Consumer>
    {(context) => (
      <ShoppingList items={context.itemsToBuy} />
    )}
  </AppContext.Consumer>
);

export default ShoppingListView;