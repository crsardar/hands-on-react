import { useEffect } from "react";
import { connect } from "react-redux";

import { actionOnSignIn, actionOnSignOut } from "../actions/GooglAuthActions";

const GoogleAuth = ({ currentUser, onSignIn, onSignOut }) => {
  var auth = window.gapi.auth2 ? window.gapi.auth2.getAuthInstance() : null;

  const setAuth = (authInst) => {
    auth = authInst;
  };

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "644666619965-mjpuagqgc3et0l0irdb5o66htgfaavrq.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();

          setAuth(auth);

          auth.isSignedIn.listen(onAuthChange);

          onAuthChange(auth.isSignedIn.get());
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const userId =
        auth && auth.currentUser ? auth.currentUser.get().getId() : null;

      onSignIn(userId);
    } else {
      onSignOut();
    }
  };

  if (currentUser) {
    return (
      <button
        className="ui red google button"
        onClick={(e) => {
          auth.signOut();
        }}
      >
        <i className="google icon" />
        Sign Out
      </button>
    );
  } else {
    return (
      <button
        className="ui red google button"
        onClick={(e) => {
          auth.signIn();
        }}
      >
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, {
  onSignIn: actionOnSignIn,
  onSignOut: actionOnSignOut,
})(GoogleAuth);
