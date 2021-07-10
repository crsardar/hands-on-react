import { combineReducers } from "redux";

const getBlogs = (oldBlogList = [], action) => {
  switch (action.type) {
    case "GET_BLOG_LIST":
      return action.payload;
    default:
      return oldBlogList;
  }
};

const getUsers = (oldList = [], action) => {
  switch (action.type) {
    case "GET_USER_LIST":
      const users = oldList.filter((user) => user.id === action.payload.id);
      if (users && users.length > 0) {
        // User already present
        return [...oldList];
      } else {
        return [...oldList, action.payload];
      }

    default:
      return oldList;
  }
};

export default combineReducers({
  blogs: getBlogs,
  users: getUsers,
});
