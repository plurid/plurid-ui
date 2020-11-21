// #region module
export const TOGGLE_GLOBAL_SHORTCUTS = 'TOGGLE_GLOBAL_SHORTCUTS';
export interface ToggleGlobalShortcutsAction {
    type: typeof TOGGLE_GLOBAL_SHORTCUTS;
    payload?: boolean;
}



export interface State {
    global: boolean;
}


export type Actions =
    | ToggleGlobalShortcutsAction;
// #endregion module
