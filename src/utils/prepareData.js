export const prepareData = (data) => {
  return data.map((song) => ({
    ...song,
    duration_seconds: song.duration_ms / 1000,
  }));
};
