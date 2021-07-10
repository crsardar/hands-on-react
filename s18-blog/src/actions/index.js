import jsonPlaceHolder from "../api/JsonPlaceHolder";

export const createGetBlogsAction = () => {
  const fetchFun = async (dispatch) => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "GET_BLOG_LIST", payload: response.data });
  };

  return fetchFun;
};

export const createGetUserAction = (userId) => {
  const fetchFun = async (dispatch, getStore) => {
    // console.log("Start fetchUser : userId = " + userId);
    // console.log(getStore());

    // console.log(`Fetching user for id =${userId}`);
    const response = await jsonPlaceHolder.get(`/users/${userId}`);
    // console.log(response);

    dispatch({
      type: "GET_USER_LIST",
      payload: response.data,
    });
  };

  return fetchFun;
};

/*
export const createGetUserAction = (userId) => {
  const fetchFun = async (dispatch, getStore) => {
    console.log("Start fetchUser");
    console.log(getStore());
    const userList = getStore().users;

    const users = userList.filter((user) => user.id === userId);
    if (users && users.length > 0) {
      // User already present
      dispatch({ type: "GET_USER_LIST", payload: users[0] });
    } else {
      // console.log(`Fetching user for id =${userId}`);
      const response = await jsonPlaceHolder.get(`/users/${userId}`);
      console.log(response);

      dispatch({
        type: "GET_USER_LIST",
        payload: response.data,
      });
    }
  };

  return fetchFun;
};
*/
