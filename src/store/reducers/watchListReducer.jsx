import { ActionTypes } from "../constants/action-types";
import { initialState } from "../constants/initialState";

export const watchListReducer = (
  state = initialState.watchList,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_TO_WATCH_LIST:
      localStorage.setItem("watch-list", JSON.stringify([...state, payload]));
      return [...state, payload];
    case ActionTypes.REMOVE_FROM_WATCH_LIST: {
      const newState = state.filter((movie) => movie.id !== payload);
      localStorage.setItem("watch-list", JSON.stringify(newState));
      return [...newState];
    }
    default:
      return state;
  }
};
