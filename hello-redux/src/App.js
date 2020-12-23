import React from "react";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import { counterReducer } from "./CounterReducer";

import Counter from "./Counter";
import Controls from "./Controls";

const reducer = combineReducers({
  counterVal: counterReducer,
});

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <br />
        <div>Hello React - Redux</div>
        <br />
        <Counter />
        <br />
        <Controls />
      </Provider>
    );
  }
}
export default App;
