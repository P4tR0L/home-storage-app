import React from "react";
import Form from "../../components/Form/Form";
import AppContext from "../../context";

const EditView = ({ match }) => {
  const activeId = match.params.id;
  return (
    <AppContext.Consumer>
      {context => (
        <Form item={context.items.filter(item => item.itemId === activeId)[0]} />
      )}
    </AppContext.Consumer>
  );
};

export default EditView;