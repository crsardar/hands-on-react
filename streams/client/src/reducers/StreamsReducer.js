import {
  STREAM_CREATE,
  STREAM_EDIT,
  STREAM_DELETE,
  STREAM_GET_LIST,
} from "../actions/StreamsActions";

const streamReducer = (oldStreams = [], action) => {
  switch (action.type) {
    case STREAM_CREATE:
      return [...oldStreams, action.payload];
    case STREAM_EDIT:
      return oldStreams;
    case STREAM_DELETE:
      return oldStreams;
    case STREAM_GET_LIST:
      return [...action.payload];
    default:
      return oldStreams;
  }
};

export default streamReducer;
