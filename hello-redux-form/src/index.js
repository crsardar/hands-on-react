import React from "react";
import ReactDOM from "react-dom";

import SimpleForm from "./redux-form/SimpleForm";

import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { Provider } from "react-redux";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm
        onSubmit={(values) => {
          console.log("Yes Chitta");
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        }}
      />
    </div>
  </Provider>,
  document.getElementById("root")
);
