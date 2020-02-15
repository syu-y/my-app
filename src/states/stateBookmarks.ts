import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { movieBookmarkActions } from '../actions/movieBookmarkActions';
import { Movie } from '../actions/MovieType';

export interface BookMarkState {
  movies: Array<Movie>
}

export const initialState: BookMarkState = {
  movies: []
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
    return Object.assign({}, state, {
      movies: addItem(state.movies, movie)
    });
  })
  .case(movieBookmarkActions.bookmarkOff, (state, movie) => {
    console.log("bookmark off");
    return Object.assign({}, state, {
      movies: removeItem(state.movies, movie)
    });
  })
