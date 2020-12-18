export const ACTION_SIGN_IN = "ACTION_SIGN_IN";
export const ACTION_SIGN_OUT = "ACTION_SIGN_OUT";

export const actionOnSignIn = (userId) => {
  return {
    type: ACTION_SIGN_IN,
    payload: userId,
  };
};

export const actionOnSignOut = () => {
  return {
    type: ACTION_SIGN_OUT,
  };
};
