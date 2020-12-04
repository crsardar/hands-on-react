import streams from "../rest-api/streams";

export const STREAM_CREATE = "STREAM_CREATE";
export const STREAM_EDIT = "STREAM_EDIT";
export const STREAM_DELETE = "STREAM_DELETE";
export const STREAM_GET_LIST = "STREAM_GET_LIST";

export const createStremAction = (values) => {
  const create = async (dispatch, getStore) => {
    const response = await streams.post("/stream", values);
    dispatch({ type: STREAM_CREATE, payload: response.data });
  };

  return create;
};

export const getStreamsListAction = () => async (dispatch) => {
  const response = await streams.get("/stream");
  console.log(response);
  dispatch({ type: STREAM_GET_LIST, payload: response.data });
};
