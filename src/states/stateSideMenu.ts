import { OpenSideMenuAction, CloseSideMenuAction } from '../actions/actionSideMenu'
import { ActionType } from '../actions/actionType';

export interface SideMenuState {
  isOpened: boolean;
}

export type SideMenuActions = OpenSideMenuAction | CloseSideMenuAction;

const initialState: SideMenuState = {
  isOpened: false
};

export default function reducer( state: SideMenuState = initialState, action: SideMenuActions): SideMenuState {
  switch (action.type) {
    case ActionType.OPEN:
        return { isOpened: true };
    case ActionType.CLOSE:
        return { isOpened: false };
    default:
        return state;
  }
}
