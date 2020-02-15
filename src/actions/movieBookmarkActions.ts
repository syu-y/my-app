import actionCreatorFactory, { Action }  from 'typescript-fsa';
import { ActionType } from './actionType';
import { Movie } from './MovieType';

const actionCreator = actionCreatorFactory();

export interface BookmarkActions {
  bookmarkOn: (v: Movie) => Action<void>;
  bookmarkOff: (v: Movie) => Action<void>;
}

export const movieBookmarkActions = {
  bookmarkOn: actionCreator<Movie>(ActionType.MOVIE_BOOKMARK_ON),
  bookmarkOff: actionCreator<Movie>(ActionType.MOVIE_BOOKMARK_OFF)
};
