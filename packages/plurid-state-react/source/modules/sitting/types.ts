export const SET_SITTING_CURRENT_LINK = 'SET_SITTING_CURRENT_LINK';
export interface SetSittingCurrentLinkAction {
    type: typeof SET_SITTING_CURRENT_LINK;
    payload: string;
}


export const TOGGLE_SITTING_TRAY = 'TOGGLE_SITTING_TRAY';
export interface ToggleSittingTrayAction {
    type: typeof TOGGLE_SITTING_TRAY;
    payload?: boolean;
}



export interface State {
    currentLink: string;
    tray: boolean;
}


export type Actions = SetSittingCurrentLinkAction
    | ToggleSittingTrayAction;
