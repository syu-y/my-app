import actionCreatorFactory, { Action }  from 'typescript-fsa';
import { ActionType } from './actionType';
import { Movie } from './MovieType';

const actionCreator = actionCreatorFactory();

export interface MovieActions {
  searchMovies: () => Action<void>;
  requestSuccess: (v: Array<Movie>) => Action<Array<Movie>>;
  requestFailure: (v: string | null) => Action<string | null>;
}

export const movieActions = {
  searchMovies: actionCreator(ActionType.SEARCH_MOVIES_REQUEST),
  requestSuccess: actionCreator<Array<Movie>>(ActionType.SEARCH_MOVIES_SUCCESS),
  requestFailure: actionCreator<string | null>(ActionType.SEARCH_MOVIES_FAILURE)
};
