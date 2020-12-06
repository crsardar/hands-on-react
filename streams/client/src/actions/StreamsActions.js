import streams from "../rest-api/streams";

export const STREAM_CREATE = "STREAM_CREATE";
export const STREAM_EDIT = "STREAM_EDIT";
export const STREAM_DELETE = "STREAM_DELETE";
export const STREAM_GET_DETAILLS = "STREAM_GET_DETAILLS";
export const STREAM_GET_LIST = "STREAM_GET_LIST";

export const actionStremCreate = (values) => {
  const create = async (dispatch, getStore) => {
    const userId = getStore().currentUser.userId;
    const response = await streams.post("/streams", { ...values, userId });
    dispatch({ type: STREAM_CREATE, payload: response.data });
  };

  return create;
};

export const actionStreamDetails = (id) => {
  const getFun = async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: STREAM_GET_DETAILLS, payload: response.data });
  };

  return getFun;
};

export const actionStreamsList = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: STREAM_GET_LIST, payload: response.data });
};

export const actionStreamEdit = (id, values) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, values);

  dispatch({ type: STREAM_EDIT, payload: response.data });
};

export const actionStreamDelete = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: STREAM_DELETE, payload: id });
};
