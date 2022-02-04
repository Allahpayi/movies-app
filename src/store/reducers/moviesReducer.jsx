import { ActionTypes } from "../constants/action-types";
import { initialState } from "../constants/initialState";

export const moviesReducer = (
  state = initialState.movies,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
