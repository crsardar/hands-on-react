import { useEffect } from "react";
import { connect } from "react-redux";

import { createGetUserAction } from "../actions";

const UserHeader = ({ userId, getUserDetails, userList }) => {
  useEffect(() => {
    // Makes only one Network request for eact unique userId
    const underProcessing = window.underProcessing
      ? window.underProcessing
      : [];
    const foundUserIds = underProcessing.filter(
      (userIdInProcess) => userIdInProcess === userId
    );
    if (!foundUserIds || foundUserIds.length <= 0) {
      window.underProcessing = [...underProcessing, userId];
      getUserDetails(userId);
    }
  }, [userId, getUserDetails]);

  const users = userList.filter((user) => user.id === userId);

  if (users && users.length > 0) {
    return <div className="header">{users[0].name}</div>;
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return { userList: state.users };
};

export default connect(mapStateToProps, {
  getUserDetails: createGetUserAction,
})(UserHeader);
