import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducers } from "./reducers/Reducers";

import SongsList from "./components/SongList";
import SongDetails from "./components/SongDetails";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <div style={{ marginTop: "25px", textAlign: "center" }}>
              <h3>My Favotites!</h3>
            </div>
            <SongsList />
          </div>
          <div className="column eight wide">
            <SongDetails />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
