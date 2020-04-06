import React from "react";
import AppContext from '../../context';
import { Redirect } from "react-router-dom";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import Title from "../Title/Title";
import { v4 as uuidv4 } from "uuid";
import { get } from 'lodash';

class Form extends React.Component {
  state = {
    itemName: get(this.props.item, "itemName", ""),
    itemValue: get(this.props.item, "itemValue", ""),
    itemUnit: get(this.props.item, "itemUnit", ""),
    minValue: get(this.props.item, "minValue", ""),
    imageLink: get(this.props.item, "imageLink", ""),
    itemId: get(this.props.item, "itemId", uuidv4()),
    formSent: false,
  };


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setEditIsDone = () => {
    this.setState({
      formSent: true,
    });
  };

  render() {

    if (this.state.formSent) return <Redirect to="/" />

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>
              {this.props.item
                ? "edit your product"
                : "add new product"}
            </Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => {
                this.props.item
                  ? context.editItem(e, this.state)
                  : context.addItem(e, this.state);
                this.setEditIsDone();
              }}
            >
              <div className={styles.formOptions}>

              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.itemName}
                name="itemName"
                label="Name"
                isRequired="required"
              />
              <Input
                onChange={this.handleInputChange}
                value={this.state.itemValue}
                name="itemValue"
                label="Amount"
                type="number"
                isRequired="required"
              />
              <Select
                onChange={this.handleInputChange}
                value={this.state.itemUnit}
                name="itemUnit"
                label="Unit"
                optionOne="g"
                optionTwo="kg"
                optionThree="litres"
                optionFour="bottles"
                optionFive="pcs"
              />
              <Input
                onChange={this.handleInputChange}
                value={this.state.minValue}
                name="minValue"
                label="Minimum amount"
                type="number"
                isRequired="required"
              />
              <Input
                onChange={this.handleInputChange}
                value={this.state.imageLink}
                name="imageLink"
                label="Image URL"
              />
              <Button className={styles.addButton}>{this.props.item
                ? "save changes"
                : "add product"}
              </Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
