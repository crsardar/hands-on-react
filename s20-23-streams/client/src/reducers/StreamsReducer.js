import {
  STREAM_CREATE_SUCCEED,
  STREAM_CREATE_FAILED,
  STREAM_GET_DETAILLS_SUCCEED,
  STREAM_GET_DETAILLS_FAILED,
  STREAM_GET_LIST_SUCCEED,
  STREAM_GET_LIST_FAILED,
  STREAM_EDIT_SUCCEED,
  STREAM_EDIT_FAILED,
  STREAM_DELETE_SUCCEED,
  STREAM_DELETE_FAILED,
} from "../actions/StreamsActions";

const streamReducer = (oldStreamData = [], action) => {
  switch (action.type) {
    case STREAM_CREATE_SUCCEED:
      return {
        streamOpStatus: STREAM_CREATE_SUCCEED,
        streams: [...oldStreamData.streams, action.payload],
      };

    case STREAM_CREATE_FAILED:
      return {
        streamOpStatus: STREAM_CREATE_FAILED,
        streams: [...oldStreamData.streams, action.payload],
      };

    case STREAM_GET_DETAILLS_SUCCEED:
      return {
        streamOpStatus: STREAM_GET_DETAILLS_SUCCEED,
        streams: [action.payload],
      };

    case STREAM_GET_DETAILLS_FAILED:
      return {
        streamOpStatus: STREAM_GET_DETAILLS_FAILED,
        streams: [],
      };

    case STREAM_GET_LIST_SUCCEED:
      return {
        streamOpStatus: STREAM_GET_LIST_SUCCEED,
        streams: [...action.payload],
      };

    case STREAM_GET_LIST_FAILED:
      return {
        streamOpStatus: STREAM_GET_LIST_FAILED,
        streams: [],
      };

    case STREAM_EDIT_SUCCEED:
      const newArr = oldStreamData.streams.map((stream) => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
      return {
        streamOpStatus: STREAM_EDIT_SUCCEED,
        streams: newArr,
      };

    case STREAM_EDIT_FAILED:
      return {
        streamOpStatus: STREAM_EDIT_FAILED,
        streams: [...oldStreamData.streams],
      };

    case STREAM_DELETE_SUCCEED:
      const newStreams = [];
      oldStreamData.streams.forEach((stream) => {
        if (stream.id !== action.payload.id) {
          newStreams.push(stream);
        }
      });

      return {
        streamOpStatus: STREAM_DELETE_SUCCEED,
        streams: newStreams,
      };

    case STREAM_DELETE_FAILED:
      return {
        streamOpStatus: STREAM_DELETE_FAILED,
        streams: [...oldStreamData.streams],
      };

    default:
      return oldStreamData;
  }
};

export default streamReducer;
