import { ActionTypes } from "../constants/action-types";

export const addWatchList = (movie) => {
  return {
    type: ActionTypes.ADD_TO_WATCH_LIST,
    payload: movie,
  };
};

export const removeWatchList = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_WATCH_LIST,
    payload: id,
  };
};
