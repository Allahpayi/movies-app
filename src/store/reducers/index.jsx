import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { watchListReducer } from "./watchListReducer";

const reducers = combineReducers({
  allMovies: moviesReducer,
  watchList: watchListReducer,
});

export default reducers;
