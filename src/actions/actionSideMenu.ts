import { Action } from "redux";
import { ActionType } from './actionType';


export interface OpenSideMenuAction extends Action {
    type: ActionType.OPEN;
}
export const openSideMenu = (): OpenSideMenuAction => ({
    type: ActionType.OPEN
});

export interface CloseSideMenuAction extends Action {
    type: ActionType.CLOSE;
}

export const closeSideMenu = (): CloseSideMenuAction => ({
    type: ActionType.CLOSE
});
