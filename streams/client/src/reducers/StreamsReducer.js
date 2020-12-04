import {
  STREAM_CREATE,
  STREAM_EDIT,
  STREAM_DELETE,
  STREAM_GET_DETAILLS,
  STREAM_GET_LIST,
} from "../actions/StreamsActions";

const streamReducer = (oldStreams = [], action) => {
  switch (action.type) {
    case STREAM_CREATE:
      return [...oldStreams, action.payload];

    case STREAM_EDIT:
      const newArr = oldStreams.map((stream) => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
      return newArr;

    case STREAM_DELETE:
      const newStreams = [];
      oldStreams.forEach((stream) => {
        if (stream.id !== action.payload.id) {
          newStreams.push(stream);
        }
      });

      return newStreams;

    case STREAM_GET_DETAILLS:
      return [action.payload];

    case STREAM_GET_LIST:
      return [...action.payload];

    default:
      return oldStreams;
  }
};

export default streamReducer;
