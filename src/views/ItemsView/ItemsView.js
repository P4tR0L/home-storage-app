import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ItemsView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.items} />
    )}
  </AppContext.Consumer>
);

export default ItemsView;