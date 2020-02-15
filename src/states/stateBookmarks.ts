import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { movieBookmarkActions } from '../actions/movieBookmarkActions';
import { Movie } from '../actions/MovieType';
import { toast } from "react-toastify";

export interface BookMarkState {
  bookmarks: Array<Movie>
}

export const initialState: BookMarkState = {
  bookmarks: []
};

function addItem(array: Array<Movie>, item: Movie) {
  return Array.from(new Set([...array, item]));
}

function removeItem(array: Array<Movie>, item: Movie) {
  return array.filter((v, i) => v !== item);
}

export const bookmarkReducer = reducerWithInitialState(initialState)
  .case(movieBookmarkActions.bookmarkOn, (state, movie) => {
    console.log("bookmark on");
    console.log(state.bookmarks);
    toast.success("Add Bookmark!");
    return Object.assign({}, state, {
      bookmarks: addItem(state.bookmarks, movie)
    });
  })
  .case(movieBookmarkActions.bookmarkOff, (state, movie) => {
    console.log("bookmark off");
    toast.warn("Remove Bookmark!");
    return Object.assign({}, state, {
      bookmarks: removeItem(state.bookmarks, movie)
    });
  })