import { Action, applyMiddleware, compose, createStore, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { RouterState, routerMiddleware, connectRouter, RouterAction } from "connected-react-router";
import sideMenuReducer, { SideMenuState, SideMenuActions } from "./states/stateSideMenu";

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default createStore(
  combineReducers({
      router: connectRouter(history),
      sideMenuReducer,
      // other reducer...
  }),
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
);

export type ReduxState = {
  router: RouterState;
  app: SideMenuState;
  // other state
};

export type ReduxAction = Action | RouterAction | SideMenuActions;
