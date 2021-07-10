import { combineReducers } from "redux";

import { reducer as reduxFormReducer } from "redux-form";

import { authReducer } from "./GoogleAuthReducer";

import streamReducer from "./StreamsReducer";

export default combineReducers({
  currentUser: authReducer,
  streamData: streamReducer,
  form: reduxFormReducer,
});
