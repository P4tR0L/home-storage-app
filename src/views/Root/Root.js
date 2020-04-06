import React from 'react';
import './index.css'
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ItemsView from '../ItemsView/ItemsView';
import AddView from '../AddView/AddView';
import EditView from '../EditView/EditView';
import SettingsView from '../SettingsView/SettingsView';
import ShoppingListView from '../ShoppingListView/ShoppingListView';

class Root extends React.Component {

  state = {
    items: [],
  }

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState(prevState => {
      const newState = {
        items: [...prevState.items, newItem]
      };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    });
  };



  deleteItem = itemId => {
    if (window.confirm('Are you sure you want to remove this product?')) {
      this.setState(prevState => {
        const newState = {
          items: [...prevState.items.filter(item => item.itemId !== itemId)]
        };
        localStorage.setItem("state", JSON.stringify(newState));
        return newState;
      });
    }
  }

  editItem = (e, editedItem) => {
    e.preventDefault();
    this.setState(prevState => {
      const newState = {
        items: prevState.items.map(item =>
          item.itemId === editedItem.itemId ? editedItem : item
        )
      };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    });
  };

  componentDidMount() {
    const localStorageState = JSON.parse(localStorage.getItem("state"));
    localStorageState && this.setState(localStorageState);
  }

  render() {

    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      deleteItem: this.deleteItem,
      editItem: this.editItem,
      itemsToBuy: this.state.items.filter(item => parseInt(item.itemValue) < parseInt(item.minValue)),
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header />
          <Switch>
            <Route exact path="/" component={ItemsView} />
            <Route path="/add" component={AddView} />
            <Route path="/edit/:id" component={EditView} />
            <Route path="/shoppinglist" component={ShoppingListView} />
            <Route path="/settings" component={SettingsView} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default Root;