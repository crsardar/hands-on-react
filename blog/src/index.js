import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import Blogs from "./components/Blogs";

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="ui container">
        <Blogs />
      </div>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
