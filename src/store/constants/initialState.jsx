export const initialState = {
  movies: [],
  watchList: localStorage.getItem("watch-list")
    ? JSON.parse(localStorage.getItem("watch-list"))
    : [],
};
