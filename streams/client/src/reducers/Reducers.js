import { combineReducers } from "redux";

import { reducer as reduxFormReducer } from "redux-form";

import { ACTION_SIGN_IN, ACTION_SIGN_OUT } from "../actions/GooglAuthActions";

const handleAuth = (currentUser = null, action) => {
  switch (action.type) {
    case ACTION_SIGN_IN:
      return { isSingedIn: true, userId: action.payload };

    case ACTION_SIGN_OUT:
      return null;
    default:
      return currentUser;
  }
};

export default combineReducers({
  currentUser: handleAuth,
  form: reduxFormReducer,
});
