import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import { connect } from "react-redux";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div style={{ marginTop: "10px" }}>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route
              path="/streams/delete/:id"
              exact={true}
              component={StreamDelete}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  // This is just to make sure -
  // Everything is re-rendered when 'currentUser' changes.
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps)(App);
