import { Action, applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";
import { RouterState, routerMiddleware, connectRouter, RouterAction } from "connected-react-router";
import sideMenuReducer, { SideMenuState, SideMenuActions } from "./states/stateSideMenu";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// Search関連
import { MovieActions } from "./actions/movieActions";
import { movieReducer, MovieState } from './states/stateMovie'
// Bookmark関連
import { BookmarkActions } from "./actions/movieBookMarkActions";
import { bookmarkReducer, BookMarkState } from "./states/stateBookmarks";
const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['']
}

export const history = createBrowserHistory();

export default createStore(
  combineReducers({
      router: connectRouter(history),
      sideMenuReducer,
      // other reducer...
      movie: movieReducer,
      bookmark: bookmarkReducer
  }),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk)),
);

export type ReduxState = {
  router: RouterState;
  app: SideMenuState;
  // other state...
  movie: MovieState;
  bookmark: BookMarkState;
};

export type ReduxAction = Action | RouterAction | SideMenuActions | MovieActions | BookmarkActions;
