import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const getMovies = (movies) => {
  return {
    type: ActionTypes.GET_MOVIES,
    payload: movies,
  };
};
export const loadMovies = (slug) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${slug}?api_key=a4ff0bde83d34e2353d1fb05ca195d80`
    );
    const responseData = await response.data;
    dispatch(getMovies(responseData));
  };
};
