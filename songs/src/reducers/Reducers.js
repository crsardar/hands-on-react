import { combineReducers } from "redux";

const songs = [
  { title: "Never Say Never", duration: "3.49 minutes" },
  { title: "Coming back to life", duration: "6.26 minutes" },
  { title: "Mai Hoon - Indian Army!", duration: "3.39 minutes" },
  {
    title: "My dream is to fly over the rainbow so high",
    duration: "3.04 minutes",
  },
  { title: "Wavin' Flag", duration: "3.44 minutes" },
  { title: "Wind of change", duration: "4.42 minutes" },
  { title: "Hotel California", duration: "6.51 minutes" },
];

// Redux's Reducers
const createSongList = (songList = []) => {
  return songs;
};

const selectSong = (selectedSong = "Please select a song", action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

/**
 NOTE - This is a named export, the mane has to match during import.
 
 import { reducers } from "./reducers/Reducers"; // - OK

 import { anyName } from "./reducers/Reducers"; // - Will NOT work
*/
export const reducers = combineReducers({
  songList: createSongList,
  selectedSong: selectSong,
});
