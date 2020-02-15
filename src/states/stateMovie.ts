import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { movieActions } from '../actions/movieActions';
import { Movie } from '../actions/MovieType';

export interface MovieState {
  loading: boolean,
  movies: Array<Movie>,
  errorMessage: string | null
}

export const initialState: MovieState = {
  loading: true,
  movies: [],
  errorMessage: null
};

export const movieReducer = reducerWithInitialState(initialState)
  .case(movieActions.searchMovies, (state) => {
    console.log("start search");
    return Object.assign({}, state, {
      loading: true,
      errorMessage: null
    });
  })
  .case(movieActions.requestSuccess, (state, movies) => {
    console.log("search success");
    // console.log(movies);
    return Object.assign({}, state, {
      loading: false,
      movies: movies,
      errorMessage: null
    });
  })
  .case(movieActions.requestFailure, (state, errorMessage) => {
    console.log("search failure");
    return Object.assign({}, state, {
      loading: false,
      errorMessage: errorMessage
    });
  })
