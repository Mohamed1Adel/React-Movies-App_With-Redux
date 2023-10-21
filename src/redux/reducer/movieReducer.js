import { AllMOVIES } from "../types/moviesType";




export const moviesReducer = (state = { movies: [], pageCount: 0 }, action) => {
  switch (action.type) {
    case AllMOVIES:
      return {
        movies: action.data,
        pageCount:action.pages
      };
    default:
      return state;
  }
};
