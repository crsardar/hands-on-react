import { connect } from "react-redux";

import { getSongSelectionAction } from "../actions/ActionsCreator";

const SongsList = ({ songs, selectSong }) => {
  var listJSX = null;
  if (songs || songs.lenghth > 0) {
    listJSX = songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  return <div className="ui divided list">{listJSX}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songList };
};

export default connect(mapStateToProps, 
  // selectSong - name of the property(inside React component) which will have a refence of bonded function 
  // for 'action creator function'
  // getSongSelectionAction - 'action creator function'
  { selectSong: getSongSelectionAction })(
  SongsList
);

/*
* If we elaborate above line, it will be like this - 

const connectFun = connect(mapStateToProps, { selectSong: getSongSelectionAction });
const connectResult = connectFun(SongsList);
export default connectResult;

*/
