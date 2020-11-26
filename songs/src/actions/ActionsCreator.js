export const getSongSelectionAction = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
