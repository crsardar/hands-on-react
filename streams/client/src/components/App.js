import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter, Route } from "react-router-dom";

import thunk from "redux-thunk";

import reducer from "../reducers";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <div style={{ marginTop: "10px" }}>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/show" exact component={StreamShow} />
            <Route
              path="/streams/delete"
              exact={true}
              component={StreamDelete}
            />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
