import streams from "../rest-api/streams";

export const STREAM_CREATE_SUCCEED = "STREAM_CREATE_SUCCEED";
export const STREAM_CREATE_FAILED = "STREAM_CREATE_FAILED";

export const STREAM_GET_DETAILLS_SUCCEED = "STREAM_GET_DETAILLS_SUCCEED";
export const STREAM_GET_DETAILLS_FAILED = "STREAM_GET_DETAILLS_FAILED";

export const STREAM_GET_LIST_SUCCEED = "STREAM_GET_LIST_SUCCEED";
export const STREAM_GET_LIST_FAILED = "STREAM_GET_LIST_FAILED";

export const STREAM_EDIT_SUCCEED = "STREAM_EDIT_SUCCEED";
export const STREAM_EDIT_FAILED = "STREAM_EDIT_FAILED";

export const STREAM_DELETE_SUCCEED = "STREAM_DELETE_SUCCEED";
export const STREAM_DELETE_FAILED = "STREAM_DELETE_FAILED";

export const actionStremCreate = (values) => {
  const create = async (dispatch, getStore) => {
    if (getStore().currentUser) {
      const userId = getStore().currentUser.userId;
      values = { ...values, userId };
    }
    const response = await streams.post("/streams", values);
    if (response.data) {
      dispatch({ type: STREAM_CREATE_SUCCEED, payload: response.data });
    } else {
      dispatch({ type: STREAM_CREATE_FAILED, payload: response.error });
    }
  };

  return create;
};

export const actionStreamDetails = (id) => {
  const getFun = async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    if (response.data) {
      dispatch({ type: STREAM_GET_DETAILLS_SUCCEED, payload: response.data });
    } else {
      dispatch({ type: STREAM_GET_DETAILLS_FAILED, payload: response.error });
    }
  };

  return getFun;
};

export const actionStreamsList = () => async (dispatch) => {
  const response = await streams.get("/streams");

  if (response.data) {
    dispatch({ type: STREAM_GET_LIST_SUCCEED, payload: response.data });
  } else {
    dispatch({ type: STREAM_GET_LIST_FAILED, payload: response.error });
  }
};

export const actionStreamEdit = (id, values) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, values);

  if (response.data) {
    dispatch({ type: STREAM_EDIT_SUCCEED, payload: response.data });
  } else {
    dispatch({ type: STREAM_EDIT_FAILED, payload: response.error });
  }
};

export const actionStreamDelete = (id) => async (dispatch) => {
  const response = await streams.delete(`/streams/${id}`);

  if (response.data) {
    dispatch({ type: STREAM_DELETE_SUCCEED, payload: response.data });
  } else {
    dispatch({ type: STREAM_DELETE_FAILED, payload: response.error });
  }
};
